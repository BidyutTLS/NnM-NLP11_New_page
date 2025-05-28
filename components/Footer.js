"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

const CollapsibleSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-200 pt-4 lg:border-none">
      <button
        className="w-full text-left font-semibold mb-2 flex justify-between items-center lg:cursor-default"
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className="lg:hidden">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      <div className={`space-y-1 ${open ? "block" : "hidden"} lg:block`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-white border-t text-sm text-gray-700 px-4 pt-10 pb-4 font-['Open_Sans']">
    {/* Desktop Layout */}
    <div className="hidden lg:grid grid-cols-4 max-w-7xl mx-auto gap-6 text-left pb-6">
      {/* Column 1 - Logo + Help */}
      <div className="space-y-4">
        <Image src="/logo.png" alt="TAE Logo" width={180} height={50} />
        <div className="flex gap-2">
          <a href="https://apps.apple.com/us/app/the-ayurveda-experience/id1490926655?mt=8" target="_blank">
            <Image src="/payments/Appstore (2).png" alt="App Store" width={120} height={40} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_Ct5nBnFLeW" target="_blank">
            <Image src="/payments/playstore(2).png" alt="Google Play" width={120} height={40} />
          </a>
        </div>
        <div className="text-xs">
          <p><strong>Need Help?</strong></p>
          <p>Email: <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a></p>
          <p>Call: <a href="tel:+16784987248" className="text-blue-600">+1 (678)-498-7248</a></p>
        </div>
      </div>

      {/* Column 2 - Quick Links */}
      <div>
        <CollapsibleSection title="Quick Links">
          <ul className="text-blue-600 space-y-1">
            <li><a href="https://theayurveda-experience.reamaze.com/">Help Center</a></li>
            <li><a href="https://theayurvedaexperience.com/search">Search</a></li>
            <li><a href="https://theayurvedaexperience.com/">Home</a></li>
            <li><a href="https://theayurvedaexperience.com/collections/all">All Products</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/about-us">About Us</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/ayurveda-affiliate/">Become an Affiliate</a></li>
            <li><a href="https://ayurveda.attn.tv/p/PJC/landing-page">Get SMS updates</a></li>
          </ul>
        </CollapsibleSection>
      </div>

      {/* Column 3 - Policies */}
      <div>
        <CollapsibleSection title="Policies">
          <ul className="text-blue-600 space-y-1">
            <li><a href="https://theayurvedaexperience.com/pages/shipping-policy">Shipping & Delivery</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/privacy-policy">Privacy Policy</a></li>
            <li><a href="https://theayurvedaexperience.com/policies/refund-policy">Exchanges & Refunds</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/terms-of-use">Terms of Use</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/accessibility-statement">Accessibility Statement</a></li>
          </ul>
        </CollapsibleSection>
      </div>

      {/* Column 4 - Learn */}
      <div>
        <CollapsibleSection title="Learn">
          <ul className="text-blue-600 space-y-1">
            <li><a href="https://theayurvedaexperience.com/collections/educational-courses">Explore Courses</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/ayurveda-life-weekly-webinar-series">Webinars</a></li>
            <li><a href="https://blog.theayurvedaexperience.com/?_gl=1*5z4v0x*_gcl_au*...">Blog</a></li>
            <li><a href="https://learn.theayurvedaexperience.com/?_gl=1*1pakz10*_gcl_au*...">My Courses</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/skincare-consultations">Product Recommendation</a></li>
          </ul>
        </CollapsibleSection>

        {/* Social Icons - Bottom in Mobile, Inline on Desktop */}
        <div className="flex justify-start space-x-5 mt-6 text-xl">
          <a href="mailto:care@theayurvedaexperience.com" aria-label="Email"><Mail size={18} /></a>
          <a href="https://www.facebook.com/theayurvedaexperience" target="_blank"><Facebook size={18} /></a>
          <a href="https://www.instagram.com/theayurvedaexperience" target="_blank"><Instagram size={18} /></a>
          <a href="https://www.youtube.com/channel/UCv51NcFKkxcl_L8aQgzK3hQ" target="_blank"><Youtube size={18} /></a>
        </div>
      </div>
    </div>

    {/* Mobile Collapsible Sections */}
    <div className="lg:hidden space-y-6 max-w-md mx-auto">
      <CollapsibleSection title="Quick Links">
        <ul className="text-blue-600 space-y-1 text-center">
          <li><a href="https://theayurveda-experience.reamaze.com/">Help Center</a></li>
          <li><a href="https://theayurvedaexperience.com/search">Search</a></li>
          <li><a href="https://theayurvedaexperience.com/">Home</a></li>
          <li><a href="https://theayurvedaexperience.com/collections/all">All Products</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/about-us">About Us</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/ayurveda-affiliate/">Become an Affiliate</a></li>
          <li><a href="https://ayurveda.attn.tv/p/PJC/landing-page">Get SMS updates</a></li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Policies">
        <ul className="text-blue-600 space-y-1 text-center">
          <li><a href="https://theayurvedaexperience.com/pages/shipping-policy">Shipping & Delivery</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/privacy-policy">Privacy Policy</a></li>
          <li><a href="https://theayurvedaexperience.com/policies/refund-policy">Exchanges & Refunds</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/terms-of-use">Terms of Use</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/accessibility-statement">Accessibility Statement</a></li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Learn">
        <ul className="text-blue-600 space-y-1 text-center">
          <li><a href="https://theayurvedaexperience.com/collections/educational-courses">Explore Courses</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/ayurveda-life-weekly-webinar-series">Webinars</a></li>
          <li><a href="https://blog.theayurvedaexperience.com/">Blog</a></li>
          <li><a href="https://learn.theayurvedaexperience.com/">My Courses</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/skincare-consultations">Product Recommendation</a></li>
        </ul>

        <div className="flex justify-center space-x-5 mt-4 text-xl">
          <a href="mailto:care@theayurvedaexperience.com"><Mail size={18} /></a>
          <a href="https://www.facebook.com/theayurvedaexperience" target="_blank"><Facebook size={18} /></a>
          <a href="https://www.instagram.com/theayurvedaexperience" target="_blank"><Instagram size={18} /></a>
          <a href="https://www.youtube.com/channel/UCv51NcFKkxcl_L8aQgzK3hQ" target="_blank"><Youtube size={18} /></a>
        </div>
      </CollapsibleSection>
    </div>

    {/* Payment Icons */}
    <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
      <Image src="/payments/amex.svg" alt="Amex" width={40} height={25} />
      <Image src="/payments/applepay.png" alt="Apple Pay" width={40} height={25} />
      <Image src="/payments/dinersclub.png" alt="Diners Club" width={40} height={25} />
      <Image src="/payments/discover.webp" alt="Discover" width={40} height={25} />
      <Image src="/payments/gpay.png" alt="Google Pay" width={40} height={25} />
      <Image src="/payments/mastercard.png" alt="Mastercard" width={40} height={25} />
      <Image src="/payments/paypal.png" alt="Paypal" width={40} height={25} />
      <Image src="/payments/shoppay.png" alt="Shop Pay" width={40} height={25} />
      <Image src="/payments/Visa.jpg" alt="Visa" width={40} height={25} />
      <Image src="/payments/venmo.png" alt="Venmo" width={40} height={25} />
    </div>

    {/* Disclaimer */}
    <div className="text-center text-xs text-black mt-6 border-t pt-6 px-2">
      <p>© 2025 The Ayurveda Experience.</p>
      <p className="mt-2">
        * <strong>Disclaimer</strong>: Please <a href="#" className="text-blue-600 underline">click here</a> to see the usage of cookies. Packaging may vary from images shown on the website. Results may vary from person to person. In compliance with FTC rulings, we cannot guarantee that these results are typical. The user experiences displayed on this page, if any, are a small sample of the thousands of accounts sent to us by people who have used products and materials developed by Transformative Learning Pte. Ltd. Nothing on this website may be viewed as the diagnosis or treatment of any medical disease whatsoever. If you have a health condition or may be allergic to herbs, please check with your physician before using the products. Please read the list of ingredients carefully and identify any ingredients that you may be allergic to. Patch test products before use. The contents of the educational video courses on this website are the opinions of the authors based on their learning and experiences. The Ayurveda Experience is not liable or responsible for the suggestions made herein, as this content is meant only for educational purposes. Please consult your primary care physician before implementing any change in your diet or lifestyle. For any further information please contact <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a>.
      </p>
    </div>
  </footer>
);

export default Footer;
