// components/ClinicalResultsSection.js

export default function ClinicalResultsSection() {
  return (
    <section
      className="relative bg-[#6e1e2f] text-white overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/first-fold-bg1-mobile.jpg')",
      }}
    >


      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Discover the Breakthrough Results of a <br />
            <span className="font-bold">Recent Clinical Study</span>
          </h2>

          {/* Highlight Box */}
          <div className="mt-10 border border-yellow-500 p-6 md:p-8 lg:p-10 bg-[#6e1e2f]/70 rounded-md">
            <p className="text-xl md:text-2xl font-bold mb-4">
              <span className="text-3xl md:text-4xl font-extrabold">46.3%</span> Thicker Hair,
            </p>
            <p className="text-xl md:text-2xl font-bold mb-4">
              <span className="text-3xl md:text-4xl font-extrabold">46.5%</span> Stronger Hair,
            </p>
            <p className="text-xl md:text-2xl font-bold mb-4">
              <span className="text-3xl md:text-4xl font-extrabold">44.7%</span> Faster Hair Growth
            </p>
            <p className="italic text-base md:text-lg text-white mt-2">And So Much More*</p>
            <p className="text-xl md:text-2xl italic text-yellow-400 mt-4 font-semibold">
              For All Hair Types
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
