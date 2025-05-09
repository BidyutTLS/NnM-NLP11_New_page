import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <>
      <Head>
        {/* === ESSENTIAL APP SCRIPTS === */}

        {/* Klaviyo */}
        <script async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=NgFEjR"></script>

        {/* Google Analytics (GA4) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-2VR7DSZ51C"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2VR7DSZ51C');
          `,
        }} />

        {/* Facebook Pixel */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '129347075118039');
            fbq('track', 'PageView');
          `
        }} />
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=129347075118039&ev=PageView&noscript=1" />
        </noscript>

        {/* Microsoft Clarity */}
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "k29wdi5qfq");
          `
        }} />

        {/* Smile.io */}
        <script async src="https://js.smile.io/v1/smile-shopify.js?shop=theayurveda-experience.myshopify.com"></script>

        {/* Friendbuy */}
        <script async src="https://static.fbot.me/friendbuy.js"></script>

        {/* Refersion */}
        <script async src="https://cdn.refersion.com/shop.js?key=pub_ee9e34ff7f51d21ec97d&check_token=true"></script>

        {/* Octane AI */}
        <script async src="https://app.octaneai.com/e7crwqrljmnv1sag/shopify.js?x=GSQgIinkDPK70Xnv"></script>

        {/* Justuno */}
        <script async src="https://justone.ai/embed/ju_shopify_init.js?v=2"></script>

        {/* Searchanise */}
        <script async src="//searchanise-ef84.kxcdn.com/widgets/shopify/init.js?a=4L2k6P7i4o"></script>

        {/* Pinterest */}
        <script async defer src="https://ct.pinterest.com/v3/?tid=2612269118298&pd[em]=<hashed_email>"></script>

        {/* Snapchat */}
        <script async src="https://sc-static.net/scevent.min.js"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            snaptr('init', 'f37959e5-3e90-4ed2-a8fa-ec18235ad1c0');
            snaptr('track', 'PAGE_VIEW');
          `
        }} />
      </Head>

      {/* === FULL HEADER UI === */}
      <header className="w-full border-b border-gray-200 text-sm">
        <div className="flex justify-between items-center px-6 py-2 bg-gray-50 text-gray-700">
          <div className="flex flex-wrap space-x-4">
            <Link href="#">My Account</Link>
            <Link href="#">Track Order</Link>
            <Link href="#">Help Center</Link>
            <Link href="#">Contact Us</Link>
            <Link href="#">AyuRewards</Link>
            <Link href="#">Refer & Get Discounts</Link>
            <span className="font-semibold">+1 (678)-498-7248</span>
            <Link href="#">Accessibility</Link>
          </div>
          <div className="flex items-center space-x-3">
            <span>United States (USD $)</span>
            <User size={16} />
            <Link href="#" className="hover:underline">Login</Link>
            <Link href="#" className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 text-xs bg-green-200 text-black rounded-full px-1">0</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 py-4 bg-white">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="Logo" width={150} height={40} />
          </Link>

          <nav className="hidden lg:flex space-x-6 font-semibold text-black text-sm items-center relative">
            <MegaMenu label="ALL PRODUCTS" />
            <NavItem label="FACE" />
            <NavItem label="BODY" />
            <NavItem label="HAIR" />
            <NavItem label="BESTSELLERS" />
            <NavItem label="OFFERS" badge="NEW" />
            <NavItem label="NEW IN STORE" />
            <NavItem label="LEARN" />
            <Link href="#" className="hover:text-gray-700">REVIEWS</Link>
          </nav>

          {/* ✅ Searchanise-integrated Search Bar */}
          <form
            method="get"
            action="/search"
            className="snize-search-form hidden lg:flex items-center border rounded-full px-3 py-1"
            role="search"
          >
            <input
              type="text"
              name="q"
              placeholder="Search"
              className="searchanise-input outline-none text-sm px-2 w-32"
              autoComplete="off"
            />
            <button type="submit">
              <Search size={16} className="text-gray-500" />
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

const NavItem = ({ label, badge }) => (
  <div className="relative group cursor-pointer">
    <div className="flex items-center space-x-1 hover:text-gray-700">
      <span>{label}</span>
      <ChevronDown size={14} />
    </div>
    {badge && (
      <span className="absolute -top-3 left-full ml-1 bg-blue-600 text-white text-xs font-bold px-1.5 rounded">
        {badge}
      </span>
    )}
  </div>
);

const MegaMenu = ({ label }) => (
  <div className="relative group cursor-pointer">
    <div className="flex items-center space-x-1 hover:text-gray-700">
      <span>{label}</span>
      <ChevronDown size={14} />
    </div>
    <div className="absolute hidden group-hover:flex flex-row bg-white shadow-xl p-6 mt-2 z-50 w-[700px] border rounded-md">
      <div className="mr-10 w-1/2">
        <h3 className="font-bold text-sm mb-3">Shop by Category</h3>
        <ul className="space-y-1 text-sm">
          {["Face Oils", "Eye Care", "Cleansers", "Creams & Concentrates", "Lip Care", "Body Care", "Hair Care", "Massage Tools", "Vegan", "Dietary Supplements"].map((item) => (
            <li key={item}><a href="#" className="hover:underline">{item}</a></li>
          ))}
        </ul>
      </div>
      <div className="w-1/2">
        <h3 className="font-bold text-sm mb-3">Shop by Brand</h3>
        <ul className="space-y-1 text-sm">
          {[
            { name: "iYURA", desc: "Authentic Ayurvedic Skincare" },
            { name: "Ajara", desc: "Inspired Daily Skin Care" },
            { name: "A Modernica", desc: "Ancient + Modern Science" },
            { name: "Ayuttva", desc: "Supplements & Foods" },
            { name: "The Ayurveda Experience", desc: "Learn Ayurveda" }
          ].map((brand) => (
            <li key={brand.name}>
              <a href="#" className="hover:underline">{brand.name} | <span className="text-gray-600">{brand.desc}</span></a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
