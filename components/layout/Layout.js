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
          <script>
            {(function (h, o, t, j, a, r) {
              h.hj =
                h.hj ||
                function () {
                  (h.hj.q = h.hj.q || []).push(arguments);
                };
              h._hjSettings = { hjid: 2564929, hjsv: 6 };
              a = o.getElementsByTagName("head")[0];
              r = o.createElement("script");
              r.async = 1;
              r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
              a.appendChild(r);
            })(
              window,
              document,
              "https://static.hotjar.com/c/hotjar-",
              ".js?sv="
            )}
          </script>
        </Head>
        <NavBarComponent />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
