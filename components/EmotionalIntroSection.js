// components/EmotionalIntroSection.js

export default function EmotionalIntroSection() {
  return (
    <section className="bg-[#540a2a] text-white px-4 py-16">
      <div className="max-w-4xl mx-auto text-center space-y-6">

        {/* Gold Banner */}
        <div className="bg-gold text-[#4b2d0d] font-bold text-lg px-4 py-1 w-full">
          In <span className="uppercase">JUST 2 MINUTES</span>...
        </div>

        {/* Upper Intro */}
        <p className="font-merriweather text-lg leading-relaxed">
          We’re going to reveal how our <span className="font-bold">CLINICALLY TESTED</span> solution works for <span className="font-bold">ALL</span> hair types. You don’t want to miss this...keep reading!
        </p>

        {/* Transition Line */}
        <p className="font-merriweather text-lg italic">But first…</p>

        {/* Main Headline */}
        <h2 className="text-2xl md:text-3xl font-bold text-gold font-dmserif">
          Let’s talk about what really matters –
        </h2>
        <h3 className="text-xl md:text-2xl italic text-gold font-inter">
          Your Hair and How It Affects You!
        </h3>

        {/* Body Paragraphs */}
        <p className="text-white font-merriweather text-lg leading-relaxed">
          For women, hair isn’t just about style – it’s a huge part of your <strong>confidence, identity, and femininity</strong>.
        </p>
        <p className="text-white font-merriweather text-lg leading-relaxed">
          No matter what <strong>your hair type is</strong>, if you have
          <span className="bg-gold text-[#4b2d0d] font-bold px-1 mx-1">THINNING HAIR</span>,
          it can be devastating to your self-esteem.
        </p>

        {/* Emphasis Line */}
        <p className="text-white font-bold font-merriweather text-lg">
          WE GET IT and WE’RE HERE to HELP.
        </p>

        {/* Closing Paragraph */}
        <p className="text-white font-merriweather text-lg leading-relaxed">
          To empower <strong>YOU</strong> and <strong>all women</strong>, our scientists went back to the roots – literally – and rediscovered the 5000-year-old science of <strong>Ayurveda</strong>!
        </p>
      </div>
    </section>
  );
}
