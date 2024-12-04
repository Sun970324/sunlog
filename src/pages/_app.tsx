import type { AppProps } from "next/app";
import "@/styles/globals.css";
import NextHead from "@/components/next-head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextHead />
      <Component {...pageProps} />
    </>
  );
}
