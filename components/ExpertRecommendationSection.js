import React from "react";
import Image from "next/image";

const ExpertRecommendationSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-inter font-bold text-[#54032d] max-w-4xl mx-auto">
        Ayurvedic Healthcare Practitioner Shanel Miller
        <span className="bg-[#e2b857] italic font-dmserif ml-2 mr-1">
          Recommends
        </span>
        Nail n Mane
      </h2>

      <div className="flex flex-col items-center justify-center mt-6">
        <Image
          src="https://cdn05.zipify.com/aT9Gs1jnmBTtS9pt4L6C0FRJld8=/fit-in/1940x0/3cd02bf12f4c4f22a11ce8cd79f61781/shanel-photo.png"
          alt="Shanel Miller"
          width={160}
          height={160}
          className="rounded-md"
        />
        <div className="mt-2">
          <p className="font-bold text-lg text-[#1d1d1d]">Shanel Miller</p>
          <p className="text-sm text-gray-600">Certified Ayurvedic Practitioner</p>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto mt-8">
        <span className="absolute -left-4 top-0 text-5xl text-[#54032d] font-serif">“</span>
            
         <div className="flex justify-center mt-6 text-yellow-500 text-2xl">
            {Array(5)
              .fill("★")
              .map((star, i) => (
                <span key={i}>{star}</span>
              ))}
          </div>
  
        <div className="text-left text-base md:text-lg italic text-gray-800 px-4 md:px-8">
          <p>
            In my clinical Ayurvedic practice, I’ve seen how appearance impacts well-being and
            confidence. Many of my clients struggle with <span className="font-bold italic">thinning hair</span>,
            and cases like these need a therapeutic blend of Ayurvedic herbs and nutrients. That’s why
            I <span className="font-bold italic">strongly recommend Nail n Mane</span>, which brings together
            these key nutrients for <span className="font-bold italic">healthier</span> and
            <span className="font-bold italic"> stronger hair</span>. My clients have experienced
            <span className="font-bold italic"> remarkable results, renewed confidence</span>, and
            <span className="font-bold italic"> a better quality of life</span>.
          </p>
        </div>

        <span className="absolute -right-4 bottom-0 text-5xl text-[#54032d] font-serif">”</span>
      </div>

     
    </section>
  );
};

export default ExpertRecommendationSection;
