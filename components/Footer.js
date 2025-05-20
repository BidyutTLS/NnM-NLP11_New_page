// components/Footer.tsx
import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";

const CollapsibleSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-t border-gray-200 pt-4 lg:border-none">
      <button
        className="w-full text-left font-semibold mb-2 flex justify-between items-center lg:cursor-default"
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className="lg:hidden">{open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</span>
      </button>
      <div className={`space-y-1 ${open ? "block" : "hidden"} lg:block`}>{children}</div>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-white border-t text-sm text-gray-700 px-4 pt-10 pb-4 font-['Open_Sans']">
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <div className="space-y-4">
        <Image src="/logo.png" alt="TAE Logo" width={150} height={40} />
        <div className="flex gap-2">
          <a href="https://apps.apple.com/us/app/the-ayurveda-experience/id1490926655?mt=8">
            <Image src="/payments/Appstore (2).png" alt="App Store" width={120} height={40} />
          </a>
          <a href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_Ct5nBnFLeW">
            <Image src="/payments/playstore(2).png" alt="Google Play" width={120} height={40} />
          </a>
        </div>
        <div className="text-xs">
          <p><strong>Need Help?</strong></p>
          <p>Email: <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a></p>
          <p>Call: <a href="tel:+16784987248" className="text-blue-600">+1 (678)-498-7248</a></p>
        </div>
      </div>

      <CollapsibleSection title="Quick Links">
        <ul className="text-blue-600 space-y-1">
          <li><a href="/search">Search</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/collections/all-products">All Products</a></li>
          <li><a href="/pages/about-us">About Us</a></li>
          <li><a href="/pages/ayurveda-affiliate">Affiliate</a></li>
          <li><a href="https://ayurveda.attn.tv/p/PJC/landing-page">SMS Updates</a></li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Policies">
        <ul className="text-blue-600 space-y-1">
          <li><a href="/pages/shipping-policy">Shipping & Delivery</a></li>
          <li><a href="/pages/privacy-policy">Privacy Policy</a></li>
          <li><a href="/policies/refund-policy">Refunds</a></li>
          <li><a href="/pages/terms-of-use">Terms of Use</a></li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Learn">
        <ul className="text-blue-600 space-y-1">
          <li><a href="/collections/educational-courses">Courses</a></li>
          <li><a href="/pages/ayuttva-nail-n-mane-nlp12">Webinars</a></li>
          <li><a href="https://blog.theayurvedaexperience.com/">Blog</a></li>
        </ul>
      </CollapsibleSection>
    </div>

    <div className="text-center text-xs text-gray-500 mt-10 border-t pt-6 px-2">
      <p>© 2025 The Ayurveda Experience.</p>
    </div>
  </footer>
);

export default Footer;
