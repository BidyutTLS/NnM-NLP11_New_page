import React from "react";
import Image from "next/image";

const IngredientsComplex2Section = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-center">
      {/* Banner Text */}
      <div className="bg-[#54032d] text-white text-base py-2 px-4 max-w-5xl mx-auto">
        Linseed, Vitamin C, and D to restore shine and strength.
      </div>

      {/* Image and Flaxseed Heading */}
      <div className="mt-6">
        <Image
          src="https://cdn05.zipify.com/CVBX6Tx3TV8kItD6pA3Sr5aKC7w=/fit-in/1940x0/e68a8eb9e59c4034bca02a9b4762bd4b/flax-seeds-vitc-vitd.png"
          alt="Linseed, Vitamin C, and D"
          width={600}
          height={300}
          className="mx-auto"
          unoptimized
        />
        <h3 className="text-xl md:text-2xl font-bold text-[#54032d] mt-4">
          Flaxseeds (Linseed)
        </h3>
        <p className="max-w-3xl mx-auto mt-2 text-base md:text-lg text-gray-800">
          As a natural source of <span className="font-bold">omega-3 fatty acids</span>, it{" "}
          <span className="font-bold">strengthens hair</span> from within. It helps{" "}
          <span className="font-bold">smoothen hair</span>,{" "}
          <span className="font-bold">restore damaged hair</span>,{" "}
          <span className="font-bold">moisturize</span> and hydrate scalp skin.
        </p>
      </div>

      {/* Study Section */}
      <div className="border-2 border-[#54032d] mt-8 max-w-5xl mx-auto p-4 text-left">
        <p className="text-base md:text-lg text-gray-800">
          A 12-week, randomized, double-blind study on healthy women ingested with flaxseed oil
          showed a significant <span className="font-bold">decrease in skin sensitivity</span>,{" "}
          <span className="font-bold">trans epidermal water loss</span>,{" "}
          <span className="font-bold">skin roughness and scaling</span>, with an{" "}
          <span className="font-bold">increase in skin hydration and smoothness</span>.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
          <Image
            src="https://cdn05.zipify.com/rnTUGn0yBWlxMiHdZu7rl6P2xfw=/fit-in/1940x0/170f1655d4ce4ef295180573058aeb99/skin-sensitivity-flaxseeds.png"
            alt="Flaxseed Study Graph 1"
            width={400}
            height={300}
            unoptimized
          />
          <Image
            src="https://cdn05.zipify.com/4Mz_KvjeNW5MifGcjvjoreoyWMI=/fit-in/1940x0/f2900a8e18d3424fbfca1146473a73f8/skin-hydration-flaxseed.png"
            alt="Flaxseed Study Graph 2"
            width={400}
            height={300}
            unoptimized
          />
        </div>

        <p className="text-sm italic text-white bg-[#54032d] px-4 py-1 mt-4">
          Source: A Study<sup>[3]</sup> published on MDPI Journal
        </p>
      </div>

      {/* Vitamin C */}
      <div className="mt-10">
        <h3 className="text-xl md:text-2xl font-bold text-[#54032d]">Vitamin C</h3>
        <p className="max-w-3xl mx-auto mt-2 text-base md:text-lg text-gray-800">
          Vitamin C is a vital source of <span className="font-bold">collagen</span>— a key protein
          that supports the <span className="font-bold">structure of your hair and nails</span>. It
          helps maintain healthy structure while <span className="font-bold">adding strength</span>{" "}
          and <span className="font-bold">shine</span> to your hair.
        </p>
      </div>

      {/* Vitamin D */}
      <div className="mt-10">
        <h3 className="text-xl md:text-2xl font-bold text-[#54032d]">Vitamin D</h3>
        <p className="max-w-3xl mx-auto mt-2 text-base md:text-lg text-gray-800">
          Vitamin D plays a crucial role in maintaining optimal calcium levels — essential for{" "}
          <span className="font-bold">strong, healthy hair</span>. Its deficiency can cause hair
          breakage, making Vitamin D important for your{" "}
          <span className="font-bold">hair strength</span>.
        </p>
      </div>
    </section>
  );
};

export default IngredientsComplex2Section;
