export const META_PIXEL_ID =
  process.env.NEXT_PUBLIC_META_PIXEL_ID || process.env.META_PIXEL_ID || "2162419881376527";

export interface MetaUserData {
  email?: string;
  phone?: string;
  fullName?: string;
}

export interface MetaCustomData {
  content_name?: string;
  content_category?: string;
  value?: number;
  currency?: string;
  [key: string]: unknown;
}

/**
 * Sends conversion events to both Meta Pixel (browser) and Meta Conversions API (server)
 * with the same event_id for automatic deduplication.
 */
export async function trackMetaEvent(
  eventName: "PageView" | "Lead" | "Contact" | "ViewContent" | string,
  options?: {
    eventId?: string;
    userData?: MetaUserData;
    customData?: MetaCustomData;
  }
) {
  const eventId =
    options?.eventId || `ev_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

  // 1. Fire browser Meta Pixel (if loaded)
  if (typeof window !== "undefined" && (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq) {
    try {
      (window as unknown as { fbq: (...args: unknown[]) => void }).fbq(
        "track",
        eventName,
        options?.customData || {},
        { eventID: eventId }
      );
    } catch (err) {
      console.warn("Meta Pixel browser tracking error:", err);
    }
  }

  // 2. Fire server-side Conversions API (non-blocking)
  if (typeof window !== "undefined") {
    try {
      fetch("/api/meta-conversions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          eventName,
          eventId,
          eventSourceUrl: window.location.href,
          userData: options?.userData,
          customData: options?.customData,
        }),
      }).catch((err) => {
        console.warn("Meta Conversions API request error:", err);
      });
    } catch (err) {
      console.warn("Meta Conversions API dispatch error:", err);
    }
  }

  return eventId;
}
