import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from 'react';

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 text-sm">
      {/* === Top Bar === */}
      <div className="flex flex-wrap justify-between items-center px-6 py-2 bg-gray-50 text-gray-700">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <Link href="/account" className="hover:underline">My Account</Link>
          <Link href="/track-order" className="hover:underline">Track Order</Link>
          <Link href="/help" className="hover:underline">Help Center</Link>
          <Link href="/contact" className="hover:underline">Contact Us</Link>
          <Link href="/rewards" className="hover:underline">AyuRewards</Link>
          <Link href="/referral" className="hover:underline">Refer & Get Discounts</Link>
          <span className="font-semibold whitespace-nowrap">+1 (678)-498-7248</span>
          <Link href="/accessibility" className="hover:underline">Accessibility</Link>
        </div>

        <div className="flex items-center space-x-3">
          <span>United States (USD $)</span>
          <a
            href="https://theayurvedaexperience.com/account/login"
            className="flex items-center hover:underline"
          >
            <User size={16} className="mr-1" />
            Login
          </a>
          <Link href="/cart" className="relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 text-xs bg-green-200 text-black rounded-full px-1">0</span>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-4 bg-white">
        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <Image src="/logo.png" alt="The Ayurveda Experience Logo" width={150} height={40} priority />
        </Link>

        <nav className="hidden lg:flex space-x-6 font-semibold text-black text-sm items-center">
          <MegaMenu label="ALL PRODUCTS" />
          <NavItem label="FACE" links={[{ name: "Face Serums", href: "/collections/face-serums" }, { name: "Cleansers", href: "/collections/cleansers" }]} />
          <NavItem label="BODY" links={[{ name: "Body Oils", href: "/collections/body-oils" }, { name: "Lotions", href: "/collections/lotions" }]} />
          <NavItem label="HAIR" links={[{ name: "Hair Oils", href: "/collections/hair-oils" }, { name: "Shampoos", href: "/collections/shampoos" }]} />
          <NavItem label="BESTSELLERS" links={[{ name: "Top Rated", href: "/collections/bestsellers" }, { name: "Customer Favorites", href: "/collections/favorites" }]} />
          <NavItem label="OFFERS" badge="NEW" links={[{ name: "Current Deals", href: "/offers" }, { name: "Bundles", href: "/collections/bundles" }]} />
          <NavItem label="NEW IN STORE" links={[{ name: "Latest Arrivals", href: "/collections/new" }]} />
          <NavItem label="LEARN" links={[{ name: "Blog", href: "/blog" }, { name: "About Ayurveda", href: "/learn/ayurveda" }]} />
          <Link href="/reviews" className="hover:text-gray-700">REVIEWS</Link>
        </nav>

        <form
          method="get"
          action="/search"
          className="snize-search-form hidden lg:flex items-center border rounded-full px-3 py-1"
          role="search"
        >
          <input
            type="text"
            name="q"
            placeholder="Search"
            className="searchanise-input outline-none text-sm px-2 w-32 focus:w-48 transition-all"
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

const NavItem = ({ label, badge, links = [] }) => (
  <div className="relative group cursor-pointer">
    <div className="flex items-center space-x-1 hover:text-gray-700">
      <span>{label}</span>
      {links.length > 0 && <ChevronDown size={14} />}
    </div>
    {badge && (
      <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 ml-1 bg-blue-600 text-white text-[10px] font-bold px-1.5 rounded">
        {badge}
      </span>
    )}
  </div>
);

const MegaMenu = ({ label }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard toggle handler
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ' || e.key === 'ArrowDown') {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        ref={triggerRef}
        className="flex items-center space-x-1 hover:text-gray-700 focus:outline-none"
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{label}</span>
        <ChevronDown size={14} />
      </button>

      <div
        ref={menuRef}
        className={`absolute z-50 w-[700px] border rounded-md bg-white shadow-xl p-6 mt-2 left-0 transition-all duration-200 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto visible' : 'opacity-0 -translate-y-2 pointer-events-none invisible'
        }`}
        role="menu"
        aria-label={`${label} Mega Menu`}
      >
        <div className="flex">
          <div className="mr-10 w-1/2">
            <h3 className="font-bold text-sm mb-3 uppercase tracking-wider">Shop by Category</h3>
            <ul className="space-y-1 text-sm">
              {[
                { name: "Face Oils", href: "/collections/face-oils" },
                { name: "Eye Care", href: "/collections/eye-care" },
                { name: "Cleansers", href: "/collections/cleansers" },
                { name: "Creams & Concentrates", href: "/collections/creams-concentrates" },
                { name: "Lip Care", href: "/collections/lip-care" },
                { name: "Body Care", href: "/collections/body-care" },
                { name: "Hair Care", href: "/collections/hair-care" },
                { name: "Massage Tools", href: "/collections/massage-tools" },
                { name: "Vegan", href: "/collections/vegan" },
                { name: "Dietary Supplements", href: "/collections/supplements" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="block py-1 hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-1/2">
            <h3 className="font-bold text-sm mb-3 uppercase tracking-wider">Shop by Brand</h3>
            <ul className="space-y-1 text-sm">
              {[
                { name: "iYURA", desc: "Authentic Ayurvedic Skincare", href: "/brands/iyura" },
                { name: "Ajara", desc: "Inspired Daily Skin Care", href: "/brands/ajara" },
                { name: "A Modernica", desc: "Ancient + Modern Science", href: "/brands/modernica" },
                { name: "Ayuttva", desc: "Supplements & Foods", href: "/brands/ayuttva" },
                { name: "The Ayurveda Experience", desc: "Learn Ayurveda", href: "/collections/tae-learn" },
              ].map((brand) => (
                <li key={brand.name}>
                  <Link href={brand.href} className="block py-1 hover:underline">
                    {brand.name} <span className="text-gray-600">| {brand.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Header;
