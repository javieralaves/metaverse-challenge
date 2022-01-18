import Image from "next/image";
import { useMoralis } from "react-moralis";

function Avatar({ username }) {
  const { user } = useMoralis();

  return (
    <Image
      className="rounded-full bg-gray-100"
      src={`https://avatars.dicebear.com/api/open-peeps/${
        username || user.get("username")
      }.svg`}
      layout="fill"
    />
  );
}

export default Avatar;
