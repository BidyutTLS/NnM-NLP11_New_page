import React from "react";
import Image from "next/image";

const ExpertRecommendationSection2 = () => {
  // replace this with your actual CDN link for Jennifer’s photo
  const jenniferImgUrl =
    "https://cdn05.zipify.com/-WkZiMy-Bs9UYbr7BqH-DT1PDUE=/fit-in/1940x0/43e60bbf7f614d76b6f1cefea38fcc5f/jennifer-photo.png";

  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-lg text-center">
      <h2 className="text-2xl md:text-2xl font-inter font-bold text-[#590632] max-w-4xl mx-auto">
        Ayurvedic Healthcare Practitioner Jennifer Maklan{" "}
        <span className="inline-block bg-[#ead27a] italic font-serif text-xl md:text-2xl px-2 mx-2">
          Recommends
        </span>
        Nail n Mane
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-6">
        <div className="flex flex-col items-center">
          <Image
            src={jenniferImgUrl}
            alt="Jennifer Maklan"
            width={150}
            height={150}
            className="rounded"
            priority
          />
          <div className="mt-2 text-[#1a1a1a]">
            <p className="font-bold text-lg">Jennifer Maklan</p>
            <p className="text-sm">Certified Ayurvedic Practitioner</p>
          </div>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-6">
        <div className="text-5xl text-[#590632] absolute left-0 -top-4">“</div>
        <p className="italic text-base md:text-lg text-gray-800 px-4 md:px-8">
          The power of Ayurvedic herbs is enhanced when combined together. Licorice, bringaraj,
          amla, ashwagandha, are incredible strengtheners for the bodily tissues, the offshoot of
          which are the hair and nails.
        </p>
        <div className="text-5xl text-[#590632] absolute right-0 -bottom-4">”</div>
      </div>

      <div className="mt-8">
        <button className="bg-[#590632] font-inter text-white px-6 py-3 rounded-lg font-semibold">
          I’m Eager to Try This Ayurvedic Practitioner Recommended Solution
        </button>
      </div>
    </section>
  );
};

export default ExpertRecommendationSection2;
