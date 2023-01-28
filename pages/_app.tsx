import "@/styles/globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
