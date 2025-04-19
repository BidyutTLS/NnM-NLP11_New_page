export const metadata: Metadata = {
  title: "Nail n Mane | Clinically Tested Ayurvedic Supplement",
  description:
    "Stronger, thicker, shinier hair and longer nails in just 4–12 weeks. 100% drug-free. Clinically tested. Trusted by thousands.",
  metadataBase: new URL("https://yourdomain.com"), // ✅ replace with your live domain
  openGraph: {
    title: "Nail n Mane by The Ayurveda Experience",
    description:
      "Clinically tested Ayurvedic formula for thicker hair and stronger nails.",
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
    canonical: "https://yourdomain.com", // ✅ again, update domain
  },
};
