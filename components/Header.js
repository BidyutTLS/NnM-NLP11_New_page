import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Search, User, ShoppingCart, Menu } from "lucide-react";

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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <Head>
        <script
          async
          src="https://cdn.userway.org/widget.js"
          data-account="MZr0xGKhRf"
        ></script>
      </Head>

      <header className="w-full border-b border-gray-200 text-sm font-openSans relative">
        {/* Top Bar */}
        <div className="bg-gray-50 text-gray-700 flex justify-between items-center px-4 py-2">
          <div className="flex items-center lg:hidden">
            <button onClick={() => setMenuOpen(true)} aria-label="Open Menu">
              <Menu size={24} />
            </button>
          </div>

          {/* Desktop Top Nav */}
          <nav className="hidden lg:flex space-x-5">
            <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount" className="hover:underline">My Account</a>
            <a href="https://track.theayurvedaexperience.com/" className="hover:underline">Track Order</a>
            <a href="https://theayurveda-experience.reamaze.com/" className="hover:underline">Help Center</a>
            <a href="https://theayurvedaexperience.com/pages/contact-us-here" className="hover:underline">Contact Us</a>
            <a href="https://theayurvedaexperience.com/pages/ayurewards-n" className="hover:underline">AyuRewards</a>
            <a href="tel:+16784987248" className="hover:underline font-semibold">+1 (678)-498-7248</a>
            <a href="https://theayurvedaexperience.com/pages/accessibility-statement" className="hover:underline">Accessibility</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount" aria-label="User Login">
              <User size={20} />
            </a>
            <a href="https://theayurvedaexperience.com/cart" className="relative" aria-label="View Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 text-xs bg-green-200 text-black rounded-full px-1">
                {cartCount}
              </span>
            </a>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white text-black overflow-y-auto px-6 py-6 flex flex-col font-semibold text-sm">
            {/* Top Row: Close & Logo */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={() => setMenuOpen(false)} aria-label="Close Menu" className="text-xl">
                ✕
              </button>
              <div className="flex-grow text-center -ml-6">
                <Image src="/logo.png" alt="The Ayurveda Experience Logo" width={160} height={40} />
              </div>
              <div className="w-6" /> {/* spacing placeholder to center logo */}
            </div>

            {/* Main Vertical Nav */}
            <nav className="flex flex-col gap-4">
              <a href="https://theayurvedaexperience.com/collections/all-products">ALL PRODUCTS</a>
              <a href="https://theayurvedaexperience.com/collections/ayurvedic-skin-care-collection">FACE</a>
              <a href="https://theayurvedaexperience.com/collections/body-care">BODY</a>
              <a href="https://theayurvedaexperience.com/collections/hair-care">HAIR</a>
              <a href="https://theayurvedaexperience.com/collections/bestsellers">BESTSELLERS</a>
              <a href="https://theayurvedaexperience.com/collections/offers">OFFERS</a>
              <a href="https://theayurvedaexperience.com/collections/new-in-store">NEW IN STORE</a>
              <a href="https://theayurvedaexperience.com/pages/about-courses">LEARN</a>
              <a href="https://theayurvedaexperience.com/pages/customer-reviews">REVIEWS</a>
              <a href="#">United States (USD $)</a>
              <a href="https://theayurvedaexperience.com/pages/ayurewards-n">AyuRewards</a>
              <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount">Login</a>
              <a href="https://theayurvedaexperience.com/pages/refer-get-discounts">Refer & Get Discounts</a>
              <a href="https://track.theayurvedaexperience.com/">Track Order</a>
              <a href="https://theayurveda-experience.reamaze.com/">Help Center</a>
              <a href="https://theayurvedaexperience.com/pages/contact-us-here">Contact Us</a>
              <a href="tel:+16784987248" className="font-semibold">+1(678)-498-7248</a>
              <a href="https://theayurvedaexperience.com/pages/accessibility-statement">Accessibility</a>
            </nav>
          </div>
        )}

        {/* Desktop Main Nav */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 bg-white gap-4 lg:gap-0">
          <a href="https://theayurvedaexperience.com/" className="shrink-0">
            <Image src="/logo.png" alt="The Ayurveda Experience Logo" width={180} height={50} priority />
          </a>

          <nav className="hidden lg:flex flex-wrap justify-center gap-4 font-semibold text-black text-sm">
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
            className="snize-search-form hidden xl:flex items-center border rounded-full px-3 py-1"
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
