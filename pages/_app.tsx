import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset, theme } from "@chakra-ui/react";
import Navbar from "../components/header/Navbar";
import { Footers } from '../components/footers';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Navbar />
      <Component {...pageProps} />
      <Footers />
    </ChakraProvider>
  );
}
