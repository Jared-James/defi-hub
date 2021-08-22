import '../styles/globals.css'
import { useEffect } from "react";

useEffect(() => {
  hotjar.initialize(2566228, 6);
}, [])

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
