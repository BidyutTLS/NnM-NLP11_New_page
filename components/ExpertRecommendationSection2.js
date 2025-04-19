import React from "react";
import Image from "next/image";

const ExpertRecommendationSection2 = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-center">
      <h2 className="text-2xl md:text-4xl font-bold text-[#54032d] max-w-4xl mx-auto">
        Ayurvedic Healthcare Practitioner Jennifer Maklan <br className="block md:hidden" />
        <span className="inline-block bg-[#ead27a] italic font-serif text-xl md:text-2xl px-2 mx-2">
          Recommends
        </span>
        Nail n Mane
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
        <div className="flex flex-col items-center">
          <Image
            src="/expert-jennifer.png"
            alt="Jennifer Maklan"
            width={150}
            height={150}
            className="rounded"
          />
          <div className="mt-2 text-[#1a1a1a]">
            <p className="font-bold text-lg">Jennifer Maklan</p>
            <p className="text-sm">Certified Ayurvedic Practitioner</p>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-6">
        <div className="text-5xl text-[#54032d] absolute left-0 -top-4">“</div>
        <p className="italic text-base md:text-lg text-gray-800 px-4">
          The power of Ayurvedic herbs is enhanced when combined together. Licorice, bringaraj, amla,
          ashwagandha, are incredible strengtheners for the bodily tissues, the offshoot of which are
          the hair and nails.
        </p>
        <div className="text-5xl text-[#54032d] absolute right-0 -bottom-4">”</div>
      </div>

      <div className="mt-8">
        <button className="bg-[#54032d] text-white px-6 py-3 rounded-full font-semibold">
          I’m Eager to Try This Ayurvedic Practitioner Recommended Solution
        </button>
      </div>
    </section>
  );
};

export default ExpertRecommendationSection2;
