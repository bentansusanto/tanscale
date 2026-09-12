"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackMetaEvent } from "@/lib/metaPixel";

export default function MetaPageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Fires both browser Pixel and Server Conversions API with deduplicated eventId
    trackMetaEvent("PageView");
  }, [pathname]);

  return null;
}
