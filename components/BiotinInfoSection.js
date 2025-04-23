// app/components/BiotinInfoSection.tsx
import Image from 'next/image';

export default function BiotinInfoSection() {
  return (
    <section className="bg-white px-4 py-12 text-center text-gray-800">
      <div className="max-w-4xl mx-auto">
        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-inter font-bold text-[#590632]">
          Understand why BIOTIN alone isn’t enough for your hair!
        </h2>

        {/* Biotin Molecule Image */}
        <div className="my-6">
          <Image
            src="https://cdn05.zipify.com/8Z_LdE2HOBWILyVGuxq-RmH8r9I=/fit-in/1940x0/25f2729ef3d44004b0a9de74f3459b59/biotin-structure.png"
            alt="Biotin Molecule Structure"
            width={240}
            height={100}
            unoptimized
            className="mx-auto"
          />
        </div>

        {/* Biotin Supplements Intro */}
        <p className="text-lg text-gray-700 leading-relaxed">
          Biotin supplements are everywhere, promising longer, stronger hair and nails.
          But <strong>here’s the truth</strong>: there’s limited scientific evidence supporting
          the benefits of biotin in people who are otherwise healthy.
        </p>

        {/* When is Biotin Beneficial */}
        <h3 className="mt-10 text-xl font-inter font-bold text-[#590632] uppercase">
          WHEN IS BIOTIN TRULY BENEFICIAL?
        </h3>
        <p className="mt-2 text-lg leading-relaxed">
          <strong>Biotin can be effective in cases of biotin deficiency, but research shows this deficiency is RARE.</strong>
          Most healthy adults in the U.S. get more than enough biotin from their diet—foods like eggs, nuts, and whole grains.
        </p>
        <p className="mt-2 text-lg leading-relaxed">
          So, while biotin can be useful for your hair growth in some cases, <strong>it won’t cut it in cases of hair fallout due to other factors.</strong>
        </p>

        {/* What Factors Affect Your Hair */}
        <h3 className="mt-10 text-xl font-inter font-bold text-[#590632] uppercase">
          WHAT FACTORS AFFECT YOUR HAIR?
        </h3>
        <p className="mt-2 text-lg leading-relaxed">
          Your hair’s health is influenced by more than just biotin levels. In fact, six root causes
          can kick in resulting in <strong>thin, weak, or dull hair:</strong>
        </p>

        {/* Root Causes Image */}
        <div className="my-6">
          <Image
            src="https://cdn05.zipify.com/LhqDXQAfGG5zhKFUXviRZD9qZyE=/fit-in/1940x0/278262c435ec47eb9ad7e8eb3d7f1c14/factors-for-hair-loss.png"
            alt="Root causes affecting hair: stress, aging, hormonal changes, nutrition, environment, lifestyle"
            width={640}
            height={300}
            unoptimized
            className="mx-auto"
          />
        </div>

        {/* Why Biotin Can't Do It Alone */}
        <h3 className="mt-10 text-xl font-inter font-bold text-[#590632] uppercase">
          WHY BIOTIN CAN’T DO IT ALONE
        </h3>
        <p className="mt-2 text-lg leading-relaxed">
          Because hair health depends on more than one micronutrient and also on adaptogens, antioxidants,
          collagen support, and more—exactly what Nail n Mane provides in one 10‑second‑a‑day capsule.
        </p>
      </div>
    </section>
  );
}
