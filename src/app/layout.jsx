import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';
import Whatsapp from "../Common/Whatsapp"

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({children}) {
  return (

    <html lang="en-IN">
      <Head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TRMJPWQH');`
          }}
        />
         <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-HRQ6P8G1NN`}
          /> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-HRQ6P8G1NN', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
      </Head>
      <body className={inter.className}>
        {children}
        <Whatsapp />
        <GoogleAnalytics gaId="G-HRQ6P8G1NN" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"
          strategy="lazyOnload" // This loads the script after the page is fully loaded
        // onLoad={() => {
        //   console.log('Flowbite script loaded successfully');
        // }}
        />

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRMJPWQH"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* <noscript>
            <iframe
              src="https://www.google-analytics.com/collect?v=1&t=pageview&tid=G-HRQ6P8G1NN"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript> */}
      </body>
    </html>
  );
}


export const metadata = {
  title: 'Event Planner in Lucknow - Event Dekho',
  description:
    'Event Dekho offers hassle-free event planning services including decoration, catering, photography, and cleaning in Lucknow. Book everything you need to host your perfect party, all in one place!',
  author: 'Event Dekho',
  keywords:
    'Best Event Planners in Lucknow, Wedding planner in lucknow , Engagement planner in lucknow ,Event & Party Planner, Events Planner in Lucknow, Party Planners in Lucknow, Birthday Party Planners, Wedding Planners, Anniversary Planners, Baby Shower Planners, Corporate Event Planners, Event Dekho, Event planner in Lucknow, event organiser in Lucknow, event management in Lucknow, event management company in Lucknow, best event management companies in Lucknow',
  robots: 'index, follow',
  canonical: 'https://www.eventdekho.in/',
  openGraph: {
    title: 'Event Planner in Lucknow - Event Dekho',
    description:
      'Event Dekho offers hassle-free event planning services including decoration, catering, photography, and cleaning in Lucknow. Book everything you need to host your perfect party, all in one place!',
    image:
      'https://www.eventdekho.in/_next/static/media/logo.0513172d.png',
    imageType: 'image/webp',
    imageWidth: 400,
    imageHeight: 300,
    imageAlt: 'Event Dekho - Event Planning Services in Lucknow',
    url: 'https://www.eventdekho.in/',
    type: 'website',
    siteName: 'Event Dekho',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Planner in Lucknow - Event Dekho',
    description:
      'Event Dekho offers hassle-free event planning services including decoration, catering, photography, and cleaning in Lucknow. Book everything you need to host your perfect party, all in one place!',
    image:
      'https://www.eventdekho.in/_next/static/media/logo.0513172d.png',
    imageAlt: 'Event Dekho Event Planning Services in Lucknow',
  },
  favicon: '/images/logo/eventdekho-logo.webp',
  geo: {
    region: 'IN',
    placename: 'Lucknow, India',
    position: '26.8467;80.9462',
  },
  viewport: 'width=device-width, initial-scale=1.0',
  lang: 'en-IN',
};