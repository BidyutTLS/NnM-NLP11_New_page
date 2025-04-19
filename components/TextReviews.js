import React from "react";
import Image from "next/image";

const TextReviews = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-[#54032d] mb-10">
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
            className="border border-[#54032d] p-6 bg-white relative"
          >
            <div className="text-[#ffb400] text-lg mb-2">★★★★★</div>
            <h3 className="italic font-semibold mb-4 text-lg text-[#54032d]">
              {review.title}
            </h3>
            <div className="text-[#54032d] text-4xl absolute left-2 top-2">“</div>
            <p className="text-gray-800 text-base italic leading-relaxed">
              {review.content}
            </p>
            <div className="text-[#54032d] text-4xl absolute right-2 bottom-2">”</div>
            <div className="mt-6 text-left">
              <p className="font-semibold text-sm">{review.name}</p>
              <p className="text-sm text-gray-600">{review.age}</p>
              <p className="text-sm italic text-[#1a1a1a] mt-1">
                <span className="inline-block align-middle">
                  <Image
                    src="/verified-icon.png"
                    alt="Verified"
                    width={16}
                    height={16}
                    className="inline-block mr-1"
                  />
                </span>
                Verified Consumer
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center gap-10 mt-12">
        {[
          {
            src: "/badge-30day.png",
            alt: "30 Day Guarantee",
          },
          {
            src: "/badge-freeshipping.png",
            alt: "Free Shipping",
          },
          {
            src: "/badge-clinical.png",
            alt: "Clinically Tested",
          },
        ].map((badge, index) => (
          <Image
            key={index}
            src={badge.src}
            alt={badge.alt}
            width={100}
            height={100}
          />
        ))}
      </div>
    </section>
  );
};

export default TextReviews;
