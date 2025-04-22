import Image from 'next/image';

export default function PractitionerRecommendationSection() {
  return (
    <section className="bg-[#f9f9f9] text-[#5b0830] px-4 py-16 font-merriweather">
      <div className="max-w-5xl mx-auto text-center">

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold">
          Nail n Mane is{' '}
          <span className="bg-gold italic px-2 font-dmserif">Recommended</span>{' '}
          by Natural Health Practitioners
        </h2>

        {/* Practitioner Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 mt-12 justify-items-center">

          {/* Practitioner 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn05.zipify.com/aT9Gs1jnmBTtS9pt4L6C0FRJld8=/fit-in/1940x0/3cd02bf12f4c4f22a11ce8cd79f61781/shanel-photo.png"
              alt="Shanel Miller"
              width={160}
              height={200}
              className="rounded-md"
              unoptimized
            />
            <div className="bg-black text-gold text-center mt-0 py-2 px-4 w-full font-inter font-bold text-sm leading-tight border border-gold">
              <span className=" font-inter"> SHANEL MILLER </span> <br />
              <span className="block font-normal text-white">CERTIFIED AYURVEDIC PRACTITIONER</span>
            </div>
          </div>

          {/* Practitioner 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn05.zipify.com/-WkZiMy-Bs9UYbr7BqH-DT1PDUE=/fit-in/1940x0/43e60bbf7f614d76b6f1cefea38fcc5f/jennifer-photo.png"
              alt="Jennifer Maklan"
              width={160}
              height={200}
              className="rounded-md"
              unoptimized
            />
            <div className="bg-black text-gold text-center mt-0 py-2 px-4 w-full font-bold text-sm leading-tight border border-gold">
              <span className=" font-inter"> JENNIFER MAKLAN </span> <br />
              <span className="block font-normal text-white">CERTIFIED AYURVEDIC PRACTITIONER</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
