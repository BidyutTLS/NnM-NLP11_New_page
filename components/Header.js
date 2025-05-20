// components/Header.tsx
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
        <script async src="https://cdn.userway.org/widget.js" data-account="MZr0xGKhRf" />
      </Head>

      <header className="w-full border-b border-gray-200 text-sm font-openSans relative">
        <div className="bg-gray-50 text-gray-700 flex justify-between items-center px-4 py-2">
          <button onClick={() => setMenuOpen(true)} className="lg:hidden">
            <Menu size={24} />
          </button>
          <nav className="hidden lg:flex space-x-5">
            <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount">My Account</a>
            <a href="https://track.theayurvedaexperience.com/">Track Order</a>
            <a href="https://theayurveda-experience.reamaze.com/">Help Center</a>
            <a href="https://theayurvedaexperience.com/pages/contact-us-here">Contact Us</a>
            <a href="https://theayurvedaexperience.com/pages/ayurewards-n">AyuRewards</a>
            <a href="tel:+16784987248" className="font-semibold">+1 (678)-498-7248</a>
            <a href="https://theayurvedaexperience.com/pages/accessibility-statement">Accessibility</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="/account"><User size={20} /></a>
            <a href="/cart" className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-green-200 text-black text-xs rounded-full px-1">{cartCount}</span>
            </a>
          </div>
        </div>

        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white px-6 py-4 text-black font-semibold flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <button onClick={() => setMenuOpen(false)}>✕</button>
              <div className="flex-grow text-center -ml-6">
                <Image src="/logo.png" alt="Logo" width={170} height={40} />
              </div>
              <div className="flex space-x-3">
                <a href="/search"><Search size={20} /></a>
                <a href="/cart"><ShoppingCart size={20} /></a>
              </div>
            </div>
            <nav className="flex flex-col gap-4 text-base">
              <a href="/collections/all-products">ALL PRODUCTS</a>
              <a href="/collections/ayurvedic-skin-care-collection">FACE</a>
              <a href="/collections/body-care">BODY</a>
              <a href="/collections/hair-care">HAIR</a>
              <a href="/collections/bestsellers">BESTSELLERS</a>
              <a href="/collections/offers">OFFERS</a>
              <a href="/collections/new-in-store">NEW IN STORE</a>
              <a href="/pages/about-courses">LEARN</a>
              <a href="/pages/customer-reviews">REVIEWS</a>
              <a href="/pages/ayurewards-n">AyuRewards</a>
              <a href="/account/login">Login</a>
              <a href="/pages/refer-get-discounts">Refer & Get Discounts</a>
              <a href="https://track.theayurvedaexperience.com/">Track Order</a>
              <a href="https://theayurveda-experience.reamaze.com/">Help Center</a>
              <a href="/pages/contact-us-here">Contact Us</a>
              <a href="tel:+16784987248">+1 (678)-498-7248</a>
              <a href="/pages/accessibility-statement">Accessibility</a>
            </nav>
          </div>
        )}

        <div className="flex flex-col lg:flex-row items-center justify-between px-6 py-4 bg-white gap-4">
          <a href="/" className="shrink-0">
            <Image src="/logo.png" alt="Logo" width={180} height={50} priority />
          </a>
          <nav className="hidden lg:flex flex-wrap justify-center gap-4 text-black text-sm font-semibold">
            <a href="/collections/all-products">ALL PRODUCTS</a>
            <a href="/collections/ayurvedic-skin-care-collection">FACE</a>
            <a href="/collections/body-care">BODY</a>
            <a href="/collections/hair-care">HAIR</a>
            <a href="/collections/bestsellers">BESTSELLERS</a>
            <a href="/collections/new-in-store">NEW IN STORE</a>
            <a href="/pages/about-courses">LEARN</a>
            <a href="/pages/customer-reviews">REVIEWS</a>
          </nav>
          <form action="/search" className="hidden xl:flex items-center border rounded-full px-3 py-1">
            <input
              name="q"
              type="text"
              placeholder="Search"
              className="outline-none text-sm px-2 w-32 focus:w-48 transition-all"
              aria-label="Search Products"
            />
            <button type="submit" aria-label="Search">
              <Search size={16} className="text-gray-500 hover:text-gray-800" />
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
