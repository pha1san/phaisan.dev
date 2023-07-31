import { Metadata } from "next";
import "@/styles/globals.scss";
import { IBM_Plex_Mono } from "next/font/google";
import Script from "next/script";

import Footer from "@/layouts/Footer";
import NavBar from "@/layouts/NavBar";
import { Providers } from "./providers";

const inter = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://phaisan.dev"),
  title: "Phaisan U. - Frontend Developer",
  description: "Phaisan U. - Portfolio",
  openGraph: { images: "/me.jpg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers>
          <NavBar />
          {children}
          <Footer />
        </Providers>
      </body>
      <Script src="https://code.iconify.design/iconify-icon/1.0.7/iconify-icon.min.js" />

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
