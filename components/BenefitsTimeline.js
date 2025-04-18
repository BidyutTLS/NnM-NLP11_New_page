import React from "react";

const BenefitsTimeline = () => {
  return (
    <section className="bg-[#F7F7F7] font-merriweather text-[#1a1a1a]">
      <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
        <h2 className="text-[2rem] md:text-[2.5rem] font-bold font-dmserif text-[#580F29] mb-6">
          What Benefits Can You Expect?
        </h2>
        <p className="text-lg max-w-3xl mx-auto">
          Our clinical trials have confirmed it—these Ayurvedic, nutrient-packed pills offer
          <span className="font-bold"> 10+ impressive benefits </span>
          that go beyond surface-level improvements. From addressing
          <span className="font-bold"> thinning hair </span> to
          <span className="font-bold"> boosting scalp health to promoting stronger growth </span>
          –– feel the difference inside and out.
        </p>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-center">
          <img
            src="/images/blonde-woman.png"
            alt="Woman with healthy hair"
            className="w-[280px] md:w-[320px] mb-6 md:mb-0"
          />

          <div className="space-y-6 text-left md:ml-10">
            <div className="bg-white p-4 shadow-md border-l-4 border-[#580F29]">
              <p className="font-bold text-[#580F29] mb-1">WEEK 4</p>
              <p className="text-sm">
                Breakage and shedding decrease. Hair density, length, and thickness increase.
              </p>
            </div>
            <div className="bg-white p-4 shadow-md border-l-4 border-[#580F29]">
              <p className="font-bold text-[#580F29] mb-1">WEEK 8</p>
              <p className="text-sm">
                As nutrient uptake continues, hair growth rate, strength, and shine improve.
              </p>
            </div>
            <div className="bg-white p-4 shadow-md border-l-4 border-[#580F29]">
              <p className="font-bold text-[#580F29] mb-1">WEEK 12</p>
              <p className="text-sm">
                More coverage, visibly less breakage, and hair fall. Hair is smoother, longer, and stronger.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[#e7bb59] text-[#580F29] mt-16 px-6 py-12 rounded-md">
          <p className="text-lg mb-6 font-merriweather">
            In simple words, here’s what’s coming your way:
          </p>

          <div className="text-2xl font-dmserif italic space-y-2">
            <p>Thicker</p>
            <p>Healthier</p>
            <p>Fuller and</p>
            <p>More Voluminous Hair</p>
          </div>

          <p className="text-sm font-merriweather mt-8">
            All from just one <span className="font-bold">EASY-TO-SWALLOW</span> pill a day.<br />
            <span className="font-bold">NO AFTERTASTE</span>—just pure results.
          </p>

          <p className="mt-4 font-merriweather text-sm">
            Start seeing visible hair growth in JUST 4–12 weeks*
          </p>
          <p className="text-xs italic mt-2">
            *For a complete list of all 10+ AMAZING benefits, read our FAQ section at the end.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitsTimeline;
