import Image from "next/image";
import { AlignJustify, Search, AppWindow } from "lucide-react";

export const SharedHeader = () => {
  return (
    <div className="absolute w-full">
      <div className="flex justify-between items-center ">
        <AlignJustify />
        <Image src="/TB-Logo.svg" width={30} height={100} alt="logo" />
        <Search />
      </div>
    </div>
  );
};
