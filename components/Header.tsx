import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

function Header() {
  const { user, logout } = useMoralis();
  return (
    <div className="grid grid-cols-2 h-14">
      <div className="flex items-center gap-4">
        <Image
          className="object-cover rounded-full"
          src="https://raw.githubusercontent.com/javieralaves/images/main/Logo.png"
          height={48}
          width={48}
        />
        <p className="font-semibold text-2xl">0xAlicante</p>
      </div>

      <div className="flex items-center place-content-end gap-4">
        <button
          className="bg-gray-100 px-4 py-3 rounded-full text-gray-500 font-medium hover:bg-gray-200 hover:text-gray-700 transition ease-in-out"
          onClick={logout}
        >
          Log out
        </button>
        <button className="bg-gray-100 px-4 py-3 rounded-full text-gray-500 font-medium hover:bg-gray-200 hover:text-gray-700 transition ease-in-out">
          Change username
        </button>
        <div className="relative h-12 w-12">
          <Avatar username={user.get("username")} />
        </div>
      </div>
    </div>
  );
}

export default Header;
