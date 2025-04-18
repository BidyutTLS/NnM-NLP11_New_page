// components/WhatIsAyurvedaSection.js

import Image from 'next/image';

export default function WhatIsAyurvedaSection() {
  return (
    <section className="bg-[#262700] text-white px-6 py-20 relative overflow-hidden">
      {/* Top graphic row */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <Image src="/images/hand-left.png" alt="Left hand" width={50} height={100} />
        <Image src="/images/herb1.png" alt="Herb 1" width={40} height={40} />
        <Image src="/images/flower.png" alt="Flower" width={60} height={60} />
        <Image src="/images/fruit1.png" alt="Fruit" width={40} height={40} />
        <Image src="/images/herb2.png" alt="Herb 2" width={50} height={50} />
        <Image src="/images/hand-right.png" alt="Right hand" width={50} height={100} />
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-2xl md:text-3xl font-dmserif font-bold">What is Ayurveda?</h2>
        <p className="font-merriweather text-lg leading-relaxed">
          It’s the <span className="text-yellow-500 font-semibold">“Science of Living”</span>,
          a holistic approach to overall health and well-being that has stood strong for many millennia.
        </p>

        <h2 className="text-2xl md:text-3xl font-dmserif font-bold">Why trust Ayurveda?</h2>
        <p className="font-merriweather text-lg leading-relaxed">
          Think of an ancient science that’s <span className="text-yellow-500 font-semibold">THRIVED FOR 5000 YEARS</span>. 
          When something lasts that long and continues to be 
          <span className="text-yellow-500 font-semibold"> TRUSTED BY MILLIONS OF PEOPLE</span>, 
          it’s a real testament to its quality and effectiveness.
        </p>

        <p className="font-merriweather text-lg">
          In simple words there must be something to it, right!
        </p>
      </div>

      {/* Bottom graphic row */}
      <div className="flex justify-center gap-4 mt-12 flex-wrap">
        <Image src="/images/hand-left.png" alt="Left hand" width={50} height={100} />
        <Image src="/images/herb1.png" alt="Herb 1" width={40} height={40} />
        <Image src="/images/flower.png" alt="Flower" width={60} height={60} />
        <Image src="/images/fruit1.png" alt="Fruit" width={40} height={40} />
        <Image src="/images/herb2.png" alt="Herb 2" width={50} height={50} />
        <Image src="/images/hand-right.png" alt="Right hand" width={50} height={100} />
      </div>
    </section>
  );
}
