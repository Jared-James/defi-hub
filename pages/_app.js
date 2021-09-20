import "../styles/globals.css"
import { useEffect } from "react"
import { hotjar } from "react-hotjar"
import Script from "next/script"

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2566228, 6)
  }, [])
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-K7FVL440HM`}
      />
      <Script strategy="lazyOnload">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-K7FVL440HM');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
