import React from "react";
import Image from "next/image";

const badges = [
  {
    src: "https://cdn05.zipify.com/lIpjZYeFUFGmdMDJpeCJgEdI408=/fit-in/1940x0/3849c6c0a98747b698d3bf5b9225f748/clinically-tested.png",
    alt: "Clinically Tested",
  },
  {
    src: "https://cdn05.zipify.com/JXGW5pXObm_2p5J-bFI0HQ-6rlU=/fit-in/1940x0/765b327df86f4d2eb7d92dedf14ab7d8/gmp.png",
    alt: "GMP Facility",
  },
  {
    src: "https://cdn05.zipify.com/PnOHCjgIVvIx4Ps4c50PHN98k0Q=/fit-in/1940x0/182e350bf1cd47e48e3592bea96aa60e/heavy-metal-tested.png",
    alt: "Heavy Metal Tested",
  },
  {
    src: "https://cdn05.zipify.com/b85XhG8jSC44LNnM8VNOt3CPi1g=/fit-in/1940x0/751fcea4deca42f8a1c39cca7bcf716a/pesticide-testing.png",
    alt: "Pesticide Tested",
  },
  {
    src: "https://cdn05.zipify.com/pA-vCRVg09fu-VG0sKQBXAVtiVE=/fit-in/1940x0/c82c482697e74f49a562ef39d32350e0/third-party-testing.png",
    alt: "3rd Party Tested",
  },
  {
    src: "https://cdn05.zipify.com/Pz49G5VkxRtAD1G099nxNoNLU8E=/fit-in/1940x0/97bd837499fa4114b77004dd7107c968/us-fda-registered-facility.png",
    alt: "US FDA Registered",
  },
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
            unoptimized
          />
        ))}
      </div>
    </section>
  );
};

export default SafetyQualitySection;
