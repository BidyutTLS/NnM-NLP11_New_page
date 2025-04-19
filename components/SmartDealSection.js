import React from "react";
import Image from "next/image";

const SmartDealSection = () => {
  return (
    <section className="bg-[#fcfcfc] text-[#270122] py-10 px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold max-w-4xl mx-auto leading-snug">
        Why you’ve got to be Smart and grab this Clinically Tested supplement <span className="text-[#54032d]">NOW:</span>
      </h2>
      <div className="mt-6 max-w-4xl mx-auto space-y-4 text-lg">
        <p>
          When you have a product this effective, demand often exceeds supply. That’s exactly what’s happening here.
        </p>
        <p>
          We’re all for producing more...but sourcing the rare ingredients of the <span className="bg-[#e4bb45] font-semibold px-1">highest quality often limits our production.</span>
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
            src="/super-saver.png"
            alt="15% Off Pack"
            width={150}
            height={150}
            className="mx-auto"
          />
        </div>
        <div className="text-left text-base space-y-3 max-w-xl">
          <p>
            With supplies running low... it makes sense to <span className="bg-[#e4bb45] font-semibold px-1">stock up on the 3-bottle pack NOW</span> to lock in the best results for your hair! Don’t wait or you may see the dreaded “Out of Stock” sign!
          </p>
          <p className="bg-[#e4bb45] inline-block font-bold px-2">Be smart about it!</p>
        </div>
      </div>
      <div className="mt-6 text-lg max-w-4xl mx-auto">
        <p>
          Order your 3-bottle pack NOW! Plus, you’re getting <span className="font-bold">EXTRA benefits</span> with our <span className="font-bold">STEAL DEAL</span>: 3 bottles at a discounted price of
        </p>
        <div className="mt-2 text-2xl font-bold">
          <span className="line-through text-gray-500 mr-2">$75.00</span>
          <span className="text-[#54032d] text-3xl">$63.75</span>
        </div>
        <p className="mt-2 font-bold">Deal lasts till the stock lasts!</p>
        <p className="text-sm mt-1">30-Day Money-Back Guarantee | FREE Shipping</p>
      </div>
      <div className="mt-6">
        <button className="bg-[#54032d] hover:bg-[#3b0225] transition-colors text-white font-bold py-3 px-8 rounded-full text-lg">
          ADD TO CART
        </button>
      </div>
    </section>
  );
};

export default SmartDealSection;
