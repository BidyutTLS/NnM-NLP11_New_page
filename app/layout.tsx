import "./globals.css";
import { DM_Serif_Display, Merriweather, Inter } from "next/font/google";
import type { Metadata } from "next";
import "../styles/globals.css";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-dm-serif",
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nail n Mane | Clinically Tested Ayurvedic Supplement",
  description:
    "Stronger, thicker, shinier hair and longer nails in just 4–12 weeks. 100% drug-free. Clinically tested. Trusted by thousands.",
  metadataBase: new URL("https://nailnmane.vercel.app"),
  openGraph: {
    title: "Nail n Mane by The Ayurveda Experience",
    description: "Clinically tested Ayurvedic formula for thicker hair and stronger nails.",
    url: "/",
    siteName: "Nail n Mane",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nail n Mane bottle image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nail n Mane",
    description: "Get visibly stronger hair & nails in 4–12 weeks.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://nailnmane.vercel.app",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${merriweather.variable} ${inter.variable}`}
    >
      <head>
        {/* Google Tag Manager script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id=GTM-5ND2999'+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5ND2999');`,
          }}
        />
      </head>
      <body className="bg-[#f9f9f9] text-[#2c2c2c] font-merriweather">
        {/* Google Tag Manager noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ND2999"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
