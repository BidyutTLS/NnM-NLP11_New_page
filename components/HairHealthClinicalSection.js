// components/HairHealthClinicalSection.js

import Image from 'next/image';

export default function HairHealthClinicalSection() {
  return (
    <section className="bg-[#f9f9f9] text-[#3b003b] text-lg px-4 py-20 font-merriweather">
      <div className="max-w-5xl mx-auto text-center space-y-6">

        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-inter font-bold text-[#660c4f]">
          Makings of a 100% Drug-free Hair Health Solution
        </h2>
        <p>
          Our scientists curated potent Ayurvedic herbs like
          <span className="bg-[#3d3e1f] text-white px-1 mx-1 font-bold">Ashwagandha</span>, 
          <span className="bg-[#3d3e1f] text-white px-1 font-bold">Tulsi</span>, and
          <span className="bg-[#3d3e1f] text-white px-1 font-bold">Amla</span> —
          best known for promoting hair growth — to create a restorative blend.
        </p>

        <p className="font-bold">But we didn’t stop there!</p>
        <p>
          We combined these time-tested herbs with other clinically proven ingredients like
          <span className="bg-[#3d3e1f] text-white px-1 mx-1 font-bold">Biotin</span>, 
          <span className="bg-[#3d3e1f] text-white px-1 font-bold">Zinc</span>, and
          <span className="bg-[#3d3e1f] text-white px-1 font-bold">essential Vitamins</span>
          to create a game-changing hair solution that fits right into your busy lifestyle —
          taking <span className="font-bold">just 10 seconds a day!</span>
        </p>

        {/* Clinical Study Box */}
        <div className="border border-[#660c4f] p-6 mt-10 space-y-6">
          <h3 className="text-xl md:text-2xl font-bold font-inter text-[#660c4f]">
            And then, we CLINICALLY TESTED it...
          </h3>
          <div className="text-[#000000]">
          <p>
            ...on <span className="font-bold">36 real women.</span> After
            <span className="font-bold"> JUST 4-12 weeks</span>, they reported results that speak volumes!
          </p>

          <p>Here’s what they experienced:</p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {[
              { percent: '100%', label: 'experienced reduced hair fall' },
              { percent: '97%', label: 'reported longer hair' },
              { percent: '97%', label: 'noted thicker and denser hair' },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-[12px] border-[#660c4f] flex items-center justify-center text-xl font-bold text-blue-800">
                  {stat.percent}
                </div>
                <p className="mt-4 text-sm md:text-base">
                  <span className="font-bold">{stat.percent}</span> {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm mt-6">
            Plus, we put it through a comprehensive <span className="font-bold">safety study</span>, reporting <span className="font-bold">NO SIDE EFFECTS</span>!
          </p>
        </div>
        </div>
  
        {/* Call-to-action */}
        <p className="text-blue-800 font-bold text-xl mt-8">
          Can’t wait to know what this secret solution is?
        </p>
      </div>
    </section>
  );
}
