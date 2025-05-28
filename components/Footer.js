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
    <div className="w-full flex justify-center mb-6">
      <Image src="/logo.png" alt="TAE Logo" width={200} height={50} />
    </div>

    {/* App Store Buttons */}
    <div className="flex justify-center gap-2 mb-4">
      <a href="https://apps.apple.com/us/app/the-ayurveda-experience/id1490926655?mt=8" target="_blank">
        <Image src="/payments/Appstore (2).png" alt="App Store" width={120} height={40} />
      </a>
      <a href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_Ct5nBnFLeW" target="_blank">
        <Image src="/payments/playstore(2).png" alt="Google Play" width={120} height={40} />
      </a>
    </div>

    {/* Contact Info */}
    <div className="text-center text-sm mb-6">
      <p><strong>Need Help?</strong></p>
      <p>Email us: <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a></p>
      <p>Call us: <a href="tel:+16784987248" className="text-blue-600">+1(678)-498-7248</a></p>
    </div>

    {/* Footer Grid */}
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {/* Quick Links */}
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

        {/* Policies */}
        <CollapsibleSection title="Policies">
          <ul className="text-blue-600 space-y-1">
            <li><a href="https://theayurvedaexperience.com/pages/shipping-policy">Shipping & Delivery</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/privacy-policy">Privacy Policy</a></li>
            <li><a href="https://theayurvedaexperience.com/policies/refund-policy">Exchanges & Refunds</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/terms-of-use">Terms of Use</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/accessibility-statement">Accessibility Statement</a></li>
          </ul>
        </CollapsibleSection>

        {/* Learn */}
        <CollapsibleSection title="Learn">
          <ul className="text-blue-600 space-y-1">
            <li><a href="https://theayurvedaexperience.com/collections/educational-courses">Explore Courses</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/ayurveda-life-weekly-webinar-series">Webinars</a></li>
            <li><a href="https://blog.theayurvedaexperience.com/?_gl=1*5z4v0x*_gcl_au*MTQ5ODgwNTY2Ny4xNzQwOTk4NjA3LjIzMTQ0NDM2My4xNzQ4NDIzNjU4LjE3NDg0MjM3NDM.">Blog</a></li>
            <li><a href="https://learn.theayurvedaexperience.com/?_gl=1*1pakz10*_gcl_au*MTQ5ODgwNTY2Ny4xNzQwOTk4NjA3LjIzMTQ0NDM2My4xNzQ4NDIzNjU4LjE3NDg0MjM3NDM.">My Courses</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/skincare-consultations">Product Recommendation</a></li>
          </ul>
        </CollapsibleSection>
      </div>
    </div>

    {/* Social Icons */}
    <div className="mt-8 flex justify-center gap-6 text-xl">
      <a href="mailto:care@theayurvedaexperience.com" aria-label="Email"><Mail size={20} /></a>
      <a href="https://www.facebook.com/theayurvedaexperience" target="_blank" aria-label="Facebook"><Facebook size={20} /></a>
      <a href="https://www.instagram.com/theayurvedaexperience" target="_blank" aria-label="Instagram"><Instagram size={20} /></a>
      <a href="https://www.youtube.com/channel/UCv51NcFKkxcl_L8aQgzK3hQ" target="_blank" aria-label="YouTube"><Youtube size={20} /></a>
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
