import { FC } from "react";
import Head from "next/head";

const SiteHead: FC<{ title: string }> = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content="Phaisan Uyarnontruk - Full Stack Developer" />
    <meta name="description" content="Phaisan Uyarnontruk - Portfolio" />
    <link rel="icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" href="/logo192.png" />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#252934" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.jarrodservilla.com/" />
    <meta property="og:title" content="Phaisan Uyarnontruk - Full Stack Developer" />
    <meta property="og:description" content="Phaisan Uyarnontruk's personal portfolio" />
    <meta property="og:image" content="/logo512.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="http://www.jarrodservilla.com/" />
    <meta property="twitter:title" content="Phaisan Uyarnontruk - Full Stack Developer" />
    <meta property="twitter:description" content="Phaisan Uyarnontruk's personal portfolio" />
    <meta property="twitter:image" content="/logo512.png" />
  </Head>
);

export default SiteHead;
