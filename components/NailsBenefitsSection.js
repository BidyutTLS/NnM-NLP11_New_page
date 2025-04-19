import React from "react";
import Image from "next/image";

const NailsBenefitsSection = () => {
  return (
    <section className="bg-[#fafafa] py-12 px-4 text-[#54032d] text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        Hey, wait...<span className="font-extrabold">did we mention the NAILS benefits?</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
        <div className="flex-shrink-0">
          <div className="relative w-40 h-40 mx-auto">
            <Image
              src="/nail-icon-ring.png"
              alt="Nail icon"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <div className="text-left space-y-2 text-lg">
          <p><span className="font-bold text-xl">2X</span> Nail Growth</p>
          <p><span className="font-bold text-xl">30%</span> Stronger Nails</p>
          <p><span className="font-bold text-xl">25%</span> Brighter Nails*</p>
        </div>
      </div>
    </section>
  );
};

export default NailsBenefitsSection;
