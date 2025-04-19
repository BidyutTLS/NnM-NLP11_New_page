import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-white shadow-sm py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo.png" // 🔁 Replace with your logo path
              alt="Nail n Mane Logo"
              width={40}
              height={40}
            />
            <span className="text-xl font-bold text-[#54032d] font-dmserif">
              Nail n Mane
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm text-[#54032d] font-semibold">
          <a href="#benefits" className="hover:text-black">Benefits</a>
          <a href="#pricing" className="hover:text-black">Pricing</a>
          <a href="#faq" className="hover:text-black">FAQ</a>
          <a href="#buy" className="bg-[#54032d] text-white px-4 py-2 rounded-full hover:bg-[#3b0225]">
            Buy Now
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
