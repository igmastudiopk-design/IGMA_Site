export default function TrustedBy() {
  const brands = [
    {
      name: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg",
    },
    {
      name: "Evernote",
      logo: "https://images.unsplash.com/photo-1587502537046-c70620057994?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "Coinbase",
      logo: "https://images.unsplash.com/photo-1640340434855-6f60b58902a6?q=80&w=1600&auto=format&fit=crop",
    },
    {
      name: "Tesla",
      logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <h3 className="mb-12 text-center text-lg font-semibold text-white/90">
        Trusted by the world&apos;s leading teams
      </h3>
      <div className="relative overflow-hidden">
        {/* gradient masks */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-black to-transparent" />

        {/* marquee container */}
        <div className="flex animate-marquee whitespace-nowrap">
          {/* First set */}
          <div className="flex flex-shrink-0 items-center gap-16 pr-16">
            {brands.map((brand, i) => (
              <div
                key={`first-${i}-${brand.name}`}
                className="flex items-center gap-3"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-8 w-auto object-contain brightness-0 invert opacity-80 transition-opacity hover:opacity-100"
                />
                <span className="text-xl font-medium text-white/70">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex flex-shrink-0 items-center gap-16 pr-16">
            {brands.map((brand, i) => (
              <div
                key={`second-${i}-${brand.name}`}
                className="flex items-center gap-3"
              >
                <img
                  src={brand.logo}
                  alt=""
                  className="h-8 w-auto object-contain brightness-0 invert opacity-80 transition-opacity hover:opacity-100"
                />
                <span className="text-xl font-medium text-white/70">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}