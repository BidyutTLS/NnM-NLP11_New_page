import React from "react";

export default function HairTypeSecretSection() {
  const follicleTypes = [
    {
      name: "Straight",
      src: "https://cdn05.zipify.com/i44KYkN7dTwMfHVfDmgiUZoMxqU=/fit-in/1940x0/d6f5bc7f105c4051bc1a2d6590192a90/straight.png",
    },
    {
      name: "Wavy",
      src: "https://cdn05.zipify.com/6H6pYSRYzeCDXrHRoT650vN2b7g=/fit-in/1940x0/9ecdf7b2ccb742798a5629d007b4de17/wavy.png",
    },
    {
      name: "Curly",
      src: "https://cdn05.zipify.com/Gr-1RyS_oflkTmhoa0Aai94DkZw=/fit-in/1940x0/70daac0f81a4420da261abdbc66d9a64/curly.png",
    },
    {
      name: "Coily",
      src: "https://cdn05.zipify.com/uJ0n5ctBRfQ8HtQfrcmEVYgvpDM=/fit-in/1940x0/ac42f09ef4f8422285780502a8e4c312/coily.png",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] text-[#1a1a1a] text-lg py-12 px-4 md:px-16">
      <div className="max-w-screen-xl mx-auto text-center mb-8">
        <div className="bg-[#5a002d] text-white py-3 px-4 text-lg font-medium rounded-t">
          Now that you know what <strong>Nail n Mane</strong> can do for your hair and nails, it’s time to reveal what we promised...
        </div>
        <h2 className="text-2xl md:text-3xl font-serif italic text-[#5a002d] mt-6">
          The <span className="font-bold">SECRET</span> of All Hair Types
        </h2>
      </div>

      <div className="max-w-5xl mx-auto border border-[#5a002d] p-6">
        <p className="text-lg text-center mb-6">
          It’s simpler than you think! Did you know that your hair type—whether straight, wavy, or curly—depends on the shape of your hair follicle?
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {follicleTypes.map(({ name, src }) => (
            <div key={name} className="bg-white shadow rounded overflow-hidden text-center">
              <img
                src={src}
                alt={`${name} hair follicle`}
                className="mx-auto h-auto w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px]"
              />
            </div>
          ))}
        </div>

        {/* Source */}
        <p className="text-sm italic mt-6 text-left ">
          Source: <span className="italic">Study<sup>[1]</sup> published on Experimental Dermatology from Wiley’s Online Library</span>
        </p>
      </div>
    </section>
  );
}
