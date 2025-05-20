import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import { Search, ShoppingCart, Menu, User } from "lucide-react";

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
        {/* Top Bar */}
        <div className="bg-gray-50 text-gray-700 flex justify-between items-center px-4 py-2">
          {/* Hamburger / Close */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="lg:hidden text-xl"
          >
            {menuOpen ? "✕" : <Menu size={24} />}
          </button>

          {/* Logo Centered (mobile only) */}
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2">
            <Image src="/logo.png" alt="The Ayurveda Experience" width={140} height={40} />
          </div>

          {/* Icons Right */}
          <div className="flex items-center space-x-4">
            <a href="/search" aria-label="Search"><Search size={20} /></a>
            <a href="/cart" className="relative" aria-label="View Cart">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-green-200 text-black rounded-full px-1">
                  {cartCount}
                </span>
              )}
            </a>
          </div>
        </div>

        {/* Mobile Fullscreen Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 bg-white px-6 py-4 text-black font-semibold flex flex-col overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              {/* Close button */}
              <button onClick={() => setMenuOpen(false)} aria-label="Close Menu" className="text-xl">
                ✕
              </button>

              {/* Centered logo */}
              <div className="flex-grow text-center -ml-6">
                <Image src="/logo.png" alt="The Ayurveda Experience Logo" width={170} height={40} />
              </div>

              {/* Right icons */}
              <div className="flex items-center space-x-3">
                <a href="/search"><Search size={20} /></a>
                <a href="/cart" className="relative">
                  <ShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 text-xs bg-green-200 text-black rounded-full px-1">
                      {cartCount}
                    </span>
                  )}
                </a>
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

        {/* Desktop Nav */}
        <div className="hidden lg:flex justify-between items-center px-6 py-4 bg-white">
          <a href="/" className="shrink-0">
            <Image src="/logo.png" alt="Logo" width={180} height={50} priority />
          </a>
          <nav className="flex flex-wrap gap-5 font-semibold text-black text-sm">
            <a href="/collections/all-products">ALL PRODUCTS</a>
            <a href="/collections/ayurvedic-skin-care-collection">FACE</a>
            <a href="/collections/body-care">BODY</a>
            <a href="/collections/hair-care">HAIR</a>
            <a href="/collections/bestsellers">BESTSELLERS</a>
            <a href="/collections/new-in-store">NEW IN STORE</a>
            <a href="/pages/about-courses">LEARN</a>
            <a href="/pages/customer-reviews">REVIEWS</a>
          </nav>
          <form method="get" action="/search" className="hidden xl:flex items-center border rounded-full px-3 py-1">
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
