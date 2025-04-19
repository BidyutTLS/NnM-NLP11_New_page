// components/ComparisonTableSection.tsx
import React from "react";
import Image from "next/image";

const ComparisonTableSection: React.FC = () => {
  return (
    <section className="text-center py-10 px-4 bg-[#f9f9f9]">
      <h2 className="text-3xl md:text-4xl font-bold text-[#54032d] mb-3">
        Get More Bangs for Your Bucks!
      </h2>
      <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto">
        Now, we know hair supplements can seem expensive. But does it have to cost you an arm and a leg? <br />
        Well... not on our watch!
      </p>
      <p className="text-lg md:text-xl text-gray-800 max-w-4xl mx-auto mt-4">
        Check out the table below to see how we stack up against a leading hair product and why{" "}
        <span className="bg-yellow-300 font-semibold">Nail n Mane is a smarter, more affordable choice</span>{" "}
        for getting that gorgeous, healthy hair that you deserve.
      </p>

      {/* Bottles Row */}
      <div className="grid grid-cols-3 gap-4 items-end justify-center max-w-5xl mx-auto mt-10">
        <div />{/* empty cell */}
        <Image
          src="https://cdn05.zipify.com/XfFLv7bRBjdp9B0PD4T1RNC0-LU=/fit-in/1940x0/d753e3faa45d4eeb91865ee2343d58a8/nail-n-mane-one-bottle.jpeg"
          alt="Nail n Mane Bottle"
          width={100}
          height={100}
          className="mx-auto"
        />
        <Image
          src="https://cdn05.zipify.com/Wlkfn1_Qwr3jBhWZX9XcprsOkT4=/fit-in/1940x0/effd5a6d5a264c60b6ecc0b347132c51/leading-hair-supplement-one-bottle.jpeg"
          alt="Leading Product Bottle"
          width={100}
          height={100}
          className="mx-auto"
        />
      </div>

      {/* Comparison Table */}
      <div className="grid grid-cols-3 max-w-5xl mx-auto mt-6 text-left text-sm md:text-base">
        <div className="font-bold py-3">Parameters</div>
        <div className="font-bold py-3 text-center">Nail n Mane</div>
        <div className="font-bold py-3 text-center">Leading Hair Product</div>

        <div className="py-3">Clinically Tested</div>
        <div className="py-3 text-center">✅</div>
        <div className="py-3 text-center">✅</div>

        <div className="py-3">Clinically Researched Ingredients</div>
        <div className="py-3 text-center">✅</div>
        <div className="py-3 text-center">✅</div>

        <div className="py-3">Capsules to be Consumed Daily</div>
        <div className="py-3 text-center">
          <Image
            src="https://cdn05.zipify.com/eYSyXCNi3VyjJtMMHX3vVFKu_h4=/fit-in/1940x0/a44e77f629e348f98a6229177bbf77c2/capsule-icon.png"
            alt="1 Capsule"
            width={40}
            height={40}
            className="inline-block"
          />
          /day
        </div>
        <div className="py-3 text-center">
          <Image
            src="https://cdn05.zipify.com/bCsM9s2BLly61aWkw23y6RsFi9c=/fit-in/1940x0/10a8eefc87094907b9aa56de47ad0c8e/4-capsules.png"
            alt="5 Capsules"
            width={100}
            height={30}
            className="inline-block"
          />
          /day
        </div>

        <div className="py-3">Cost of 1 Bottle</div>
        <div className="py-3 text-center text-[#54032d]">
          <p className="font-bold">$25</p>
          <p className="text-sm">3‑month supply</p>
        </div>
        <div className="py-3 text-center text-[#54032d]">
          <p className="font-bold">$79</p>
          <p className="text-sm">1‑month supply</p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <button className="bg-[#54032d] text-white font-bold px-6 py-3 rounded-full">
          Buy Now Risk‑free
        </button>
        <p className="text-sm text-gray-600 mt-2">
          30‑Day Money‑Back Guarantee | FREE Shipping
        </p>
      </div>
    </section>
  );
};

export default ComparisonTableSection;
