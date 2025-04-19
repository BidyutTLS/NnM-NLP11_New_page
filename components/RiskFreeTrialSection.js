import React from "react";
import Image from "next/image";

const RiskFreeTrialSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#54032d] max-w-4xl mx-auto leading-snug">
        Try it, Love it, or Get a Full Refund
      </h2>
      <p className="text-xl md:text-2xl font-bold text-[#54032d] mt-2">
        Our Risk-free <span className="bg-[#ead27a] italic font-serif px-1">100% Money Back Guarantee</span> Has You Covered!
      </p>

      {/* Image with Discount Badge */}
      <div className="relative flex justify-center items-center mt-6">
        <div className="absolute left-[calc(50%-80px)] top-0 bg-[#ead27a] text-[#54032d] font-bold text-xl px-4 py-2 rounded-full">
          15% OFF
        </div>
        <Image
          src="/bottle-group.png"
          alt="Nail n Mane Bottles"
          width={280}
          height={280}
          className="mx-auto"
        />
      </div>

      {/* Guarantee Description */}
      <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-[#1a1a1a]">
        Take a test drive with our <span className="font-bold">clinically tested hair supplement</span>, and if you’re not completely satisfied (which we highly doubt), get your money back within 30 days — <span className="font-bold text-[#54032d]">NO QUESTIONS ASKED!</span>
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <button className="bg-[#54032d] text-white px-6 py-3 rounded-full font-semibold">
          I Want to Take Advantage of this Risk-Free Trial
        </button>
      </div>
    </section>
  );
};

export default RiskFreeTrialSection;
