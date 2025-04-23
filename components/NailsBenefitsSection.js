import React from "react";
import Image from "next/image";

const NailsBenefitsSection = () => {
  return (
    <section className="bg-[#fafafa] py-12 px-4 text-[#54032d] text-center">
      <h2 className="text-2xl md:text-3xl font-inter font-bold mb-8">
        Hey, wait... did we mention the NAILS benefits?
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
        <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0">
          <Image
            src="https://cdn05.zipify.com/LbrW5CO9MYhZ6z50hhHmd1JsFGk=/fit-in/1940x0/e05671364a9b4cf2bac47c09517f49d6/nail-benefits.png"
            alt="Nail icon"
            width={192}
            height={192}
            className="w-full h-full object-contain"
            unoptimized
          />
        </div>

        <div className="text-left space-y-2 text-lg">
          <p><span className="font-bold font-inter text-2xl">2X </span> Nail Growth</p>
          <p><span className="font-bold font-inter text-2xl">30%</span> Stronger Nails</p>
          <p><span className="font-bold font-inter text-2xl">25%</span> Brighter Nails*</p>
        </div>
      </div>
    </section>
  );
};

export default NailsBenefitsSection;
