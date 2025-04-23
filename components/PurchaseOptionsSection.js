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
      "/super-saver.jpg",
      "/carousel-1.jpg",
      "/carousel-2.jpg",
      "/carousel-3.jpg",
      "/carousel-4.jpg",
      "/carousel-5.jpg"
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
      "/popular-choice.jpg",
      "/carousel-1.jpg",
      "/carousel-2.jpg",
      "/carousel-3.jpg",
      "/carousel-4.jpg",
      "/carousel-5.jpg"
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
      "/sampler-pack.jpg",
      "/carousel-1.jpg",
      "/carousel-2.jpg",
      "/carousel-3.jpg",
      "/carousel-4.jpg",
      "/carousel-5.jpg"
    ],
  },
];

const PurchaseOptionsSection = () => {
  return (
    <section className="bg-[#54032d] text-center text-black py-10 px-4">
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {packs.map((pack, index) => (
          <div key={index} className="bg-white rounded shadow-md overflow-hidden">
            <div className="bg-[#3b5998] text-white py-3 text-xl font-bold">
              {pack.name}
            </div>
            <div className="bg-[#e4bb45] text-[#54032d] font-bold text-lg py-1">
              {pack.discount}
            </div>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              emulateTouch
              className="h-[340px]"
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
            <div className="py-4 text-[#54032d]">
              <p className="whitespace-pre-line font-medium">{pack.packLabel}</p>
              <p className="text-3xl font-bold mt-2">{pack.price}</p>
              <p className="text-lg font-semibold">Per month</p>
              <p className="text-sm text-gray-700 mt-2">
                This is a one-time purchase only<br />(not a subscription).
              </p>
              {pack.discount && (
                <p className="text-green-600 font-bold mt-2">
                  Buy Today & Get {pack.discount}!
                </p>
              )}
              <div className="mt-3">
                <p className="text-sm text-gray-500 line-through">{pack.originalPrice}</p>
                <p className="text-lg font-bold text-black">{pack.total}</p>
                <p className="text-sm text-gray-600">{pack.duration}</p>
              </div>
              <div className="flex items-center justify-center space-x-2 mt-3">
                <button className="bg-gray-200 px-3 py-1 text-lg">−</button>
                <span className="text-lg font-semibold">1</span>
                <button className="bg-gray-200 px-3 py-1 text-lg">+</button>
              </div>
              <button className="bg-green-600 text-white font-bold py-2 px-6 mt-4 w-full">
                ADD TO CART
              </button>
              <div className="mt-4 text-left text-sm text-[#54032d] px-4">
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
