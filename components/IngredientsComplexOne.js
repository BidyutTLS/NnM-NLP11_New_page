import React from "react";
import Image from "next/image";

const IngredientsComplexOne = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-[#54032d] max-w-5xl mx-auto">
        That’s where our <span className="bg-[#5c6b2a] italic font-serif text-white px-2">Triple Action</span> solution comes in…
      </h2>

      <p className="mt-4 text-lg max-w-3xl mx-auto">
        This nature-first supplement combines biotin with a potent mix of Ayurvedic herbs,
        essential vitamins, and minerals to hit all six root causes of hair fallout:
      </p>

      <div className="mt-6 bg-[#54032d] text-white text-lg font-semibold py-2">
        Ashwagandha, Tulsi, and Bhringraj tackle stress and hormonal imbalances.
      </div>

      <div className="mt-10 flex justify-center">
        <Image
          src="https://cdn05.zipify.com/FaaCBa3g2ykB7xytL2ngKrbi8xA=/fit-in/1940x0/26ff6ed5708e41d59595a47dc54fd53d/tulsi-ashwagandha-bhringraj.png"
          alt="Ashwagandha"
          width={400}
          height={300}
          unoptimized
        />
      </div>

      <p className="mt-6 text-xl font-bold text-[#54032d]">
        Indian Winter Cherry (Ashwagandha)
      </p>
      <p className="text-base max-w-2xl mx-auto">
        Its powerful adaptogenic properties <span className="font-semibold">help lower cortisol levels</span>, reducing hair fall due to
        stress while <span className="font-semibold">promoting thicker, denser hair</span>.
      </p>

      <div className="mt-10 border-2 border-[#54032d] bg-white max-w-5xl mx-auto px-4 py-6 text-left">
        <p>
          A double-blind, randomized, placebo-controlled study on 61 adults ages 18–45 showed Ashwagandha results in
          <span className="font-bold"> significant reduction in hair shedding, increased hair density and thickness</span> compared to a placebo.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Image
            src="https://cdn05.zipify.com/BPkoqAxo04fsoIemwCf5uuhEatE=/fit-in/1940x0/ba00b70772c54e1bafeb403d715dad71/hair-density-ashwagandha.png"
            alt="Hair Density Chart"
            width={300}
            height={200}
            unoptimized
          />
          <Image
            src="https://cdn05.zipify.com/fBtnj-0qmnT9hU6JAKvcLimfVaE=/fit-in/1940x0/61b72fc0605240e89d69e71475dc5686/hair-growth-ashwagandha.png"
            alt="Hair Growth Chart"
            width={300}
            height={200}
            unoptimized
          />
          <Image
            src="https://cdn05.zipify.com/tmzXSua7YGVd3rhTdIAr__GKhyE=/fit-in/1940x0/bf3a40f30e5b45a3b1106fca667f1e15/hair-thickness-ashwagandha.png"
            alt="Hair Thickness Chart"
            width={300}
            height={200}
            unoptimized
          />
        </div>

        <p className="mt-4 text-sm italic text-white bg-[#54032d] py-1 px-2">
          Source: Effects of Withania somnifera root extract serum application Study published on ScienceDirect
        </p>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-[#54032d]">Holy Basil (Tulsi)</h3>
        <p className="max-w-2xl mx-auto">
          Another adaptogenic herb, Tulsi is known to <span className="font-semibold">regulate cortisol</span> and
          <span className="font-semibold"> reduce anxiety</span>. Its protein and fiber rich elements strengthen hair follicles and
          <span className="font-semibold"> improve scalp health</span>.
        </p>

        <h3 className="text-xl font-bold text-[#54032d] mt-6">False Daisy (Bhringraj)</h3>
        <p className="max-w-2xl mx-auto">
          Filled with the goodness of vitamins and minerals, Bhringraj is known to <span className="font-semibold">reduce hair thinning</span>. It helps increase
          hair density, lock in hair moisture, and maintain <span className="font-semibold">healthier, denser, moisturized hair</span>.
        </p>
      </div>
    </section>
  );
};

export default IngredientsComplexOne;
