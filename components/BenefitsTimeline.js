import React from "react";

const BenefitsTimeline = () => {
  return (
    <section className="bg-[#F7F7F7] font-merriweather text-[#1a1a1a]">
      <div className="max-w-screen-xl mx-auto px-4 py-16 text-center">
        {/* Heading */}
        <h2 className="text-[2rem] md:text-[2.5rem] font-bold font-dmserif text-[#580F29] mb-6">
          What Benefits Can You Expect?
        </h2>

        {/* Intro Text */}
        <p className="text-lg max-w-3xl mx-auto">
          Our clinical trials have confirmed it—these Ayurvedic, nutrient-packed pills offer
          <span className="font-bold"> 10+ impressive benefits </span>
          that go beyond surface-level improvements. From addressing
          <span className="font-bold"> thinning hair </span> to
          <span className="font-bold"> boosting scalp health to promoting stronger growth </span>
          –– feel the difference inside and out.
        </p>

        {/* Timeline Image Only */}
        <div className="mt-10 flex justify-center">
          <img
            src="https://cdn05.zipify.com/lr_VHhkCqqIpmC8KOgdlFqMXvo0=/fit-in/1940x0/5c9189622c6846e4bdc629e21fb5657c/nail-n-mane-weekwise-effects.png"
            alt="Week-wise effects of Nail n Mane"
            className="w-[280px] md:w-[480px]"
          />
        </div>

        {/* Highlight Block */}
        <div className="bg-[#e7bb59] text-[#580F29] mt-0 px-6 py-12 rounded-md">
          <p className="text-lg mb-6 font-merriweather">
            In simple words, here’s what’s coming your way:
          </p>

          <div className="text-2xl font-dmserif text-bold italic space-y-2">
            <p>Thicker</p>
            <p>Healthier</p>
            <p>Fuller and</p>
            <p>More Voluminous Hair</p>
          </div>

          <p className="text-lg font-merriweather mt-8">
            All from just one <span className="font-bold">EASY-TO-SWALLOW</span> pill a day.<br />
            <span className="font-bold">NO AFTERTASTE</span>—just pure results.
          </p>

          <p className="mt-4 font-merriweather text-lg">
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
