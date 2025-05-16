// ✅ Final Responsive Footer with collapsible sections, arrows, and updated links

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

      <CollapsibleSection title="Quick Links">
        <ul className="text-blue-600">
          <li><a href="https://theayurveda-experience.reamaze.com/" className="hover:underline">Help Center</a></li>
          <li><a href="https://theayurvedaexperience.com/search" className="hover:underline">Search</a></li>
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="https://theayurvedaexperience.com/search" className="hover:underline">All Products</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/about-us" className="hover:underline">About Us</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/ayurveda-affiliate" className="hover:underline">Become an Affiliate</a></li>
          <li><a href="https://ayurveda.attn.tv/p/PJC/landing-page" className="hover:underline">Get SMS updates</a></li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Policies">
        <ul className="text-blue-600">
          <li><a href="https://theayurvedaexperience.com/pages/shipping-policy" className="hover:underline">Shipping & Delivery</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="https://theayurvedaexperience.com/policies/refund-policy" className="hover:underline">Exchanges & Refunds</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/terms-of-use" className="hover:underline">Terms of Use</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/accessibility-statement" className="hover:underline">Accessibility Statement</a></li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Learn">
        <ul className="text-blue-600">
          <li><a href="https://theayurvedaexperience.com/collections/educational-courses" className="hover:underline">Explore Courses</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/ayuttva-nail-n-mane-nlp12" className="hover:underline">Webinars</a></li>
          <li><a href="https://blog.theayurvedaexperience.com/" className="hover:underline">Blog</a></li>
          <li><a href="https://learn.theayurvedaexperience.com/" className="hover:underline">My Courses</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/skincare-consultations" className="hover:underline">Product Recommendation</a></li>
        </ul>
      </CollapsibleSection>
    </div>

    <div className="flex flex-wrap justify-center items-center gap-3 mt-10">
      <Image src="/payments/amex.svg" alt="Amex" width={40} height={25} />
      <Image src="/payments/applepay.png" alt="Apple Pay" width={40} height={25} />
      <Image src="/payments/dinersclub.png" alt="Diners Club" width={40} height={25} />
      <Image src="/payments/discover.webp" alt="Discover" width={40} height={25} />
      <Image src="/payments/gpay.jpg" alt="Google Pay" width={40} height={25} />
      <Image src="/payments/paypal.png" alt="Paypal" width={40} height={25} />
      <Image src="/payments/shoppay.png" alt="Shop Pay" width={40} height={25} />
      <Image src="/payments/mastercard.png" alt="Mastercard" width={40} height={25} />
      <Image src="/payments/Visa.jpg" alt="Visa" width={40} height={25} />
      <Image src="/payments/venmo.png" alt="Venmo" width={40} height={25} />
    </div>

    <div className="text-center text-xs text-gray-500 mt-6 border-t pt-6 px-2">
      <p>© 2025 The Ayurveda Experience.</p>
      <p className="mt-2">
        * <strong>Disclaimer</strong>: Please <a href="#" className="text-blue-600 underline">click here</a> to see the usage of cookies. Packaging may vary from images shown on the website. Results may vary from person to person. In compliance with FTC rulings, we cannot guarantee that these results are typical. The user experiences displayed on this page, if any, are a small sample of the thousands of accounts sent to us by people who have used products and materials developed by Transformative Learning Pte. Ltd. Nothing on this website may be viewed as the diagnosis or treatment of any medical disease whatsoever. If you have a health condition or may be allergic to herbs, please check with your physician before using the products. Please read the list of ingredients carefully and identify any ingredients that you may be allergic to. Patch test products before use. The contents of the educational video courses on this website are the opinions of the authors based on their learning and experiences. The Ayurveda Experience is not liable or responsible for the suggestions made herein, as this content is meant only for educational purposes. Please consult your primary care physician before implementing any change in your diet or lifestyle. For any further information please contact <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a>.
      </p>
    </div>
  </footer>
);

export default Footer;
