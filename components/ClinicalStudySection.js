import Image from 'next/image';
import React from 'react';

const ClinicalStudySection = () => {
  return (
    <section className="bg-[#f7f7f7] py-12 px-4 text-lg text-center font-merriweather">
      {/* Title */}
      <h2 className="text-3xl md:text-3xl font-inter font-extrabold text-[#54032d] mb-2 uppercase tracking-wider">
        Clinical Study
      </h2>

      <p className="text-lg md:text-xl text-[#1d1d1d]">
        Hair Thinning Test <br />
        <span className="italic">(Week 0 vs Week 12)</span>
      </p>

      <p className="mt-6 max-w-3xl mx-auto text-lg">
        Wondering what you are looking at? A noticeable
        <span className="font-bold text-[#54032d] ml-1">
          31% reduction in hair thinning 
        </span>
        from baseline in 12 weeks!
      </p>

      {/* Before/After Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 items-start justify-center max-w-4xl mx-auto font-inter text-center">
        <div>
          <p className="text-lg font-bold text-[#54032d] mb-1">WEEK 0</p>
          <Image
            src="https://cdn05.zipify.com/CKF1wzLa5PEfRbzRCt3vbvWCnSs=/fit-in/1940x0/d0f243eede514faf8a41864f7ff9d9d1/before-2.gif"
            alt="Week 0 – Hair top view"
            width={300}
            height={300}
            classname="mx-auto"
            unoptimized
          />
        </div>
        <div>
          <p className="text-lg font-bold text-[#54032d] mb-1">WEEK 12</p>
          <Image
            src="https://cdn05.zipify.com/zHPYt579wfu7a_NPXhtVMZ2-fD4=/fit-in/1940x0/f669061a51764f9ca87576b0dd3389a9/after-12-weeks-2.gif"
            alt="Week 12 – Hair top view"
            width={300}
            height={300}
            classname="mx-auto"
            unoptimized
          />
        </div>
      </div>

      {/* Hair Thickness Comparison */}
      <div className="mt-10 text-lg text-[#1d1d1d]">
        Hair Thickness Test <br />
        <span className="italic">(Week 0 vs Week 12)</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 max-w-4xl mx-auto nt-inter font-inter text-center">
        <div>
          <p className="font-inter text-lg font-bold text-[#54032d] mb-1">WEEK 0</p>
          <Image
            src="https://cdn05.zipify.com/loqXv-U5vK-V1--lzHGs29D4NcI=/fit-in/1940x0/884af14c14bb4773816a0ec5049650e8/average-hair-thickness-24-micron.png"
            alt="Week 0 – Hair thickness"
            width={300}
            height={300}
            classname="mx-auto"
            unoptimized
          />
          <p className="mt-2 text-sm font-semibold">
            Average Hair Thickness 24 µm
          </p>
        </div>
        <div>
          <p className="font-inter text-lg font-bold text-[#54032d] mb-1">WEEK 12</p>
          <Image
            src="https://cdn05.zipify.com/FHWrovg69S8MTjRv50NC3xDlE3o=/fit-in/1940x0/48b386afe3914db181dcb22eef614b2f/average-hair-thickness-38-micron.png"
            alt="Week 12 – Hair thickness"
            width={300}
            height={300}
            classname="mx-auto"
            unoptimized
          />
          <p className="mt-2 text-sm font-semibold">
            Average Hair Thickness 38 µm
          </p>
        </div>
      </div>

      {/* Summary & CTA */}
      <div className="mt-10">
        <p className="text-lg md:text-xl">
          You’re looking at
          <span className="font-bold text-[#54032d] font-inter ml-1">58% THICKER HAIR</span> in JUST 12 weeks!
        </p>
        <p className="mt-4 text-base md:text-lg">
          Ready to see this kind of natural transformation in your own hair?
        </p>

        <button className="bg-[#54032d] text-white font-semibold text-lg md:text-xl py-3 px-6 rounded-full mt-6">
          Try Nail n Mane now
        </button>

        <p className="text-sm mt-4 text-gray-700">
          30‑Day Money‑Back Guarantee | FREE Shipping
        </p>
        <p className="text-xs italic mt-2 text-gray-600">
          *Based on a clinical trial. Individual results may vary.
        </p>
      </div>
    </section>
  );
};

export default ClinicalStudySection;
