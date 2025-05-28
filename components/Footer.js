'use client';
import { useState } from 'react';
import Image from 'next/image';
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Facebook,
  Instagram,
  Youtube
} from 'lucide-react';

const CollapsibleSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="pt-4 lg:pt-0">
      <button
        className="w-full text-left font-semibold mb-2 flex justify-between items-center lg:cursor-default"
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className="lg:hidden">
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      <div className={`space-y-1 ${open ? 'block' : 'hidden'} lg:block`}>
        {children}
      </div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-white border-t text-sm text-gray-700 px-4 pt-10 pb-4 font-['Open_Sans']">
    {/* Grid Layout */}
    <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left">
      {/* Column 1: Logo + Help */}
      <div className="flex flex-col items-center lg:items-start">
        <Image src="/logo.png" alt="TAE Logo" width={200} height={50} />
        <div className="flex gap-2 mt-4">
          <a href="https://apps.apple.com/us/app/the-ayurveda-experience/id1490926655?mt=8" target="_blank">
            <Image src="/payments/Appstore (2).png" alt="App Store" width={120} height={40} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_Ct5nBnFLeW" target="_blank">
            <Image src="/payments/playstore(2).png" alt="Google Play" width={120} height={40} />
          </a>
        </div>
        <div className="text-xs mt-4">
          <p><strong>Need Help?</strong></p>
          <p>Email: <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a></p>
          <p>Call: <a href="tel:+16784987248" className="text-blue-600">+1 (678)-498-7248</a></p>
        </div>
      </div>

      {/* Column 2: Quick Links */}
      <CollapsibleSection title="Quick Links">
        <ul className="text-blue-600 space-y-1">
          <li><a href="https://theayurvedaexperience.com/search">Search</a></li>
          <li><a href="https://theayurvedaexperience.com/">Home</a></li>
          <li><a href="https://theayurvedaexperience.com/collections/all">All Products</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/about-us">About Us</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/ayurveda-affiliate/">Affiliate</a></li>
          <li><a href="https://ayurveda.attn.tv/p/PJC/landing-page">Get SMS Updates</a></li>
        </ul>
      </CollapsibleSection>

      {/* Column 3: Policies */}
      <CollapsibleSection title="Policies">
        <ul className="text-blue-600 space-y-1">
          <li><a href="https://theayurvedaexperience.com/pages/shipping-policy">Shipping Policy</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/privacy-policy">Privacy Policy</a></li>
          <li><a href="https://theayurvedaexperience.com/policies/refund-policy">Exchanges & Refunds</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/terms-of-use">Terms of Use</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/accessibility-statement">Accessibility Statement</a></li>
        </ul>
      </CollapsibleSection>

      {/* Column 4: Learn + Social Icons */}
      <CollapsibleSection title="Learn">
        <ul className="text-blue-600 space-y-1">
          <li><a href="https://theayurvedaexperience.com/collections/educational-courses">Explore Courses</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/ayurveda-life-weekly-webinar-series">Webinars</a></li>
          <li><a href="https://blog.theayurvedaexperience.com/?_gl=1*5z4v0x*_gcl_au*...">Blog</a></li>
          <li><a href="https://learn.theayurvedaexperience.com/?_gl=1*1pakz10*_gcl_au*...">My Courses</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/skincare-consultations">Product Recommendation</a></li>
        </ul>
        {/* Social Icons */}
        <div className="flex justify-center lg:justify-start space-x-5 text-xl mt-4">
          <a href="mailto:care@theayurvedaexperience.com" aria-label="Email"><Mail size={18} /></a>
          <a href="https://www.facebook.com/theayurvedaexperience" target="_blank"><Facebook size={18} /></a>
          <a href="https://www.instagram.com/theayurvedaexperience" target="_blank"><Instagram size={18} /></a>
          <a href="https://www.youtube.com/channel/UCv51NcFKkxcl_L8aQgzK3hQ" target="_blank"><Youtube size={18} /></a>
        </div>
      </CollapsibleSection>
    </div>

    {/* Payment Icons */}
    <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
      {["amex.svg", "applepay.png", "dinersclub.png", "discover.webp", "gpay.png", "paypal.png", "shoppay.png", "mastercard.png", "Visa.jpg", "venmo.png"].map((file, idx) => (
        <Image key={idx} src={`/payments/${file}`} alt={file} width={40} height={25} />
      ))}
    </div>

    {/* Disclaimer */}
    <div className="text-center text-xs text-black mt-6 border-t pt-6 px-2 max-w-5xl mx-auto">
      <p>© 2025 The Ayurveda Experience.</p>
      <p className="mt-2">
        * <strong>Disclaimer</strong>: Please <a href="#" className="text-blue-600 underline">click here</a> to see the usage of cookies. Packaging may vary... [trimmed for brevity]. Please consult your primary care physician before implementing any change in your diet or lifestyle. Contact <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a>.
      </p>
    </div>
  </footer>
);

export default Footer;
