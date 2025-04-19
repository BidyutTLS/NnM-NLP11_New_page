import React from "react";
import Image from "next/image";

const HowToConsumeSection = () => {
  return (
    <section className="bg-[#f9f9f9] text-[#1a1a1a] px-4 py-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#54032d] mb-6">
        How to Consume?
      </h2>
      <div className="flex justify-center mb-6">
        <Image
          src="/how-to-consume.png"
          alt="How to Consume"
          width={600}
          height={350}
          className="rounded shadow-md"
        />
      </div>
      <div className="max-w-4xl mx-auto text-lg leading-relaxed">
        <p className="mb-4">
          Just take one <span className="bg-[#54032d] text-white px-1 font-bold">easy-to-swallow</span> tablet with your favorite beverage after a meal – it’s that SIMPLE!
        </p>
        <p className="mb-4">
          Unlike most hard-to-swallow pills with an unpleasant aftertaste, this <strong>easy-to-take pill has no aftertaste</strong>. It blends seamlessly into your daily routine, delivering a boost of botanicals for <strong>stronger, thicker and healthier hair</strong>—helping you <strong>feel rejuvenated and more confident than you’ve felt in years.</strong>
        </p>
        <p className="font-bold text-[#1a1a1a]">
          Feel like you’ve turned back the clock by 20 years.
        </p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold text-[#54032d] mb-4">
          Here’s a quick RECAP...
        </h3>
        <p className="text-lg mb-4">
          ...of what makes our hair supplement the ultimate recipe for reducing hair thinning and promoting healthy growth:
        </p>
        <ul className="text-left text-lg space-y-3">
          <li>
            ✅ <strong>CLINICALLY TESTED</strong> on 36 real women for real benefits on hair
          </li>
          <li>
            ✅ Perfect blend of <strong>AYURVEDIC HERBS</strong> and <strong>MODERN SCIENCE</strong> for optimal results
          </li>
          <li>
            ✅ <strong>TRUSTED</strong> by more than <strong>8000 women</strong> just like <strong>YOU</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowToConsumeSection;
