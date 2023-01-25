import Header from "../shared/Header";
import Footer from "../shared/Footer";
import Head from "next/head";
import { useEffect } from "react";

const Layout = ({ children, title = "News" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <nav className="fixed top-0 left-0 right-0 z-30">
        <Header />
      </nav>

      <main>{children}</main>

      <footer>
        <div className="bg-blue-800">
          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Layout;
