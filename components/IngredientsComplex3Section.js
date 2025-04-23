import React from "react";
import Image from "next/image";

const IngredientsComplex2Section = () => {
  return (
    <section className="bg-[#f7f7f7] text-[#1a1a1a] text-lg px-4 py-12 text-center font-merriweather">
      <div className="bg-[#590632] text-white font-semibold py-2 px-4 max-w-4xl mx-auto">
        Amla, Biotin and Zinc to promote growth and volume.
      </div>

      <div className="max-w-3xl mx-auto mt-6">
        <Image
          src="https://cdn05.zipify.com/o2CwxdUleGTrQw744ET1GlntnxE=/fit-in/1940x0/c197c811151941ad976ec93f5e2e9227/amla-biotin-zinc.png"
          alt="Amla, Biotin and Zinc"
          width={400}
          height={200}
          className="mx-auto"
          unoptimized
        />

        <h3 className="text-xl md:text-2xl text-[#590632] font-inter font-bold mt-6">
          Indian Goose Berry (Amla Berry)
        </h3>
        <p className="text-base md:text-lg mt-2">
          Rich in Vitamin C, Amla <strong>boosts blood circulation in the scalp</strong>. Its pro-collagen properties <strong>support scalp health, promoting healthy hair growth</strong>.
        </p>

        <div className="mt-6 border border-[#590632] text-left p-4">
          <p>
            A research study on varying concentrations of Emblica (Indian Goose Berry) extract showed <strong>significant increases in tensile strength</strong> for hair, proving Emblica nourishes the hair.
          </p>
          <Image
            src="https://cdn05.zipify.com/rnTUGn0yBWlxMiHdZu7rl6P2xfw=/fit-in/1940x0/170f1655d4ce4ef295180573058aeb99/skin-sensitivity-flaxseeds.png"
            alt="Emblica extract tensile strength graph"
            width={300}
            height={200}
            className="mx-auto my-4"
            unoptimized
          />
          <p className="text-sm italic text-white bg-[#54032d] px-4 py-1 mt-4">
            Source: A Study<sup>[3]</sup> published on MDPI Journal
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto mt-10">
        <h3 className="text-xl md:text-2xl text-[#590632] font-inter font-bold">Biotin</h3>
        <p className="text-base md:text-lg mt-2">
          High-strength biotin is known to improve keratin levels – the building blocks of hair and nails. It <strong>nourishes the hair</strong> from within and helps <strong>promote hair growth and strength</strong>.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-10">
        <h3 className="text-xl md:text-2xl text-[#590632] font-inter font-bold">Zinc</h3>
        <p className="text-base md:text-lg mt-2">
          Zinc is a multi-benefit ingredient known to <strong>promote hair growth</strong> and <strong>follicle health</strong>. Since it’s not naturally present in your body, it is important to take it in supplement form.
        </p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 text-lg">
        <p>
          These ingredients work together in harmony to pass on therapeutic benefits, helping your hair become
          <span className="bg-gold font-bold text-[#590632] px-1 mx-1">stronger, thicker, and healthier in 4-12 weeks!</span>
        </p>
        <p className="mt-4 ">
          This transformative journey goes beyond just daily hair fall -- <span className="font-semibold"> it’s your path to regaining your hair, confidence, and femininity</span>.
        </p>
        <p className="mt-6">Begin your transformative journey now!</p>

        <div className="mt-6">
          <button className="bg-[#590632] text-white font-inter font-bold px-6 py-3 rounded-lg">
            Start My Order
          </button>
          <p className="text-sm mt-2">
            30-Day Money-Back Guarantee | Free-Shipping | 100% Drug-Free
          </p>
        </div>
      </div>

      <div className="border border-[#590632] text-sm text-left p-4 mt-10 max-w-4xl mx-auto">
        <h4 className="text-center font-bold text-[#590632] mb-2">
          COMPLETE LIST OF INGREDIENTS:
        </h4>
        <p>
          Bhringraj (Eclipta alba) WP Extract, Amla (Emblica Officinalis) Fruit Extract, Phyllanthus Fraternus WP Extract,
          Linseed (Linum usitatissimum) Seed Extract, Tulsi (Ocimum Sanctum) Leaf Extract, Licorice (Glycyrrhiza Glabra)
          Stem Extract, Ashwagandha (Withania Somnifera) Root Extract, Biotin, Vitamin C, Vitamin E, Zinc, Vitamin D
        </p>
      </div>
    </section>
  );
};

export default IngredientsComplex2Section;
