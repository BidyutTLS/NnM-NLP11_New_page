import React from "react";

const faqs = [
  {
    question: "When can I experience the results of Nail n Mane?",
    answer:
      "In a 12-week clinical study of Nail n Mane, participants started seeing results in just 4 weeks. However, since everybody responds differently, individual results may vary. To experience the full potential, we recommend trying our pack of 3 bottles – which allows you to experience the best results."
  },
  {
    question: "What are the benefits for hair?",
    answer: (
      <ul className="list-disc list-inside">
        <li>58.5% reduction in hair fall</li>
        <li>46.5% stronger hair</li>
        <li>Stronger roots and healthy follicles</li>
        <li>46.3% thicker hair</li>
        <li>46.7% increased hair growth rate</li>
        <li>Improved hair density and new hair growth</li>
        <li>36.2% more coverage</li>
        <li>Longer hair in just 4 weeks</li>
        <li>Promoted existing hair growth and new baby hair</li>
        <li>Reduced hair breakage, shedding and hair loss</li>
        <li>39.8% shinier hair and 40.3% smoother hair</li>
        <li>Enhanced overall scalp health</li>
      </ul>
    )
  },
  {
    question: "Does this supplement benefit nails?",
    answer: (
      <ul className="list-disc list-inside">
        <li>2X longer nails</li>
        <li>32.2% improvement in nail moisture</li>
        <li>Works on brittle and cracked nails</li>
        <li>Visibly reduces vertical ridges</li>
        <li>27.9% reduction in nail paleness</li>
        <li>Brighter, smoother, pinkish nails</li>
      </ul>
    )
  },
  {
    question: "What is the size of the pill?",
    answer: (
      <div className="flex flex-col gap-4 md:gap-6">
        <p className="text-left text-lg">
          We use a size 0 capsule for Nail n Mane. It is 0.85 inches which is just slightly longer than the US penny.
        </p>
      <div className="items-center">
        <img
          src="/images/pill-vs-penny.jpg" 
          alt="Size comparison between pill and US penny"
          className="max-w-xs w-full"
        />
      </div>
      </div>
    )
  },
  {
    question: "What is the recommended usage?",
    answer: "It is recommended to take just ONE pill per day for 12 weeks."
  },
  {
    question: "What are the ingredients?",
    answer:
      "It contains a mix of 7 ayurvedic herbs namely Ashwagandha, Tulsi, Amla, Phyllanthus Fraternus, Bhringraj, Linseed, and Licorice. Plus, it contains biotin and essential vitamins and minerals (vitamins C, D, E & Zinc)."
  },
  {
    question: "Will Nail n Mane work on my hair type?",
    answer: "Yes, Nail n Mane is formulated to work on all hair types."
  },
  {
    question: "Will hair grow on my face and other parts of my body?",
    answer:
      "No. Facial and body hair grow due to different factors than the hair on your head."
  },
  {
    question: "Are there any side effects?",
    answer:
      "Our hair supplement went through rigorous clinical testing and safety study, in which participants reported no side effects. However, it is advised to read the ingredient list carefully. In case you are allergic to any of the listed ingredients, do not take Nail n Mane."
  },
  {
    question: "Why should I trust this brand?",
    answer:
      "The Ayurveda Experience (TAE) is a trusted brand with 1.5 million happy customers spread across 4 continents in 150+ countries, including the USA, Canada, and Australia. Our rigorous testing mechanisms and attention to details has got us featured in Natural Practitioner Magazine, the premier medical publication for Natural Health Practitioners across the country & trusted by 15000+ Practitioners."
  },
  {
    question:
      "How long does shipping take and what are the shipping charges?",
    answer:
      "We usually deliver within 2–7 business days. Though this may vary as per location, weather, and other technical factors. Business days are Monday to Friday (excluding holidays). Plus, we offer free shipping on all products."
  },
  {
    question: "How do I order this product?",
    answer:
      "Click on the button below, drop your details, and we’ll deliver the product to your doorstep – it's as simple as that!"
  }
];

const FAQSection = () => {
  return (
    <section className="bg-[#f9f9f9] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-inter font-bold text-center text-[#590632] mb-10">
          Got Questions? We’ve Answers!
        </h2>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="mb-4 border border-[#590632]"
          >
            <div className="bg-[#590632] text-white px-4 py-2 font-semibold">
              {index + 1} {faq.question}
            </div>
            <div className="bg-white px-4 py-3 text-[#222] text-lg">
              {faq.answer}
            </div>
          </div>
        ))}
        <div className="text-center mt-6">
          <button className="bg-[#590632] text-white font-inter font-bold text-lg px-6 py-3 rounded-lg">
            Bring home this 100% drug free hair solution. Buy Now
          </button>
          <p className="text-base text-gray-600 mt-2">
            30-Day Money-Back Guarantee | FREE Shipping
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
