// ✅ Final Updated Header (with branding, accessibility, phone, fonts)

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetch("/cart.js")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("craft", JSON.stringify({ cart: data }));
        setCartCount(data.item_count);
      });
  }, []);

  return (
    <header className="w-full border-b border-gray-200 text-sm font-[\'Poppins\']">
      <div className="flex flex-wrap justify-between items-center px-6 py-2 bg-gray-50 text-gray-700">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount" className="hover:underline">My Account</a>
          <a href="https://track.theayurvedaexperience.com/?_gl=1*1fmxo4q*_gcl_au*MTQ5ODgwNTY2Ny4xNzQwOTk4NjA3" className="hover:underline">Track Order</a>
          <a href="https://theayurveda-experience.reamaze.com/" className="hover:underline">Help Center</a>
          <a href="https://theayurvedaexperience.com/pages/contact-us-here" className="hover:underline">Contact Us</a>
          <a href="https://theayurvedaexperience.com/pages/ayurewards-n" className="hover:underline">AyuRewards</a>
          <a href="tel:+16784987248" className="hover:underline font-semibold whitespace-nowrap">+1 (678)-498-7248</a>
          <a href="https://theayurvedaexperience.com/pages/accessibility-statement" className="hover:underline">Accessibility</a>
        </div>
        <div className="flex items-center space-x-3">
          <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount" className="flex items-center hover:underline">
            <User size={16} className="mr-1" /> Login
          </a>
          <a href="https://theayurvedaexperience.com/cart" className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 text-xs bg-green-200 text-black rounded-full px-1">{cartCount}</span>
          </a>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-4 bg-white">
        <a href="https://theayurvedaexperience.com/" className="shrink-0">
          <Image src="/logo.png" alt="The Ayurveda Experience Logo" width={180} height={50} priority />
        </a>

        <nav className="hidden lg:flex space-x-6 font-semibold text-black text-sm items-center">
          <a href="https://theayurvedaexperience.com/collections/all-products" className="hover:text-gray-700">ALL PRODUCTS</a>
          <a href="https://theayurvedaexperience.com/collections/ayurvedic-skin-care-collection" className="hover:text-gray-700">FACE</a>
          <a href="https://theayurvedaexperience.com/collections/body-care" className="hover:text-gray-700">BODY</a>
          <a href="https://theayurvedaexperience.com/collections/hair-care" className="hover:text-gray-700">HAIR</a>
          <a href="https://theayurvedaexperience.com/collections/bestsellers" className="hover:text-gray-700">BESTSELLERS</a>
          <a href="https://theayurvedaexperience.com/collections/new-in-store" className="hover:text-gray-700">NEW IN STORE</a>
          <a href="https://theayurvedaexperience.com/pages/about-courses" className="hover:text-gray-700">LEARN</a>
          <a href="https://theayurvedaexperience.com/pages/customer-reviews" className="hover:text-gray-700">REVIEWS</a>
        </nav>

        <form method="get" action="/search" className="snize-search-form hidden lg:flex items-center border rounded-full px-3 py-1" role="search">
          <input
            type="text"
            name="q"
            placeholder="Search"
            className="searchanise-input snize-input-style outline-none text-sm px-2 w-32 focus:w-48 transition-all"
            autoComplete="off"
            aria-label="Search Products"
          />
          <button type="submit" aria-label="Submit search query">
            <Search size={16} className="text-gray-500 hover:text-gray-800" />
          </button>
        </form>

        <div className="lg:hidden">
          <button aria-label="Open menu">MENU ICON</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
