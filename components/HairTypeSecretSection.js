import React from "react";

export default function HairTypeSecretSection() {
  return (
    <section className="bg-[#f9f9f9] text-[#33001b] py-12 px-4 md:px-16">
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

        <ul className="text-left max-w-3xl mx-auto text-base font-medium">
          <li className="mb-2">➡️ <strong>Straight hair</strong> comes from a <strong>round follicle</strong></li>
          <li className="mb-2">➡️ <strong>Wavy hair</strong> comes from an <strong>oval follicle</strong></li>
          <li className="mb-2">➡️ <strong>Curly hair</strong> comes from an <strong>elliptical follicle</strong></li>
          <li className="mb-2">➡️ <strong>Coily hair</strong> comes from an <strong>oblong follicle</strong></li>
        </ul>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[
            { name: "Straight", src: "/images/straight.png" },
            { name: "Wavy", src: "/images/wavy.png" },
            { name: "Curly", src: "/images/curly.png" },
            { name: "Coily", src: "/images/coily.png" },
          ].map(({ name, src }) => (
            <div key={name} className="bg-white shadow rounded overflow-hidden text-center">
              <div className="bg-[#5a002d] text-white font-bold py-1">{name}</div>
              <img src={src} alt={`${name} hair follicle`} className="w-full h-auto" />
            </div>
          ))}
        </div>

        <p className="text-sm italic mt-6 text-left text-[#5a002d]">
          Source: <span className="italic">Study<sup>[1]</sup> published on Experimental Dermatology from Wiley’s Online Library</span>
        </p>
      </div>
    </section>
  );
}
