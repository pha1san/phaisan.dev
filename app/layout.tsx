import { Metadata } from "next";
import "@/styles/globals.scss";
import { IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";

import Footer from "@/layouts/Footer";
import NavBar from "@/layouts/NavBar";

const inter = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Phaisan U. - Frontend Developer",
  description: "Phaisan U. - Portfolio",
  openGraph: { images: "/me.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-T5NQBXJG35" strategy="worker" />
      <Script id="google-analytics" strategy="worker">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T5NQBXJG35');
          `}
      </Script>
    </html>
  );
}
