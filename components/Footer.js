// ✅ Final Responsive Footer with collapsible sections and updated links

import { useState } from "react";
import Image from "next/image";

const CollapsibleSection = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button className="w-full text-left font-semibold mb-2 flex justify-between items-center" onClick={() => setOpen(!open)}>
        {title} <span>{open ? "-" : "+"}</span>
      </button>
      {open && <div className="space-y-1">{children}</div>}
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
        <ul>
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
        <ul>
          <li><a href="https://theayurvedaexperience.com/pages/shipping-policy" className="hover:underline">Shipping & Delivery</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/privacy-policy" className="hover:underline">Privacy Policy</a></li>
          <li><a href="https://theayurvedaexperience.com/policies/refund-policy" className="hover:underline">Exchanges & Refunds</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/terms-of-use" className="hover:underline">Terms of Use</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/accessibility-statement" className="hover:underline">Accessibility Statement</a></li>
        </ul>
      </CollapsibleSection>

      <CollapsibleSection title="Learn">
        <ul>
          <li><a href="https://theayurvedaexperience.com/collections/educational-courses" className="hover:underline">Explore Courses</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/ayuttva-nail-n-mane-nlp12" className="hover:underline">Webinars</a></li>
          <li><a href="https://blog.theayurvedaexperience.com/?_gl=1*1d57mik*_gcl_au*MTQ5ODgwNTY2Ny4xNzQwOTk4NjA3LjE1MDQzMzExNzAuMTc0NzE0NDk0OC4xNzQ3MTQ1MDkz" className="hover:underline">Blog</a></li>
          <li><a href="https://learn.theayurvedaexperience.com/?_gl=1*1d57mik*_gcl_au*MTQ5ODgwNTY2Ny4xNzQwOTk4NjA3LjE1MDQzMzExNzAuMTc0NzE0NDk0OC4xNzQ3MTQ1MDkz" className="hover:underline">My Courses</a></li>
          <li><a href="https://theayurvedaexperience.com/pages/skincare-consultations" className="hover:underline">Product Recommendation</a></li>
        </ul>
      </CollapsibleSection>
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
