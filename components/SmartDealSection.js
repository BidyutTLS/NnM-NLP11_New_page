import React from "react";
import Image from "next/image";

const SmartDealSection = () => {
  return (
    <section className="bg-[#fcfcfc] text-[#1a1a1a] py-10 px-4 text-center">
      <h2 className="text-2xl md:text-3xl text-[#590632}font-inter font-bold max-w-4xl mx-auto leading-snug">
        Why you’ve got to be Smart and grab this Clinically Tested supplement NOW:
      </h2>
      <div className="mt-6 max-w-4xl mx-auto space-y-4 text-lg">
        <p>
          When you have a product this effective, demand often exceeds supply. That’s exactly what’s happening here.
        </p>
        <p>
          We’re all for producing more...but sourcing the rare ingredients of the <span className="bg-gold text-[#590632] font-inter font-semibold px-1">highest quality often limits our production.</span>
        </p>
        <p className="font-semibold">The truth is...</p>
        <p>
          .... it’s not just a random cosmetic product — <span className="font-bold">it’s a real investment for your hair, confidence, and femininity.</span>
        </p>
        <p>
          Smart women have already figured this out, ordering in bulk to have a backup <span className="font-bold">supply for at least 6 and even 9 months!</span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 max-w-4xl mx-auto gap-6">
        <div className="w-[120px]">
          <Image
            src="https://cdn05.zipify.com/RqVoS3KOk4slUwXf3RB28UyLUW4=/fit-in/1940x0/abd72a8076d04e0f9f8f597c768d429a/nail-n-mane-with-discount1.png"
            alt="15% Off Pack"
            width={150}
            height={150}
            className="mx-auto"
            unoptimized
          />
        </div>
        <div className="text-left text-lg space-y-3 max-w-xl">
          <p>
            With supplies running low... it makes sense to <span className="bg-gold text-[#590632] font-inter font-semibold px-1">stock up on the 3-bottle pack NOW</span> to lock in the best results for your hair! Don’t wait or you may see the dreaded “Out of Stock” sign!
          </p>
          <p className="bg-gold text-[#590632] font-inter font-bold px-2">Be smart about it!</p>
        </div>
      </div>
      <div className="mt-6 text-lg max-w-4xl mx-auto">
        <p>
          Order your 3-bottle pack NOW! Plus, you’re getting <span className="font-bold">EXTRA benefits</span> with our <span className="font-bold">STEAL DEAL</span>: 3 bottles at a discounted price of
        </p>
        <div className="mt-2 font-inter text-2xl font-bold">
          <span className="line-through text-gray-500 mr-2">$75.00</span>
          <span className="text-[#590632] text-3xl">$63.75</span>
        </div>
        <p className="mt-2 font-bold">Deal lasts till the stock lasts!</p>
        <p className="text-base mt-1">30-Day Money-Back Guarantee | FREE Shipping</p>
      </div>
      <div className="mt-6">
          <button className="bg-[#590632] hover:bg-[#3b0225] transition-colors text-white fon-inter font-bold py-3 px-8 rounded-lg text-lg">
          ADD TO CART
        </button>
      </div>
    </section>
  );
};

export default SmartDealSection;
