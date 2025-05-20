import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

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

export const Footer = () => (
  <footer className="bg-white border-t text-sm text-gray-700 px-4 pt-10 pb-4 font-['Open_Sans']">
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
      {/* Logo */}
      <Image src="/logo.png" alt="TAE Logo" width={200} height={50} />

      {/* App Store and Play Store */}
      <div className="flex space-x-4">
        <a
          href="https://apps.apple.com/us/app/the-ayurveda-experience/id1490926655?mt=8"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/payments/Appstore (2).png"
            alt="App Store"
            width={140}
            height={45}
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=co.tapcart.app.id_Ct5nBnFLeW&referrer=utm_source%3Dwebfooter&pli=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/payments/playstore(2).png"
            alt="Google Play"
            width={140}
            height={45}
          />
        </a>
      </div>

      {/* Need Help */}
      <div className="text-sm">
        <p><strong>Need Help?</strong></p>
        <p>
          Email us:{" "}
          <a
            href="mailto:care@theayurvedaexperience.com"
            className="text-blue-600"
          >
            care@theayurvedaexperience.com
          </a>
        </p>
        <p>
          Call us:{" "}
          <a href="tel:+16784987248" className="text-blue-600">
            +1 (678)-498-7248
          </a>
        </p>
      </div>

      {/* Collapsible Sections */}
      <div className="w-full">
        <CollapsibleSection title="Quick Links">
          <ul className="text-blue-600 space-y-1">
            <li>
              <a href="https://theayurveda-experience.reamaze.com/" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="https://theayurvedaexperience.com/search" className="hover:underline">
                Search
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="https://theayurvedaexperience.com/collections/all-products" className="hover:underline">
                All Products
              </a>
            </li>
            <li>
              <a href="https://theayurvedaexperience.com/pages/about-us" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="https://theayurvedaexperience.com/pages/ayurveda-affiliate" className="hover:underline">
                Become an Affiliate
              </a>
            </li>
            <li>
              <a href="https://ayurveda.attn.tv/p/PJC/landing-page" className="hover:underline">
                Get SMS updates
              </a>
            </li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Policies">
          <ul className="text-blue-600 space-y-1">
            <li><a href="https://theayurvedaexperience.com/pages/shipping-policy" className="hover:underline">Shipping & Delivery</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="https://theayurvedaexperience.com/policies/refund-policy" className="hover:underline">Exchanges & Refunds</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/terms-of-use" className="hover:underline">Terms of Use</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/accessibility-statement" className="hover:underline">Accessibility Statement</a></li>
          </ul>
        </CollapsibleSection>

        <CollapsibleSection title="Learn">
          <ul className="text-blue-600 space-y-1">
            <li><a href="https://theayurvedaexperience.com/collections/educational-courses" className="hover:underline">Explore Courses</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/ayuttva-nail-n-mane-nlp12" className="hover:underline">Webinars</a></li>
            <li><a href="https://blog.theayurvedaexperience.com/" className="hover:underline">Blog</a></li>
            <li><a href="https://learn.theayurvedaexperience.com/" className="hover:underline">My Courses</a></li>
            <li><a href="https://theayurvedaexperience.com/pages/skincare-consultations" className="hover:underline">Product Recommendation</a></li>
          </ul>
        </CollapsibleSection>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center space-x-5 text-xl mt-6">
        <a href="mailto:care@theayurvedaexperience.com" aria-label="Email"><Mail size={18} /></a>
        <a href="https://www.facebook.com/TheAyurvedaExperience" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/theayurvedaexperience" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.pinterest.com/theayurvedaexperience" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">
          <FaPinterest />
        </a>
        <a href="https://www.youtube.com/theayurvedaexperience" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
          <FaYoutube />
        </a>
      </div>
    </div>

    {/* Disclaimer */}
    <div className="text-center text-xs text-gray-500 mt-10 border-t pt-6 px-2">
      <p>© 2025 The Ayurveda Experience.</p>
      <p className="mt-2">
        * <strong>Disclaimer</strong>: Please{" "}
        <a href="#" className="text-blue-600 underline">click here</a> to see the usage of cookies. Packaging may vary from images shown on the website. Results may vary from person to person. In compliance with FTC rulings, we cannot guarantee that these results are typical. The user experiences displayed on this page, if any, are a small sample of the thousands of accounts sent to us by people who have used products and materials developed by Transformative Learning Pte. Ltd. Nothing on this website may be viewed as the diagnosis or treatment of any medical disease whatsoever. If you have a health condition or may be allergic to herbs, please check with your physician before using the products. Please read the list of ingredients carefully and identify any ingredients that you may be allergic to. Patch test products before use. The contents of the educational video courses on this website are the opinions of the authors based on their learning and experiences. The Ayurveda Experience is not liable or responsible for the suggestions made herein, as this content is meant only for educational purposes. Please consult your primary care physician before implementing any change in your diet or lifestyle. For any further information please contact{" "}
        <a
          href="mailto:care@theayurvedaexperience.com"
          className="text-blue-600"
        >
          care@theayurvedaexperience.com
        </a>.
      </p>
    </div>
  </footer>
);

export default Footer;
