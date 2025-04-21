// components/ClinicalResultsSection.js

export default function ClinicalResultsSection() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: "url('/images/first-fold-bg1-mobile.jpg')",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center lg:items-start">
        {/* TEXT COLUMN */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
            Discover the Breakthrough Results of a <br />
            <span className="font-bold">Recent Clinical Study</span>
          </h2>

          <div className="mt-10 border border-yellow-500 p-6 md:p-8 lg:p-10 bg-[#6e1e2f]/60 rounded-md backdrop-blur-sm">
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

        {/* Optional: spacer or empty div for layout balance */}
        <div className="hidden lg:block w-1/2" />
      </div>
    </section>
  );
}
