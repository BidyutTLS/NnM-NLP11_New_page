import { useState } from "react";
import Image from "next/image";
import {
  ChevronDown,
  ChevronUp,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Pinterest,
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
      <div className={`space-y-1 ${open ? "block" : "hidden"} lg:block`}>{children}</div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-white border-t text-sm text-gray-700 px-4 pt-10 pb-4 font-['Open_Sans']">
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 text-center lg:text-left">
      {/* Logo & Apps */}
      <div className="space-y-4 flex flex-col items-center lg:items-start">
        <Image src="/logo.png" alt="TAE Logo" width={200} height={50} />
        <div className="flex gap-2">
          <a href="https://apps.apple.com/us/app/the-ayurveda-experience/id1490926655?mt=8" target="_blank">
            <Image src="/payments/Appstore (2).png" alt="App Store" width={120} height={40} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_Ct5nBnFLeW" target="_blank">
            <Image src="/payments/playstore(2).png" alt="Google Play" width={120} height={40} />
          </a>
        </div>
        <div className="text-xs text-center lg:text-left">
          <p><strong>Need Help?</strong></p>
          <p>Email: <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a></p>
          <p>Call: <a href="tel:+16784987248" className="text-blue-600">+1 (678)-498-7248</a></p>
        </div>
        <div className="flex justify-center lg:justify-start space-x-4 text-xl">
          <a href="mailto:care@theayurvedaexperience.com" aria-label="Email"><Mail size={18} /></a>
          <a href="https://www.facebook.com/theayurvedaexperience" target="_blank"><Facebook size={18} /></a>
          <a href="https://www.instagram.com/theayurvedaexperience" target="_blank"><Instagram size={18} /></a>
          <a href="https://www.pinterest.com/theayurvedaexperience" target="_blank"><Pinterest size={18} /></a>
          <a href="https://www.youtube.com/channel/UCv51NcFKkxcl_L8aQgzK3hQ" target="_blank"><Youtube size={18} /></a>
        </div>
      </div>

      {/* Quick Links */}
      <CollapsibleSection title="Quick Links">
        <ul className="text-blue-600 space-y-1">
          <li><a href="/pages/help-center">Help Center</a></li>
          <li><a href="/search">Search</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/collections/all-products">All Products</a></li>
          <li><a href="/pages/about-us">About Us</a></li>
          <li><a href="/pages/ayurveda-affiliate">Become an Affiliate</a></li>
          <li><a href="https://ayurveda.attn.tv/p/PJC/landing-page">Get SMS updates</a></li>
        </ul>
      </CollapsibleSection>

      {/* Policies */}
      <CollapsibleSection title="Policies">
        <ul className="text-blue-600 space-y-1">
          <li><a href="/pages/shipping-policy">Shipping & Delivery</a></li>
          <li><a href="/pages/privacy-policy">Privacy Policy</a></li>
          <li><a href="/pages/returns-exchanges">Exchanges & Refunds</a></li>
          <li><a href="/pages/terms-of-use">Terms of Use</a></li>
          <li><a href="/pages/accessibility-statement">Accessibility Statement</a></li>
        </ul>
      </CollapsibleSection>

      {/* Learn */}
      <CollapsibleSection title="Learn">
        <ul className="text-blue-600 space-y-1">
          <li><a href="/collections/educational-courses">Explore Courses</a></li>
          <li><a href="/pages/ayuttva-nail-n-mane-nlp12">Webinars</a></li>
          <li><a href="https://blog.theayurvedaexperience.com/">Blog</a></li>
          <li><a href="/pages/my-courses">My Courses</a></li>
          <li><a href="/pages/product-recommendation">Product Recommendation</a></li>
        </ul>
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
      <Image src="/payments/venmo.png" alt="Venmo" width={40} height={25} />
      <Image src="/payments/Visa.jpg" alt="Visa" width={40} height={25} />
    </div>

    {/* Footer Bottom */}
    <div className="text-center text-xs text-gray-500 mt-6 border-t pt-6 px-2">
      <p>© 2025 The Ayurveda Experience.</p>
    </div>
  </footer>
);

export default Footer;
