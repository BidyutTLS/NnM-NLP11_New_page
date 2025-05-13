import React from "react";
import Image from "next/image";

export const Footer = () => (
  <footer className="bg-white border-t text-sm text-gray-700 px-4 pt-10 pb-4 font-[\'Open_Sans\']">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="space-y-4">
        <Image src="/logo.png" alt="TAE Logo" width={150} height={40} />
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Pinterest"><i className="fab fa-pinterest"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
        </div>
        <div className="flex gap-2">
          <Image src="/appstore.png" alt="App Store" width={120} height={40} />
          <Image src="/playstore.png" alt="Google Play" width={120} height={40} />
        </div>
        <div className="text-xs">
          <p><strong>Need Help?</strong></p>
          <p>Email us: <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a></p>
          <p>Call us: <a href="tel:+16784987248" className="text-blue-600">+1 (678)-498-7248</a></p>
        </div>
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
          <li><a href="https://theayurvedaexperience.com/pages/accessibility-statement" className="hover:underline">Accessibility Statement</a></li>
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

    <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
      <Image src="/payments/amex.svg" alt="Amex" width={40} height={25} />
      <Image src="/payments/applepay.svg" alt="Apple Pay" width={40} height={25} />
      <Image src="/payments/discover.svg" alt="Discover" width={40} height={25} />
      <Image src="/payments/googlepay.svg" alt="Google Pay" width={40} height={25} />
      <Image src="/payments/paypal.svg" alt="Paypal" width={40} height={25} />
      <Image src="/payments/shopify.svg" alt="Shop Pay" width={40} height={25} />
      <Image src="/payments/visa.svg" alt="Visa" width={40} height={25} />
    </div>

    <div className="text-center text-xs text-gray-500 mt-6 border-t pt-6">
      <p>© 2025 The Ayurveda Experience.</p>
      <p className="mt-2">
        * Disclaimer: Please <a href="#" className="text-blue-600 underline">click here</a> to see the usage of cookies. Packaging may vary from images shown. Results may vary by person. Content is for educational purposes only, not medical advice. Contact <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a> for more info.
      </p>
    </div>
  </footer>
);

export default Footer;
