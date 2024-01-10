import React from "react";
import Image from "next/image";
import { AlignJustify, Search, AppWindow } from "lucide-react";

export const Footer = () => {
  return (
    <div className="absolute w-full z-5">
      <div className="bg-slate-300 flex justify-between items-center ">
        <AlignJustify />
        <Image src="/TB-Logo.svg" width={30} height={100} alt="logo" />
        <Search />
      </div>
    </div>
  );
};
