import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import '../styles/globals.css';

// Extend the Window interface for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
      window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
    }
  }, []);

  return (
    <>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag; // Set gtag function on window
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
