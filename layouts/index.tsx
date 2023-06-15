import { FC, PropsWithChildren } from "react";

import Head from "next/head";
import Script from "next/script";

import Footer from "./Footer";
import Navbar from "./NavBar";

const LayoutDefault: FC<PropsWithChildren<{ title: string }>> = ({ children, title }) => {
  return (
    <div className={"flex flex-col h-full"}>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-T5NQBXJG35" strategy="worker" />
      <Script id="google-analytics" strategy="worker">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T5NQBXJG35');
          `}
      </Script>
      <Navbar />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};
export default LayoutDefault;
