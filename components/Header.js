// ✅ Final Updated Header with Responsive Mobile-Friendly Top Bar

import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart, ChevronDown, Menu } from "lucide-react";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    fetch("/cart.js")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("craft", JSON.stringify({ cart: data }));
        setCartCount(data.item_count);
      });
  }, []);

  return (
    <>
      <Head>
        <script
          async
          src="https://cdn.userway.org/widget.js"
          data-account="MZr0xGKhRf"
        ></script>
      </Head>

      <header className="w-full border-b border-gray-200 text-sm font-openSans">
        <div className="flex items-center justify-between px-4 py-2 bg-gray-50 text-gray-700 lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            <Menu size={24} />
          </button>
          <a href="https://theayurvedaexperience.com/">
            <Image src="/logo.png" alt="The Ayurveda Experience Logo" width={130} height={40} priority />
          </a>
          <div className="flex items-center space-x-4">
            <Link href="/search" aria-label="Search"><Search size={20} /></Link>
            <a href="https://theayurvedaexperience.com/cart" className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 text-xs bg-green-200 text-black rounded-full px-1">{cartCount}</span>
            </a>
          </div>
        </div>

        {/* Collapsible Mobile Top Links */}
        {menuOpen && (
          <div className="px-4 py-3 space-y-2 bg-white text-gray-800 lg:hidden">
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount" className="hover:underline">My Account</a>
              <a href="https://track.theayurvedaexperience.com/?_gl=1*1fmxo4q*_gcl_au*MTQ5ODgwNTY2Ny4xNzQwOTk4NjA3" className="hover:underline">Track Order</a>
              <a href="https://theayurveda-experience.reamaze.com/" className="hover:underline">Help Center</a>
              <a href="https://theayurvedaexperience.com/pages/contact-us-here" className="hover:underline">Contact Us</a>
              <a href="https://theayurvedaexperience.com/pages/ayurewards-n" className="hover:underline">AyuRewards</a>
              <a href="tel:+16784987248" className="hover:underline font-semibold">+1 (678)-498-7248</a>
              <a href="https://theayurvedaexperience.com/pages/accessibility-statement" className="hover:underline">Accessibility</a>
              <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount" className="flex items-center space-x-1 hover:underline">
                <User size={16} /> <span>Login</span>
              </a>
              <a href="https://theayurvedaexperience.com/cart" className="flex items-center space-x-1 relative hover:underline">
                <ShoppingCart size={16} />
                <span>{cartCount}</span>
              </a>
            </div>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between px-6 py-4 bg-white">
          <a href="https://theayurvedaexperience.com/" className="shrink-0">
            <Image src="/logo.png" alt="The Ayurveda Experience Logo" width={180} height={50} priority />
          </a>

          <nav className="flex space-x-6 font-semibold text-black text-sm items-center">
            <a href="https://theayurvedaexperience.com/collections/all-products" className="hover:text-gray-700">ALL PRODUCTS</a>
            <a href="https://theayurvedaexperience.com/collections/ayurvedic-skin-care-collection" className="hover:text-gray-700">FACE</a>
            <a href="https://theayurvedaexperience.com/collections/body-care" className="hover:text-gray-700">BODY</a>
            <a href="https://theayurvedaexperience.com/collections/hair-care" className="hover:text-gray-700">HAIR</a>
            <a href="https://theayurvedaexperience.com/collections/bestsellers" className="hover:text-gray-700">BESTSELLERS</a>
            <a href="https://theayurvedaexperience.com/collections/new-in-store" className="hover:text-gray-700">NEW IN STORE</a>
            <a href="https://theayurvedaexperience.com/pages/about-courses" className="hover:text-gray-700">LEARN</a>
            <a href="https://theayurvedaexperience.com/pages/customer-reviews" className="hover:text-gray-700">REVIEWS</a>
          </nav>

          <form
            method="get"
            action="/search"
            className="snize-search-form flex items-center border rounded-full px-3 py-1"
            role="search"
          >
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
        </div>
      </header>
    </>
  );
};

export default Header;
