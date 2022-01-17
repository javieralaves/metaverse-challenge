import Image from "next/image";
import { useMoralis } from "react-moralis";

function Header() {
  const { user, logout } = useMoralis();
  return (
    <div>
      <div className="grid grid-cols-2 h-16">
        <div className="flex items-center">
          <Image
            className="object-cover rounded-full"
            src="https://raw.githubusercontent.com/javieralaves/images/main/0xterrace.png"
            height={32}
            width={32}
          />
        </div>
        <div className="flex items-center place-content-end">
          <button onClick={logout}>Log out</button>
        </div>
      </div>

      <h1 className="font-bold text-2xl mb-4">Welcome to 0xAlicante</h1>
    </div>
  );
}

export default Header;
