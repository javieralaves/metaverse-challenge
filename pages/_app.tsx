import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId="blwQuB7EaasLInw9AkGOBWhErEhPRRLnVzGzAJGD"
      serverUrl="https://9whuyitbjv5r.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
