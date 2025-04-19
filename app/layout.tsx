// app/layout.tsx
import "./globals.css";
import { DM_Serif_Display, Merriweather } from "next/font/google";
import type { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Nail n Mane | Clinically Tested Ayurvedic Supplement",
  description: "Stronger, thicker hair & nails with Ayurvedic + Modern Science",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${merriweather.variable}`}>
      <body className="bg-[#f9f9f9] text-[#2c2c2c]">{children}</body>
    </html>
  );
}
