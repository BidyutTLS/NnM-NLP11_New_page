// components/ClinicalResultsSection.js

export default function ClinicalResultsSection() {
  return (
    <section className="relative bg-[#6e1e2f] text-white overflow-hidden">
      {/* Desktop Background Image */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 z-0 bg-[url('/images/hair-results-right.jpg')] bg-cover bg-center" />

      {/* Mobile Background Image */}
      <div className="lg:hidden absolute inset-0 z-0 bg-[url('/images/first-fold-bg1-mobile.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20 lg:flex lg:items-center">
        {/* Left Column Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
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
