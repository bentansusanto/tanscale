import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Script from "next/script";
import MetaPageViewTracker from "@/components/analytics/MetaPageViewTracker";
import "@/styles/globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-opensans",
});

export const metadata: Metadata = {
  title: "Tanscale — Website Flagship & Meta Ads Cepat untuk Travel Agency",
  description:
    "Solusi cepat biro travel agency di Indonesia: Bikin Website Flagship + Jasa Setup Meta Ads GRATIS. Datangkan calon jamaah & wisatawan baru begitu website live. Kuota 5 slot/bulan.",
  keywords: [
    "website travel agency",
    "meta ads travel agency",
    "iklan umroh facebook instagram",
    "leads whatsapp travel",
    "tanscale",
    "jasa website travel",
  ],
  icons: {
    icon: [
      { url: "/favicon-tanscale.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-tanscale.svg",
    apple: "/favicon-tanscale.svg",
  },
  openGraph: {
    title: "Tanscale — Website Flagship & Meta Ads Cepat untuk Travel Agency",
    description: "Bikin Website + Jasa Setup Iklan Meta Ads Gratis untuk Travel Agency Indonesia. Langsung cepat dapat customer baru begitu web live.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaTrackingId =
    process.env.NEXT_PUBLIC_GA_TRACKING_ID || process.env.GA_TRACKING_ID;
  const metaPixelId =
    process.env.NEXT_PUBLIC_META_PIXEL_ID || process.env.META_PIXEL_ID || "2162419881376527";

  return (
    <html lang="id" className={openSans.variable}>
      <head>
        <meta name="theme-color" content="#2563EB" />
        <link rel="icon" href="/favicon-tanscale.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon-tanscale.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon-tanscale.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className={openSans.className}>
        {/* Google Analytics Tag */}
        {gaTrackingId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${gaTrackingId}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}

        {/* Meta Pixel Tag */}
        {metaPixelId && (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${metaPixelId}');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}

        <MetaPageViewTracker />
        {children}
      </body>
    </html>
  );
}


