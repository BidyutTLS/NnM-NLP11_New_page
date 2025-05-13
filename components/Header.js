// ✅ Final Header and Footer Components (Mobile-Optimized)

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
    <header className="w-full border-b border-gray-200 text-sm">
      <div className="flex flex-wrap justify-between items-center px-6 py-2 bg-gray-50 text-gray-700">
        <div className="flex flex-wrap gap-x-4 gap-y-1">
          <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount" className="hover:underline">My Account</a>
          <a href="https://theayurvedaexperience.com/account/login?return_url=%2Faccount" className="hover:underline">Track Order</a>
          <a href="https://theayurveda-experience.reamaze.com/" className="hover:underline">Help Center</a>
          <a href="https://theayurvedaexperience.com/pages/contact-us-here" className="hover:underline">Contact Us</a>
          <a href="https://theayurvedaexperience.com/pages/ayurewards-n" className="hover:underline">AyuRewards</a>
          <a href="/referral" className="hover:underline">Refer & Get Discounts</a>
          <span className="font-semibold whitespace-nowrap">+1 (678)-498-7248</span>
          <a href="/accessibility" className="hover:underline">Accessibility</a>
        </div>
        <div className="flex items-center space-x-3">
          <span>United States (USD $)</span>
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
        <Link href="/" className="shrink-0">
          <Image src="/logo.png" alt="The Ayurveda Experience Logo" width={150} height={40} priority />
        </Link>

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

export const Footer = () => (
  <footer className="bg-gray-50 border-t text-sm text-gray-700 px-4 py-10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <Image src="/logo.png" alt="TAE Logo" width={120} height={40} className="mb-4" />
        <div className="flex space-x-4">
          <a href="mailto:care@theayurvedaexperience.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="flex mt-4 space-x-2">
          <img src="/appstore.png" alt="App Store" width={120} />
          <img src="/playstore.png" alt="Google Play" width={120} />
        </div>
        <p className="mt-4 text-xs">Need Help?<br/>Email us: <a href="mailto:care@theayurvedaexperience.com">care@theayurvedaexperience.com</a><br/>Call us: +1 (678)-498-7248</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Quick Links</h4>
        <ul className="space-y-1">
          <li><a href="https://theayurveda-experience.reamaze.com/" className="hover:underline">Help Center</a></li>
          <li><a href="/search" className="hover:underline">Search</a></li>
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="https://theayurvedaexperience.com/collections/all-products" className="hover:underline">All Products</a></li>
          <li><a href="/about" className="hover:underline">About Us</a></li>
          <li><a href="/affiliate" className="hover:underline">Become an Affiliate</a></li>
          <li><a href="/sms" className="hover:underline">Get SMS updates</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Policies</h4>
        <ul className="space-y-1">
          <li><a href="/shipping" className="hover:underline">Shipping & Delivery</a></li>
          <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="/returns" className="hover:underline">Exchanges & Refunds</a></li>
          <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
          <li><a href="/accessibility" className="hover:underline">Accessibility Statement</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2">Learn</h4>
        <ul className="space-y-1">
          <li><a href="/courses" className="hover:underline">Explore Courses</a></li>
          <li><a href="/webinars" className="hover:underline">Webinars</a></li>
          <li><a href="/blog" className="hover:underline">Blog</a></li>
          <li><a href="/my-courses" className="hover:underline">My Courses</a></li>
          <li><a href="/product-recommendation" className="hover:underline">Product Recommendation</a></li>
        </ul>
      </div>
    </div>
    <div className="text-center text-xs text-gray-500 mt-8 border-t pt-6">
      <p>© 2025 The Ayurveda Experience.</p>
      <p className="mt-2">* Disclaimer: Please <a href="#" className="text-blue-500 underline">click here</a> to see the usage of cookies and medical disclaimers...</p>
    </div>
  </footer>
);

export default Header;
