import '../styles/globals.css'
import { useEffect } from "react";
import { hotjar } from 'react-hotjar';

useEffect(() => {
  hotjar.initialize(2566228, 6);
}, [])

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
