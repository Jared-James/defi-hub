import Head from "next/head";
import NavBarComponent from "../navBar/NavBarComponent";
const Layout = ({ children, title = "Crypto Tracker" }) => {
  return (
    <>
      <div className="layout">
        <Head>
          <title>{title}</title>
          <meta name="description" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavBarComponent />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
