import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Search, ShoppingCart, Menu } from "lucide-react";

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
        />
      </Head>

      <header className="w-full border-b border-gray-200 text-sm font-openSans relative">
        {/* Top Links - Desktop */}
        <div className="hidden lg:flex justify-between px-6 py-2 text-xs text-black bg-gray-50">
          <div className="flex space-x-4">
            <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount" className="hover:underline">My Account</a>
            <a href="https://track.theayurvedaexperience.com/" className="hover:underline">Track Order</a>
            <a href="https://theayurveda-experience.reamaze.com/" className="hover:underline">Help Center</a>
            <a href="https://theayurvedaexperience.com/pages/contact-us-here" className="hover:underline">Contact Us</a>
            <a href="https://theayurvedaexperience.com/pages/ayurewards-n" className="hover:underline">AyuRewards</a>
            <a href="https://theayurvedaexperience.com/pages/refer-get-discounts" className="hover:underline">Refer & Get Discounts</a>
            <a href="tel:+16784987248" className="hover:underline">+1 (678)-498-7248</a>
            <a href="/pages/accessibility-statement" className="hover:underline">Accessibility</a>
          </div>
          <div className="flex space-x-4 items-center">
            <span>United States (USD $)</span>
            <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount" className="hover:underline">Login</a>
          </div>
        </div>

        {/* Mobile Header */}
        <div className="bg-gray-50 text-gray-700 flex items-center justify-between px-4 py-2 lg:hidden relative">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
            className="z-50"
          >
            {menuOpen ? "✕" : <Menu size={24} />}
          </button>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-2">
            <a href="https://theayurvedaexperience.com/">
              <Image src="/logo.png" alt="The Ayurveda Experience Logo" width={140} height={40} />
            </a>
          </div>

          <div className="flex items-center space-x-4 z-50">
            <a href="/search" aria-label="Search"><Search size={20} /></a>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-white px-6 py-4 text-black font-semibold flex flex-col overflow-y-auto">
            <div className="flex justify-center mb-6 mt-2">
              <a href="https://theayurvedaexperience.com/">
                <Image src="/logo.png" alt="Centered Logo" width={170} height={40} />
              </a>
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
              <a href="https://theayurvedaexperience.com/pages/ayurewards-n">AyuRewards</a>
              <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount">Login</a>
              <a href="https://theayurvedaexperience.com/pages/refer-get-discounts">Refer & Get Discounts</a>
              <a href="https://track.theayurvedaexperience.com/">Track Order</a>
              <a href="https://theayurveda-experience.reamaze.com/">Help Center</a>
              <a href="https://theayurvedaexperience.com/pages/contact-us-here">Contact Us</a>
              <a href="tel:+16784987248">+1 (678)-498-7248</a>
              <a href="/pages/accessibility-statement">Accessibility</a>
            </nav>
          </div>
        )}

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center px-6 py-4 bg-white">
          <a href="https://theayurvedaexperience.com/" className="shrink-0">
            <Image src="/logo.png" alt="The Ayurveda Experience Logo" width={180} height={50} priority />
          </a>
          <nav className="flex flex-wrap gap-5 font-semibold text-black text-sm">
            <a href="/collections/all-products">ALL PRODUCTS</a>
            <a href="/collections/ayurvedic-skin-care-collection">FACE</a>
            <a href="/collections/body-care">BODY</a>
            <a href="/collections/hair-care">HAIR</a>
            <a href="/collections/bestsellers">BESTSELLERS</a>
            <a href="/collections/offers">OFFERS</a>
            <a href="/collections/new-in-store">NEW IN STORE</a>
            <a href="/pages/about-courses">LEARN</a>
            <a href="/pages/customer-reviews">REVIEWS</a>
          </nav>
          <form method="get" action="/search" className="hidden xl:flex items-center border rounded-full px-3 py-1 ml-auto">
            <input
              type="text"
              name="q"
              placeholder="Search"
              className="outline-none text-sm px-2 w-32 focus:w-48 transition-all"
              autoComplete="off"
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
