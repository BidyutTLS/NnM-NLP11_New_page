// components/WhatIsAyurvedaSection.js

import Image from 'next/image';

export default function WhatIsAyurvedaSection() {
  return (
    <section className="bg-[#262700] text-white px-6 py-20 relative overflow-hidden">
      {/* Top Illustration */}
      <div className="flex justify-center mb-10">
        <Image
          src="https://cdn05.zipify.com/qbV52tJHxmRz_T_ibni9kvcEUyE=/fit-in/1940x0/b7f1de2b49fa4f2ba24465341f1ddbc0/upper-illustration-for-ayurveda-section.png"
          alt="Top Ayurveda Illustration"
          width={600}
          height={100}
          unoptimized
        />
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

      {/* Bottom Illustration */}
      <div className="flex justify-center mt-12">
        <Image
          src="https://cdn05.zipify.com/uerDOXaA8zgwjtlFfyeha1YXRd4=/fit-in/1940x0/32bab5acda894cf2a374eaccd7c1942d/illustration-for-ayurveda-section.png"
          alt="Bottom Ayurveda Illustration"
          width={600}
          height={100}
          unoptimized
        />
      </div>
    </section>
  );
}
