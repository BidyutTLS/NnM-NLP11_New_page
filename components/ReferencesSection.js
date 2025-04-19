"use client";
import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const ReferencesSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <section className="bg-white text-[#2c2c2c] py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="border p-4 rounded shadow-sm">
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
            <h2 className="text-lg font-bold">References</h2>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </div>

          {isOpen && (
            <div className="mt-4 space-y-2 text-sm">
              <p>[1] https://onlinelibrary.wiley.com/doi/full/10.1111/exd.13347</p>
              <p>[2] https://www.sciencedirect.com/science/article/pii/S0975947623001341</p>
              <p>[3] https://www.mdpi.com/2072-6643/11/5/1171</p>
              <p>[4] https://www.mdpi.com/2076-3417/10/18/6305</p>

              <p className="italic mt-4">
                Please consult your healthcare provider if you are pregnant, lactating, on medication, or have an existing medical condition.
              </p>

              <p className="text-[13px] leading-snug">
                *These statements have not been evaluated by the FDA. The products on this site are not intended to diagnose, treat, cure, or prevent any disease. If you are pregnant, nursing, taking medication or have a medical condition, consult your physician before using this product. Immediately discontinue use and consult your physician if you experience any adverse reaction to this product. Product is not intended for those below 18 years.
              </p>
              <p className="text-[13px] leading-snug">
                The information and opinions expressed on this website, including customer reviews and testimonials, are for informational purposes only and should not be interpreted as medical advice or recommendations. Testimonials and reviews may not reflect the typical purchaser’s experience and are not intended to represent or guarantee that anyone will achieve the same or similar results. The views and opinions of the health practitioners, experts, and other contributors featured on this website are their own.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
