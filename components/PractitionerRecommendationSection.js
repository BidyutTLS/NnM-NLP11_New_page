// components/PractitionerRecommendationSection.js

import Image from 'next/image';

export default function PractitionerRecommendationSection() {
  return (
    <section className="bg-[#f9f9f9] text-[#5b0830] px-4 py-16 font-merriweather">
      <div className="max-w-5xl mx-auto text-center">

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold">
          Nail n Mane is{' '}
          <span className="bg-yellow-400 italic px-2 font-dmserif">Recommended</span>{' '}
          by Natural Health Practitioners
        </h2>

        {/* Practitioner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-12 justify-items-center">
          {/* Practitioner 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/shanel-miller.png" // Replace with your image
              alt="Shanel Miller"
              width={160}
              height={200}
              className="rounded-md"
            />
            <div className="bg-black text-yellow-400 text-center mt-4 py-2 px-4 w-full font-bold text-sm leading-tight border border-yellow-500">
              SHANEL MILLER<br />
              <span className="block font-normal text-white">CERTIFIED AYURVEDIC PRACTITIONER</span>
            </div>
          </div>

          {/* Practitioner 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/jennifer-maklan.png" // Replace with your image
              alt="Jennifer Maklan"
              width={160}
              height={200}
              className="rounded-md"
            />
            <div className="bg-black text-yellow-400 text-center mt-4 py-2 px-4 w-full font-bold text-sm leading-tight border border-yellow-500">
              JENNIFER MAKLAN<br />
              <span className="block font-normal text-white">CERTIFIED AYURVEDIC PRACTITIONER</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
