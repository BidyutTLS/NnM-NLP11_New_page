import React from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const packs = [
  {
    name: "SUPER SAVER",
    discount: "15% off",
    packLabel: "Nail n Mane\nPack of 3",
    price: "$7.08",
    total: "$63.75",
    originalPrice: "$75.00",
    duration: "for 9 months",
    images: [
      "/images/super-saver.jpg",
      "/images/carousel-1.jpg",
      "/images/carousel-2.jpg",
      "/images/carousel-3.jpg",
      "/images/carousel-4.jpg",
      "/images/carousel-5.jpg",
    ],
  },
  {
    name: "POPULAR CHOICE",
    discount: "10% off",
    packLabel: "Nail n Mane\nPack of 2",
    price: "$7.50",
    total: "$45.00",
    originalPrice: "$50.00",
    duration: "for 6 months",
    images: [
      "/images/popular-choice.jpg",
      "/images/carousel-1.jpg",
      "/images/carousel-2.jpg",
      "/images/carousel-3.jpg",
      "/images/carousel-4.jpg",
      "/images/carousel-5.jpg",
    ],
  },
  {
    name: "SAMPLER PACK",
    discount: "",
    packLabel: "Nail n Mane\nPack of 1",
    price: "$8.33",
    total: "$25.00",
    originalPrice: "",
    duration: "for 3 months",
    images: [
      "/images/sampler-pack.jpg",
      "/images/carousel-1.jpg",
      "/images/carousel-2.jpg",
      "/images/carousel-3.jpg",
      "/images/carousel-4.jpg",
      "/images/carousel-5.jpg",
    ],
  },
];

const PurchaseOptionsSection = () => {
  return (
    <section id="purchase-options" className="bg-[#54032d] text-center text-black font-inter py-10 px-4">
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {packs.map((pack, index) => (
          <div key={index} className="bg-white rounded shadow-md overflow-hidden">
            {/* Header */}
            <div className="bg-[#3b5998] text-white py-3 text-xl font-bold">
              {pack.name}
            </div>

            {/* Discount Strip */}
            <div className="bg-[#e4bb45] text-[#54032d] font-bold text-lg py-1 h-[40px] flex items-center justify-center">
              {pack.discount || <span className="invisible">placeholder</span>}
            </div>

            {/* Image Carousel */}
            <Carousel
              showThumbs={true}
              showStatus={false}
              infiniteLoop
              emulateTouch
              className="h-[340px]"
              renderThumbs={() =>
                pack.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Thumbnail ${i + 1}`}
                    className="h-8 w-8 object-contain rounded border"
                  />
                ))
              }

            >
              {pack.images.map((src, i) => (
                <div key={i} className="bg-white">
                  <Image
                    src={src}
                    alt={`${pack.name} image ${i + 1}`}
                    width={300}
                    height={300}
                    className="mx-auto h-[300px] object-contain"
                  />
                </div>
              ))}
            </Carousel>

            {/* Info */}
            <div className="py-4 text-[#54032d]">
              <p className="whitespace-pre-line py-4 font-medium">{pack.packLabel}</p>
              <p className="text-3xl font-bold mt-2">{pack.price}</p>
              <p className="text-lg font-semibold">Per month</p>
              <p className="text-sm text-gray-700 mt-2">
                This is a one-time purchase only<br />(not a subscription).
              </p>

              {pack.discount && (
                <p className="text-green-600 font-bold mt-2">
                  Buy Today & Get {pack.discount}!
                </p>
              )  || <span className="invisible">placeholder</span> }

              <div className="mt-3">
                {pack.originalPrice && (
                  <p className="text-sm text-gray-500 line-through">
                    {pack.originalPrice}
                  </p>
                )}
                <p className="text-lg font-bold text-black">{pack.total}</p>
                <p className="text-sm text-gray-600">{pack.duration}</p>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-center space-x-2 mt-3">
                <button aria-label="Decrease quantity" className="bg-gray-200 px-3 py-1 text-lg">
                  −
                </button>
                <span className="text-lg font-semibold">1</span>
                <button aria-label="Increase quantity" className="bg-gray-200 px-3 py-1 text-lg">
                  +
                </button>
              </div>

              {/* CTA Button */}
              <a href="#purchase-options">
                <button className="bg-gold text-[#4b2d0d] font-bold font-inter py-3 px-6 rounded-lg">
                  Treat Yourself to Healthier Hair. Order NOW
                </button>
              </a>


              {/* Trust Badges */}
              <div className="mt-4 text-left text-sm text-black px-4">
                <p>✅ 100% SATISFACTION</p>
                <p>🔄 30 DAYS MONEY BACK GUARANTEE</p>
                <p>🚚 FREE DELIVERY</p>
              </div>

              <div className="px-4 mt-3">
                <Image
                  src="https://cdn05.zipify.com/sEJUgl7T3jObY9ixNLtl9Rghn6o=/fit-in/1940x0/e1575aff211a4aa7b38b2a46f1c42122/guaranteed-safe-checkout.jpg"
                  alt="Safe Checkout"
                  width={250}
                  height={60}
                  className="mx-auto"
                  unoptimized
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PurchaseOptionsSection;
