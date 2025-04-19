import React from "react";
import Image from "next/image";

const badges = [
  { src: "/clinically-tested.png", alt: "Clinically Tested" },
  { src: "/gmp-certified.png", alt: "GMP Facility" },
  { src: "/heavy-metal-tested.png", alt: "Heavy Metal Tested" },
  { src: "/pesticide-tested.png", alt: "Pesticide Tested" },
  { src: "/third-party-tested.png", alt: "3rd Party Tested" },
  { src: "/us-fda.png", alt: "US FDA Registered" },
];

const SafetyQualitySection = () => {
  return (
    <section className="bg-[#fafafa] text-[#1f1f1f] px-6 py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-[#54032d] mb-4">
        Safety and Quality Assurance
      </h2>
      <p className="max-w-4xl mx-auto text-[18px] leading-relaxed">
        Ever wonder why so many hair supplements promise miracles but deliver little? The shocking truth is that most products on the market aren’t <strong>SCIENTIFICALLY TESTED</strong> to prove their effectiveness—or even their safety.
      </p>
      <p className="max-w-4xl mx-auto text-[18px] leading-relaxed mt-4">
        Our product stands apart — it's <strong>CLINICALLY TESTED</strong> for real results on real women. Manufactured in a <strong>US-FDA</strong>-registered facility, it adheres to <strong>GMP</strong> regulations and undergoes a stringent 10-step <strong>testing process where we test for heavy metals, pesticides, aflatoxins and GMOs!</strong>
      </p>
      <p className="max-w-4xl mx-auto text-[18px] leading-relaxed mt-4">
        You can trust that you’re getting ONLY <strong>high quality</strong> and <strong>safe supplements.</strong>
      </p>

      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center max-w-5xl mx-auto">
        {badges.map((badge, index) => (
          <Image
            key={index}
            src={badge.src}
            alt={badge.alt}
            width={100}
            height={100}
            className="w-[90px] h-auto"
          />
        ))}
      </div>
    </section>
  );
};

export default SafetyQualitySection;
