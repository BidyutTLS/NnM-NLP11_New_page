import React from "react";
import Image from "next/image";

const TextReviews = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-lg text-center">
      <h2 className="text-2xl md:text-3xl font-inter font-bold text-[#590632] mb-10">
        Real Women, Remarkable Results
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {[
          {
            name: "Susan R.",
            age: "69, us",
            title: "Better Results than Anything I’ve Tried!!!",
            content:
              "I used this product once before and got good results! For some reason I tried other products and it proved to me how well this formula works for me on my nails, skin and hair! I came back to it and will definitely be using only this amazing supplement for now on!!! Love it!!! 😍",
          },
          {
            name: "donna h.",
            age: "78, us",
            title: "I love this!",
            content:
              "I bought this after using a very expensive product with zero results and within a few short weeks my hair stopped falling out and started looking healthier. The new growth is taking awhile but is definitely coming and it is beyond relief to me. I know it sounds like it can’t be true but I promise it is",
          },
          {
            name: "Karin G.",
            age: "60, us",
            title: "New baby hair!",
            content:
              "Great! I’ve been using this for about a month, this morning I just noticed new baby hairs around my hair line!!!! I like that you only have to take one capsule a day not 3 like the other brand I used to take. I’m going to keep taking these!!!",
          },
          {
            name: "Theresa A.",
            age: "69, us",
            title: "Awesome!",
            content:
              "Been usong for about 90 days. Great results. Hair is thicker with more texture. Not as much hair loss. I am thrilled woth results as usual with these products. I have never been disappointed.",
          },
        ].map((review, index) => (
          <div
            key={index}
            className="border border-[#590632] p-6 bg-white relative"
          >
            <div className="text-[#ffb400] text-lg mb-2">★★★★★</div>
            <h3 className="italic font-semibold mb-4 text-lg text-[#590632]">
              {review.title}
            </h3>
            <div className="text-[#590632] text-4xl absolute left-2 top-2">“</div>
            <p className="text-gray-800 text-lg italic leading-relaxed">
              {review.content}
            </p>
            <div className="text-[#590632] text-4xl absolute right-2 bottom-2">”</div>
            <div className="mt-6 text-left">
              <p className="font-semibold text-sm">{review.name}</p>
              <p className="text-sm text-gray-600">{review.age}</p>
              <p className="text-sm italic text-[#1a1a1a] mt-1">
                ✅ <span className="text-[#5b0830]">Verified Consumer</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-10 mt-12">
        {[
          {
            src: "https://cdn05.zipify.com/vqRaT6FhpEnoC_KqfyyydXOygu4=/fit-in/1940x0/64de9cb2626f42d6b8234d7a2d50359a/30-days-money-back-gaurantee.png",
            alt: "30 Day Guarantee",
          },
          {
            src: "https://cdn05.zipify.com/1-dypAIcn8ejHLp0az3lpfDrXZM=/fit-in/1940x0/9fbd14abb9434d4da1d60c6448c098ab/free-shipping.png",
            alt: "Free Shipping",
          },
          {
            src: "https://cdn05.zipify.com/NfVDyYpTX6rY6pv72uFxsWwSU2s=/0x17:262x282/fit-in/1940x0/b5567416bd95423dbaa932984119d582/clinically-tested.png",
            alt: "Clinically Tested",
          },
        ].map((badge, index) => (
          <Image
            key={index}
            src={badge.src}
            alt={badge.alt}
            width={100}
            height={100}
            unoptimized
          />
        ))}
      </div>
    </section>
  );
};

export default TextReviews;
