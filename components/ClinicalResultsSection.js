// components/ClinicalResultsSection.js

export default function ClinicalResultsSection() {
  return (
    <section
      className={`
        relative bg-cover bg-center bg-no-repeat text-white
        bg-[url('/images/first-fold-bg1-mobile.jpg')]
        lg:bg-[url('/images/hair-results-right.jpg')]
      `}
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-12 lg:px-16 py-8 md:py-8 lg:py-20 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug mb-8">
          Discover the Breakthrough Results of a <br /> 
          <span className="font-bold">Recent Clinical Study</span>
        </h2>

        <div className="border border-gold p-4 bg-[#6e1e2f]/70 rounded-md text-white w-full max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
          <p className="text-xl md:text-2xl font-bold mb-4">
            <span className="text-3xl md:text-4xl font-extrabold">46.3%</span> Thicker Hair,
          </p>
          <p className="text-xl md:text-2xl font-bold mb-4">
            <span className="text-3xl md:text-4xl font-extrabold">46.5%</span> Stronger Hair,
          </p>
          <p className="text-xl md:text-2xl font-bold mb-4">
            <span className="text-3xl md:text-4xl font-extrabold">44.7%</span> Faster Hair Growth
          </p>
          <p className="italic text-base md:text-lg mt-2">And So Much More*</p>
          <p className="text-xl md:text-2xl italic text-yellow-400 mt-4 font-semibold">
            For All Hair Types
          </p>
        </div>
      </div>
    </section>
  );
}
