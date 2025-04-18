// components/NailNManeProductSection.js

import Image from 'next/image';

export default function NailNManeProductSection() {
  return (
    <section className="bg-[#5b0830] text-white px-4 py-20 font-merriweather">
      <div className="max-w-4xl mx-auto text-center space-y-6">

        {/* Title and Image */}
        <p className="text-white text-base">We call it</p>
        <h2 className="text-3xl font-bold font-dmserif">Nail n Mane</h2>
        <p className="italic text-yellow-400 font-dmserif text-lg">built using Natural Actives</p>

        <div className="flex justify-center mt-6">
          <Image
            src="/images/nailnmane-bottles.png" // Replace with your actual path
            alt="Nail n Mane Bottles"
            width={400}
            height={300}
            className="rounded-md"
          />
        </div>

        {/* Benefit Copy */}
        <p className="text-lg">
          This isn’t just any random product... it’s proven to deliver results
          <span className="bg-yellow-400 text-[#4b2d0d] px-2 ml-2 font-bold">FOR REAL:</span>
        </p>

        <ul className="text-left text-lg space-y-2 mt-4 max-w-xl mx-auto">
          <li className="text-yellow-300">✓ Improved scalp health with stronger and longer hair</li>
          <li className="text-yellow-300">✓ Reduced hair thinning, shedding, and breakage</li>
          <li className="text-yellow-300">✓ Thicker, shinier, and healthier hair</li>
        </ul>

        <div className="w-full border-t border-white my-8">
          <div className="text-white text-xl mt-[-16px] mb-8">✦</div>
        </div>

        {/* Bonus Benefits + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left text-white">

          <div>
            <h3 className="font-bold text-lg">BONUS BENEFITS:</h3>
            <ul className="mt-3 space-y-2">
              <li>✓ 2X longer nails</li>
              <li>✓ Naturally smoother, healthier, and brighter nails</li>
            </ul>
          </div>

          <div className="text-right md:text-left">
            <p className="uppercase text-sm font-bold">
              Start seeing visible results in as little as
            </p>
            <p className="text-yellow-400 text-2xl font-extrabold mt-1">4-12 weeks!</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <button className="bg-yellow-400 text-[#4b2d0d] font-bold py-3 px-6 rounded-lg">
            Treat Yourself to Healthier Hair. Order NOW
          </button>
          <p className="text-sm mt-2">30-Day Money-Back Guarantee | FREE Shipping</p>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center text-sm">
          <div className="flex flex-col items-center">
            <Image src="/icons/no-binders.png" alt="No Binders" width={60} height={60} />
            <p className="mt-2">No Binders</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/no-preservatives.png" alt="No Preservatives" width={60} height={60} />
            <p className="mt-2">No Preservatives</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/non-gmo.png" alt="Non-GMO" width={60} height={60} />
            <p className="mt-2">NON-GMO</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/icons/gluten-free.png" alt="Gluten Free" width={60} height={60} />
            <p className="mt-2">Gluten Free</p>
          </div>
        </div>
      </div>
    </section>
  );
}
