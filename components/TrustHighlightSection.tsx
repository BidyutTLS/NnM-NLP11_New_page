import React from 'react';
import Image from 'next/image';

const TrustHighlightSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-10 px-4">
      <div className="max-w-5xl mx-auto border border-[#4f002b] p-6 md:p-10 text-center">
        {/* Combined Magazine + Inside Spread Image */}
        <div className="flex justify-center mb-6">
          <Image
            src="https://cdn05.zipify.com/IqHZ5PTGoTgMU3iRM8TlI52BTGg=/fit-in/1940x0/804c06a15ec04168ad805303cc079449/np-feature.jpeg"
            alt="Nail n Mane featured in Natural Practitioner Magazine"
            width={500}
            height={300}
            className="rounded-md"
            unoptimized
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-inter font-semibold text-[#4f002b] mb-4">
          Why Trust <span className="font-bold">Nail n Mane</span>?
        </h2>

        {/* Description */}
        <p className="text-lg text-[#1d1d1d] max-w-3xl mx-auto leading-relaxed">
          Our rigorous testing and commitment to quality have earned <strong>Nail n Mane</strong> a spotlight feature in the
          September 2024 issue of{' '}
          <span className="bg-[#4f002b] text-white px-1 font-inter font-bold">
            NATIONAL PRACTITIONER MAGAZINE
          </span>{' '}
          – the premier medical publication for Natural Health Practitioners across the country and{' '}
          <span className="bg-[#4f002b] text-white px-1 font-inter font-bold">
            trusted by 15000+ Practitioners.
          </span>
        </p>
      </div>
    </section>
  );
};

export default TrustHighlightSection;
