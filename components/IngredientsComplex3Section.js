import React from "react";
import Image from "next/image";

const IngredientsComplex3Section = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-center">
      {/* Top Highlight Banner */}
      <div className="bg-[#54032d] text-white text-base py-2 px-4 max-w-5xl mx-auto">
        Amla, Biotin and Zinc to promote growth and volume.
      </div>

      {/* Ingredient Visual */}
      <div className="mt-6">
        <Image
          src="https://cdn05.zipify.com/o2CwxdUleGTrQw744ET1GlntnxE=/fit-in/1940x0/c197c811151941ad976ec93f5e2e9227/amla-biotin-zinc.png"
          alt="Amla, Biotin and Zinc"
          width={600}
          height={300}
          className="mx-auto"
          unoptimized
        />
      </div>

      {/* Amla Section */}
      <div className="mt-8 max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-[#54032d]">Amla (Indian Gooseberry)</h3>
        <p className="text-base md:text-lg text-gray-800 mt-2">
          This Vitamin C-rich berry is packed with antioxidants. It <strong>improves circulation</strong>, supports{" "}
          <strong>natural collagen production</strong>, and helps <strong>strengthen hair from the roots</strong>. Amla also supports healthy scalp conditions and stimulates follicles.
        </p>
      </div>

      {/* Biotin Section */}
      <div className="mt-10 max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-[#54032d]">Biotin (Vitamin B7)</h3>
        <p className="text-base md:text-lg text-gray-800 mt-2">
          A vital nutrient for keratin production — the protein that makes up your hair and nails. Biotin supplementation helps{" "}
          <strong>increase hair thickness</strong>, <strong>reduce breakage</strong>, and{" "}
          <strong>improve nail strength</strong>. Nail n Mane provides a generous dose of biotin for maximum results.
        </p>
      </div>

      {/* Zinc Section */}
      <div className="mt-10 max-w-3xl mx-auto">
        <h3 className="text-xl md:text-2xl font-bold text-[#54032d]">Zinc</h3>
        <p className="text-base md:text-lg text-gray-800 mt-2">
          Zinc is essential for tissue repair and cellular function. A zinc deficiency can result in{" "}
          <strong>weakened hair shafts</strong>, <strong>brittle nails</strong>, and{" "}
          <strong>slower regrowth</strong>. This mineral ensures your follicles stay active and strong.
        </p>
      </div>
    </section>
  );
};

export default IngredientsComplex3Section;
