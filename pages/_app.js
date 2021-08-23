import "../styles/globals.css";
import { useEffect } from "react";
import { hotjar } from "react-hotjar";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    hotjar.initialize(2566228, 6);
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
