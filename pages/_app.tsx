import "@/styles/globals.scss";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import LayoutDefault from "@/layouts";
import theme from "@/theme";

type pathToTitleType = {
  [K: string]: string;
};

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const pathToTitle: pathToTitleType = {
    "/": "Phaisan Uyarnontruk - Frontend Developer",
  };

  return (
    <ChakraProvider theme={theme}>
      <LayoutDefault title={pathToTitle[pathname]}>
        <Component {...pageProps} />
      </LayoutDefault>
    </ChakraProvider>
  );
}
