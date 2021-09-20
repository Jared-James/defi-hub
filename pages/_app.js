import "../styles/globals.css"
import { useEffect } from "react"
import { hotjar } from "react-hotjar"
import Script from "next/script"
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2566228, 6)
  }, [])
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-K7FVL440HM`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K7FVL440HM', {
              page_path: window.location.pathname,
            });
          `
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

// src="https://www.googletagmanager.com/gtag/js?id=G-K7FVL440HM"
