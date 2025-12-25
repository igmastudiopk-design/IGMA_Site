export default function TrustedBy() {
  const brands = [
    { name: "NVIDIA", logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg" },
    { name: "Evernote", logo: "https://images.unsplash.com/photo-1587502537046-c70620057994?q=80&w=800&auto=format&fit=crop" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "Coinbase", logo: "https://images.unsplash.com/photo-1640340434855-6f60b58902a6?q=80&w=800&auto=format&fit=crop" },
    { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
  ];

  return (
    <section className="relative w-full overflow-hidden py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h3 className="mb-12 text-center text-lg font-semibold text-white/90">
          Trusted by the world&apos;s leading teams
        </h3>
      </div>

      {/* Marquee wrapper */}
      <div className="relative w-full overflow-hidden">
        
        {/* Gradient masks (viewport-safe) */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-10 bg-gradient-to-l from-black to-transparent" />

        {/* Marquee */}
        <div className="flex w-max animate-marquee">
          
          {[...Array(2)].map((_, setIndex) => (
            <div
              key={setIndex}
              className="flex flex-shrink-0 items-center gap-12 pr-12"
            >
              {brands.map((brand, i) => (
                <div
                  key={`${setIndex}-${i}`}
                  className="flex items-center gap-3 max-w-full"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-8 max-w-full object-contain brightness-0 invert opacity-80"
                  />
                  <span className="text-lg font-medium text-white/70 whitespace-nowrap">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
