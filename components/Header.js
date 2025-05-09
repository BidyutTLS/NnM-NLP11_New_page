import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 text-sm">
      {/* Top Bar */}
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

      {/* Main Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-white">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={150} height={40} />
        </Link>

        {/* Nav */}
        <nav className="hidden lg:flex space-x-6 font-semibold text-black text-sm items-center relative">
          <MegaMenu label="ALL PRODUCTS" />
          <NavItem label="FACE" />
          <NavItem label="BODY" />
          <NavItem label="HAIR" />
          <NavItem label="BESTSELLERS" />
          <NavItem label="OFFERS" badge="NEW" />
          <NavItem label="NEW IN STORE" />
          <NavItem label="LEARN" />
          <Link href="#" className="hover:text-gray-700">REVIEWS</Link>
        </nav>

        {/* Search */}
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
  <div className="relative group cursor-pointer">
    <div className="flex items-center space-x-1 hover:text-gray-700">
      <span>{label}</span>
      <ChevronDown size={14} />
    </div>
    {badge && (
      <span className="absolute -top-3 left-full ml-1 bg-blue-600 text-white text-xs font-bold px-1.5 rounded">
        {badge}
      </span>
    )}
  </div>
);

// MegaMenu for "All Products"
const MegaMenu = ({ label }) => (
  <div className="relative group cursor-pointer">
    <div className="flex items-center space-x-1 hover:text-gray-700">
      <span>{label}</span>
      <ChevronDown size={14} />
    </div>

    <div className="absolute hidden group-hover:flex flex-row bg-white shadow-xl p-6 mt-2 z-50 w-[700px] border rounded-md">
      {/* Shop by Category */}
      <div className="mr-10 w-1/2">
        <h3 className="font-bold text-sm mb-3">Shop by Category</h3>
        <ul className="space-y-1 text-sm">
          {[
            "Face Oils", "Eye Care", "Cleansers", "Creams & Concentrates", "Lip Care",
            "Body Care", "Hair Care", "Massage Tools", "Vegan", "Dietary Supplements"
          ].map((item) => (
            <li key={item}>
              <a href="#" className="hover:underline">{item}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Shop by Brand */}
      <div className="w-1/2">
        <h3 className="font-bold text-sm mb-3">Shop by Brand</h3>
        <ul className="space-y-1 text-sm">
          {[
            { name: "iYURA", desc: "Authentic Ayurvedic Skincare" },
            { name: "Ajara", desc: "Inspired Daily Skin Care" },
            { name: "A Modernica", desc: "Ancient + Modern Science" },
            { name: "Ayuttva", desc: "Supplements & Foods" },
            { name: "The Ayurveda Experience", desc: "Learn Ayurveda" },
          ].map((brand) => (
            <li key={brand.name}>
              <a href="#" className="hover:underline">
                {brand.name} | <span className="text-gray-600">{brand.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
