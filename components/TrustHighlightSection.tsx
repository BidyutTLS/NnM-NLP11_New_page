import React from 'react';

const TrustHighlightSection = () => {
  return (
    <section className="bg-[#f7f7f7] py-10 px-4">
      <div className="max-w-5xl mx-auto border border-[#4f002b] p-6 md:p-10 text-center">
        {/* Magazine and Inside Issue images */}
        <div className="flex flex-col md:flex-row items-center justify-center mb-6 gap-6">
          <img
            src="/images/natural-practitioner-magazine.png"
            alt="Natural Practitioner Magazine Cover"
            className="w-44 md:w-60"
          />
          <img
            src="/images/nailnmane-inside-issue.png"
            alt="Nail n Mane Inside Issue"
            className="w-52 md:w-72"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-[#4f002b] mb-4">
          Why Trust <span className="font-bold">Nail n Mane</span>?
        </h2>

        {/* Description */}
        <p className="text-lg text-[#1d1d1d] max-w-3xl mx-auto leading-relaxed">
          Our rigorous testing and commitment to quality have earned <strong>Nail n Mane</strong> a spotlight feature in the
          September 2024 issue of{' '}
          <span className="bg-[#4f002b] text-white px-1 font-bold">
            NATIONAL PRACTITIONER MAGAZINE
          </span>{' '}
          – the premier medical publication for Natural Health Practitioners across the country and{' '}
          <span className="bg-[#4f002b] text-white px-1 font-bold">
            trusted by 15000+ Practitioners.
          </span>
        </p>
      </div>
    </section>
  );
};

export default TrustHighlightSection;
