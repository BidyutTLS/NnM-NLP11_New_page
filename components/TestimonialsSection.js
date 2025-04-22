// components/TestimonialsSection.js

import Image from 'next/image';

const testimonials = [
  {
    name: "Lisa S.",
    age: 52,
    location: "🇺🇸",
    title: "This hair/nail supplement really brings results",
    text: `I used this supplement for 8 weeks, and it truly brought me nice results. I took it once a day, before bed, and it has no taste. My hair definitely feel/looks fuller especially on top and as for my nails, it is important to note that I had removed my press on nails and so they were a mess, and while I had growth, the damage has to grow completely out, before my nails are strong enough to not break off. I definitely recommend this supplement, it’s the first to really help.`,
    images: ["/images/lisa-before.jpg", "/images/lisa-after.jpg"],
  },
  {
    name: "Traci M.",
    age: 44,
    location: "🇺🇸",
    title: "Amazing Growth!",
    text: `My experience with this nail/hair supplement has exceeded my expectations! I have been a nail biter since childhood and my nails are the longest and strongest they have ever been! I have been taking this for 8 weeks and I can't believe the growth and so fast!! My hair has grown so much stronger at the scalp! You take this once a day with or without a meal. It has no taste or aftertaste and simple to swallow. Highly recommend!!`,
    images: ["/images/traci-before.jpg", "/images/traci-after.jpg"],
  },
  {
    name: "Elizabeth D.",
    age: 46,
    location: "🇺🇸",
    title: "Incredible results!",
    text: `This supplement works!! Wow. I have never experienced hair growth like I have since taking these supplements. I am so happy to finally have new hairs growing again. My nails also got stronger which was completely unexpected. My nails are incredibly thin and NEVER grow. After using these supplements, my nails had grown but the biggest improvement was how strong my nails had become. I have taken other supplements before but have never continued using them because they either leave a bad taste in my mouth or upset my stomach but I experienced none of that after taking these. I am honestly so impressed. These are a must have for me.`,
    images: ["/images/elizabeth-before.jpg", "/images/elizabeth-after.jpg"],
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f9f9f9] px-4 py-16 font-merriweather text-lg text-[#000000]">
      <div className="max-w-6xl mx-auto text-center">

        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl  text-[#590632] font-inter font-bold mb-2">
          <span className="bg-gold italic px-2 font-dmserif">8000+ Women</span>{' '}
          Have Already Tried Nail n Mane and Swear by it!
        </h2>
        <p className="text-lg text-[#1a1a1a] font-normal mt-1">Here’s what they’re saying…</p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg border border-gray-300 p-6 flex flex-col items-center text-left">
              
              {/* Stars */}
              <div className="text-gold text-lg mb-1">★★★★★</div>
              <h3 className="text-md font-bold  text-[#590632] italic mb-4 text-center">{t.title}</h3>

              {/* Images */}
              <div className="flex gap-2 mb-4">
                {t.images.map((src, i) => (
                  <Image
                    key={i}
                    src={src}
                    alt={`${t.name} image ${i + 1}`}
                    width={140}
                    height={140}
                    className="rounded"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-lg italic text-[#1a1a1a] mb-4">{t.text}</p>

              {/* Footer */}
              <div className="mt-auto w-full">
                <p className="font-bold">{t.name}</p>
                <p className="text-lg text-gray-700 mb-2">{t.age}, {t.location}</p>
                <div className="flex items-center gap-2 text-green-700 text-sm font-semibold">
                  ✅ <span className="italic text-[#5b0830]">Verified Consumer</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <button className="bg-[#590632] text-white px-8 py-3 rounded-lg text-lg font-inter font-bold shadow-md hover:opacity-90">
            Order NOW & Start Seeing results in Just 4 Weeks
          </button>
          <p className="mt-2 font-inter text-sm text-gray-700">30-Day Money-Back Guarantee | FREE Shipping</p>
        </div>
      </div>
    </section>
  );
}
