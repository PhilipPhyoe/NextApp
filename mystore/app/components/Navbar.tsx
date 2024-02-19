import Image from "next/image";
import Link from "next/link";
import React from "react";
import Custombutton from "./button";

const Navbar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="flex flex-row justify-between items-center bg-transparent">
        <Link href="/">
          <Image
            src="/7th anniversary.jpg"
            alt="logo"
            width={100}
            height={18}
            className="object-contain"
          />
        </Link>
        <Custombutton
          title="Sign In"
          containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
          btntype="button"
        />
      </nav>
    </header>
  );
};

export default Navbar;
