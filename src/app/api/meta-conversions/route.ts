import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

function sha256(value: string): string {
  return crypto.createHash("sha256").update(value.trim().toLowerCase()).digest("hex");
}

function normalizePhone(phone: string): string {
  let cleaned = phone.replace(/[^0-9]/g, "");
  if (cleaned.startsWith("0")) {
    cleaned = "62" + cleaned.slice(1);
  } else if (!cleaned.startsWith("62")) {
    cleaned = "62" + cleaned;
  }
  return cleaned;
}

export async function POST(request: NextRequest) {
  try {
    const pixelId =
      process.env.META_PIXEL_ID ||
      process.env.NEXT_PUBLIC_META_PIXEL_ID ||
      "2162419881376527";

    const accessToken =
      process.env.ACCESS_TOKEN_CONVERTION_API ||
      process.env.NEXT_PUBLIC_ACCESS_TOKEN_CONVERTION_API;

    if (!accessToken) {
      console.warn("Meta Conversions API: ACCESS_TOKEN_CONVERTION_API is missing in environment variables.");
      return NextResponse.json(
        { error: "Access token is missing" },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => ({}));
    const {
      eventName = "PageView",
      eventId,
      eventSourceUrl = request.nextUrl.origin,
      userData = {},
      customData = {},
    } = body;

    // Extract client IP and User Agent from request headers
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor ? forwardedFor.split(",")[0].trim() : request.headers.get("x-real-ip") || "";
    const userAgent = request.headers.get("user-agent") || "";

    // Extract Facebook cookies (_fbp and _fbc)
    const fbpCookie = request.cookies.get("_fbp")?.value;
    const fbcCookie = request.cookies.get("_fbc")?.value;

    // Prepare hashed user data adhering to Meta CAPI specs
    const formattedUserData: Record<string, unknown> = {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
    };

    if (fbpCookie) formattedUserData.fbp = fbpCookie;
    if (fbcCookie) formattedUserData.fbc = fbcCookie;

    if (userData.email) {
      formattedUserData.em = [sha256(userData.email)];
    }
    if (userData.phone) {
      formattedUserData.ph = [sha256(normalizePhone(userData.phone))];
    }
    if (userData.fullName) {
      const names = userData.fullName.trim().split(" ");
      if (names[0]) formattedUserData.fn = [sha256(names[0])];
      if (names.length > 1) formattedUserData.ln = [sha256(names[names.length - 1])];
    }

    const testEventCode =
      process.env.META_TEST_EVENT_CODE ||
      body.testEventCode;

    const finalEventId =
      eventId || `ev_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

    const eventPayload: Record<string, unknown> = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          event_id: finalEventId,
          event_source_url: eventSourceUrl,
          action_source: "website",
          user_data: formattedUserData,
          custom_data: customData,
        },
      ],
    };

    if (testEventCode) {
      eventPayload.test_event_code = testEventCode;
    }

    const metaUrl = `https://graph.facebook.com/v26.0/${pixelId}/events?access_token=${encodeURIComponent(accessToken)}`;

    const response = await fetch(metaUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventPayload),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Meta Conversions API error response:", result);
      return NextResponse.json(
        { success: false, error: result },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      events_received: result.events_received,
      fbtrace_id: result.fbtrace_id,
      event_id: finalEventId,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Meta Conversions API exception:", message);
    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
