import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#54032d] text-white text-sm py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Image
            src="/logo-white.png" // 🔁 Replace with white logo version if you have one
            alt="Nail n Mane"
            width={120}
            height={40}
          />
          <p className="mt-3 max-w-sm">
            Nail n Mane is a clinically tested Ayurvedic supplement that supports healthy, thicker hair and nails using natural science-backed ingredients.
          </p>
        </div>

        <div className="space-y-2 md:text-right">
          <p>&copy; {new Date().getFullYear()} The Ayurveda Experience. All rights reserved.</p>
          <p>Made with ❤️ in India | US FDA Registered Facility</p>
          <div className="flex justify-center md:justify-end gap-4 mt-2">
            <a href="#faq" className="hover:underline">FAQ</a>
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
