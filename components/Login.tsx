import Head from "next/head";
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative">
      <Head>
        <title>0xAlicante</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col absolute z-50 h-4/6 w-full items-center justify-center space-y-4">
        <div className="flex flex-col gap-4 transition ease-in-out items-center bg-white px-20 py-16 rounded-xl drop-shadow-md hover:drop-shadow-xl">
          <Image
            className="object-cover rounded-full"
            src="https://raw.githubusercontent.com/javieralaves/images/main/0xterrace.png"
            height={80}
            width={80}
          />
          <div className="flex flex-col gap-1 items-center">
            <p className="text-2xl font-semibold text-gray-800">0xAlicante</p>
            <p className="text-gray-500">
              Alicante's most vibrant web3 community
            </p>
          </div>

          <button
            onClick={() => {
              authenticate();
            }}
            className="flex flex-row items-center gap-2 bg-black text-white rounded-full px-6 py-3 font-semibold mt-4"
          >
            <Image
              src="https://raw.githubusercontent.com/MetaMask/brand-resources/c3c894bb8c460a2e9f47c07f6ef32e234190a7aa/SVG/metamask-fox.svg"
              height={24}
              width={24}
            />
            Continue with MetaMask
          </button>
        </div>
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://images.unsplash.com/photo-1615716272135-38b8a68b148a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
