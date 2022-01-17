import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen overflow-y-scroll overflow-hidden">
      <Head>
        <title>0xAlicante</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-screen-xl mx-auto">
        <Header />
        {/* Messages */}
      </div>
    </div>
  );
}
