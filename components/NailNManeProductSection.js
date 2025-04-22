import Image from "next/image";

export default function NailNManeProductSection() {
  return (
    <section className="bg-[#5b0830] text-white text-lg px-4 py-20 font-merriweather">
      <div className="max-w-4xl mx-auto text-center space-y-6">

        <div className="space-y-1">
          <p className="text-white text-base">We call it</p>
          <h2 className="text-4xl font-bold font-inter">Nail n Mane</h2>
          <p className="italic text-gold font-dmserif font-bold text-2xl">built using Natural Actives</p>
        </div>


        <div className="flex justify-center mt-6">
          <Image
            src="https://cdn05.zipify.com/qXz83jIWyTaru0YMJWbd8gvNyB0=/fit-in/1940x0/1fdd7bccca5e423c8f2e53c9036197e2/nail-n-mane-introduction_1-1-1.gif"
            alt="Nail n Mane Bottles"
            width={400}
            height={300}
            className="rounded-md"
            unoptimized
          />
        </div>

        {/* Benefit Copy */}
        <p className="text-lg">
          This isn’t just any random product... it’s proven to deliver results
          <span className="bg-gold text-[#590632] px-2 ml-2 font-inter font-bold">FOR REAL:</span>
        </p>

        <ul className="text-left text-lg space-y-2 mt-4 max-w-xl mx-auto">
          <li className="text-gold">✓ Improved scalp health with stronger and longer hair</li>
          <li className="text-gold">✓ Reduced hair thinning, shedding, and breakage</li>
          <li className="text-gold">✓ Thicker, shinier, and healthier hair</li>
        </ul>

        <div className="w-full border-t border-white my-8">
          <div className="text-white text-xl mt-[-16px] mb-8">✦</div>
        </div>

        {/* Bonus Benefits + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start text-left text-white">
          <div>
            <h3 className="font-bold font-inter text-lg">BONUS BENEFITS:</h3>
            <ul className="mt-3 space-y-2">
              <li>✓ 2X longer nails</li>
              <li>✓ Naturally smoother, healthier, and brighter nails</li>
            </ul>
          </div>

          <div className="text-left md:text-left font-inter ">
            <p className="uppercase text-sm lg:text-center font-bold">
              Start seeing visible results in as little as
            </p>
            <p className="text-gold text-2xl lg:text-center font-inter font-extrabold mt-1">4-12 weeks!</p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <button className="bg-gold text-[#4b2d0d] font-bold font-inter py-3 px-6 rounded-lg">
            Treat Yourself to Healthier Hair. Order NOW
          </button>
          <p className="text-sm mt-2">30-Day Money-Back Guarantee | FREE Shipping</p>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center text-sm">
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn05.zipify.com/b3JKMbKy_6Lle6N63Kte90yD8iw=/fit-in/1940x0/4efa85d1870c4ac9a2ee5a95bd903b48/no-binders-icon.png"
              alt="No Binders"
              width={60}
              height={60}
              unoptimized
            />
            <p className="mt-2">No Binders</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn05.zipify.com/dM8JCvSFZiFFd2B-A_LvCd67uMg=/fit-in/1940x0/8d1ad0aca48947368747b26f0ff12594/no-preservatives-icon.png"
              alt="No Preservatives"
              width={60}
              height={60}
              unoptimized
            />
            <p className="mt-2">No Preservatives</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn05.zipify.com/USKheMAubw9EMI9Xt56evx7BoVU=/fit-in/1940x0/a2cadf5a408747a0a4e77a74a1fdd09e/non-gmo-icon.png"
              alt="Non-GMO"
              width={60}
              height={60}
              unoptimized
            />
            <p className="mt-2">NON-GMO</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="https://cdn05.zipify.com/rMdNFIJJvugo1TYABJqdoYMO8nQ=/fit-in/1940x0/7f1037b2478849d280ae6e03d7bcccdd/gluten-free.png"
              alt="Gluten Free"
              width={60}
              height={60}
              unoptimized
            />
            <p className="mt-2">Gluten Free</p>
          </div>
        </div>
      </div>
    </section>
  );
}
