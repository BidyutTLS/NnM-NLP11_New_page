// ... (imports remain same)

const Footer = () => (
  <footer className="bg-white border-t text-sm text-gray-700 px-4 pt-10 pb-4 font-['Open_Sans']">
    {/* Centered Logo */}
    <div className="flex justify-center mb-6">
      <Image src="/logo.png" alt="TAE Logo" width={200} height={50} />
    </div>

    {/* App Buttons + Help Info */}
    <div className="flex flex-col items-center gap-4 text-center mb-8">
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

      {/* Social Icons */}
      <div className="flex justify-center space-x-5 text-xl mt-4">
        <a href="mailto:care@theayurvedaexperience.com"><Mail size={18} /></a>
        <a href="https://www.facebook.com/theayurvedaexperience"><Facebook size={18} /></a>
        <a href="https://www.instagram.com/theayurvedaexperience"><Instagram size={18} /></a>
        <a href="https://www.youtube.com/channel/UCv51NcFKkxcl_L8aQgzK3hQ"><Youtube size={18} /></a>
      </div>
    </div>

    {/* Footer Grid - Updated Layout */}
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
      {/* Column 1: Quick Links */}
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

      {/* Column 2: Learn (before Policies on mobile) */}
      <CollapsibleSection title="Learn">
        <ul className="text-blue-600 space-y-1">
          <li><a href="/collections/educational-courses">Courses</a></li>
          <li><a href="/pages/ayuttva-nail-n-mane-nlp12">Webinars</a></li>
          <li><a href="https://blog.theayurvedaexperience.com/">Blog</a></li>
        </ul>
      </CollapsibleSection>

      {/* Column 3: Policies */}
      <CollapsibleSection title="Policies">
        <ul className="text-blue-600 space-y-1">
          <li><a href="/pages/shipping-policy">Shipping & Delivery</a></li>
          <li><a href="/pages/privacy-policy">Privacy Policy</a></li>
          <li><a href="/policies/refund-policy">Refunds</a></li>
          <li><a href="/pages/terms-of-use">Terms of Use</a></li>
        </ul>
      </CollapsibleSection>
    </div>

    {/* Payment Icons */}
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

    {/* Disclaimer */}
    <div className="text-center text-xs text-gray-500 mt-6 border-t pt-6 px-2">
      <p>© 2025 The Ayurveda Experience.</p>
      <p className="mt-2">
        * <strong>Disclaimer</strong>: Please <a href="#" className="text-blue-600 underline">click here</a> to see the usage of cookies. Packaging may vary from images shown on the website. Results may vary from person to person. In compliance with FTC rulings, we cannot guarantee that these results are typical. The user experiences displayed on this page, if any, are a small sample of the thousands of accounts sent to us by people who have used products and materials developed by Transformative Learning Pte. Ltd. Nothing on this website may be viewed as the diagnosis or treatment of any medical disease whatsoever. If you have a health condition or may be allergic to herbs, please check with your physician before using the products. Please read the list of ingredients carefully and identify any ingredients that you may be allergic to. Patch test products before use. The contents of the educational video courses on this website are the opinions of the authors based on their learning and experiences. The Ayurveda Experience is not liable or responsible for the suggestions made herein, as this content is meant only for educational purposes. Please consult your primary care physician before implementing any change in your diet or lifestyle. For any further information please contact <a href="mailto:care@theayurvedaexperience.com" className="text-blue-600">care@theayurvedaexperience.com</a>.
      </p>
    </div>
  </footer>
);

export default Footer;
