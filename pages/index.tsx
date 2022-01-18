import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Image from "next/image";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="bg-fuchsia-400 w-screen h-screen flex justify-center items-center overflow-y-scroll">
      {/* The modal */}
      <div className="bg-white w-9/12 max-w-screen-xl h-4/5 rounded-lg shadow-2xl z-50 p-12">
        <Header />
      </div>

      {/* The background image */}
      <div className="w-full h-screen absolute">
        <Image
          src="https://images.unsplash.com/photo-1615716272135-38b8a68b148a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
