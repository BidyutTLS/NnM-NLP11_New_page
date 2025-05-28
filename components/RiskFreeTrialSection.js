import React from "react";
import Image from "next/image";

const RiskFreeTrialSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-center">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-inter font-bold text-[#590632] max-w-4xl mx-auto leading-snug">
        Try it, Love it, or Get a Full Refund
      </h2>
      <p className="text-xl md:text-2xl font-inter font-bold text-[#590632] mt-2">
        Our Risk-free <span className="bg-gold italic font-dmserif px-1">100% Money Back Guarantee</span> Has You Covered!
      </p>

      {/* Image with Discount Badge */}
      <div className="relative flex justify-center items-center mt-6">
        <Image
          src="https://cdn05.zipify.com/RqVoS3KOk4slUwXf3RB28UyLUW4=/fit-in/1940x0/abd72a8076d04e0f9f8f597c768d429a/nail-n-mane-with-discount1.png"
          alt="Nail n Mane Bottles"
          width={280}
          height={280}
          className="mx-auto"
          unoptimized
        />
      </div>

      {/* Guarantee Description */}
      <p className="mt-6 max-w-3xl mx-auto text-base md:text-lg text-[#1a1a1a]">
        Take a test drive with our <span className="font-bold">clinically tested hair supplement</span>, and if you’re not completely satisfied (which we highly doubt), get your money back within 30 days — <span className="font-bold font-inter text-[#590632]">NO QUESTIONS ASKED!</span>
      </p>

      {/* CTA Button */}
      <div className="mt-8">
        <a href="#purchase-options">
            <button className="bg-[#590632] hover:bg-[#7c2751] transition-colors font-inter text-white px-6 py-3 rounded-lg font-semibold">
              I Want to Take Advantage of this Risk-Free Trial
            </button>
        </a>
      </div>
    </section>
  );
};

export default RiskFreeTrialSection;
