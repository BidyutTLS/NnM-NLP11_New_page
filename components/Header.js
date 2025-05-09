import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";


const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 text-sm">
      {/* Top Utility Bar */}
      <div className="flex justify-between items-center px-6 py-2 bg-gray-50 text-gray-700">
        <div className="flex flex-wrap space-x-4">
          <Link href="#">My Account</Link>
          <Link href="#">Track Order</Link>
          <Link href="#">Help Center</Link>
          <Link href="#">Contact Us</Link>
          <Link href="#">AyuRewards</Link>
          <Link href="#">Refer & Get Discounts</Link>
          <span className="font-semibold">+1 (678)-498-7248</span>
          <Link href="#">Accessibility</Link>
        </div>
        <div className="flex items-center space-x-3">
          <span>United States (USD $)</span>
          <User size={16} />
          <Link href="#" className="hover:underline">Login</Link>
          <Link href="#" className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 text-xs bg-green-200 text-black rounded-full px-1">0</span>
          </Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={150} height={40} />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex space-x-6 font-semibold text-black text-sm">
          <NavItem label="ALL PRODUCTS" />
          <NavItem label="FACE" />
          <NavItem label="BODY" />
          <NavItem label="HAIR" />
          <NavItem label="BESTSELLERS" />
          <NavItem label="OFFERS" badge="NEW" />
          <NavItem label="NEW IN STORE" />
          <NavItem label="LEARN" />
          <Link href="#" className="hover:text-gray-700">REVIEWS</Link>
        </nav>

        {/* Search Box */}
        <div className="hidden lg:flex items-center border rounded-full px-3 py-1">
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm px-2 w-32"
          />
          <Search size={16} className="text-gray-500" />
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ label, badge }) => (
  <div className="relative group">
    <Link href="#" className="flex items-center space-x-1 hover:text-gray-700">
      <span>{label}</span>
      <ChevronDown size={14} />
    </Link>
    {badge && (
      <span className="absolute -top-3 left-full ml-1 bg-blue-600 text-white text-xs font-bold px-1.5 rounded">
        {badge}
      </span>
    )}
  </div>
);

export default Header;
