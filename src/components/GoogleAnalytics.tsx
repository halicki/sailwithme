import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim();

export function GoogleAnalytics() {
  if (!GA_ID) return null;

  const safeId = JSON.stringify(GA_ID);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_ID)}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', ${safeId}, { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
