export default function HowWeWork() {
  return (
    <div className="w-full bg-[#0a0a0a]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="space-y-16">
        {/* Top row: left heading, right description */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          <div>
            <h1 className="text-3xl font-bold leading-tight text-white lg:text-4xl">
              Provide the best service with out of the box ideas
            </h1>
          </div>

          <div>
            <p className="text-sm leading-relaxed text-gray-300">
              We are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the
              digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we
              stay at the forefront of industry trends and technologies.
            </p>
          </div>
        </div>

        {/* Bottom row: aligned cards */}
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
          {/* 920 stats card */}
          <div className="relative w-full">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-black opacity-75 blur-xl" />
            <div className="relative h-80 w-full overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-8 backdrop-blur-sm">
              <div className="flex items-baseline gap-1">
                <span className="text-7xl font-bold text-white">920</span>
                <span className="mb-1 text-4xl font-bold text-teal-500">+</span>
              </div>
              <p className="mt-2 text-sm text-gray-400">Project finish</p>

              {/* Avatars inside card */}
              <div className="absolute bottom-4 left-4 flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop"
                  alt="Team member 1"
                  className="h-12 w-12 rounded-full border-2 border-black object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1600&auto=format&fit=crop"
                  alt="Team member 2"
                  className="h-12 w-12 rounded-full border-2 border-black object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop"
                  alt="Team member 3"
                  className="h-12 w-12 rounded-full border-2 border-black object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1600&auto=format&fit=crop"
                  alt="Team member 4"
                  className="h-12 w-12 rounded-full border-2 border-black object-cover"
                />
              </div>

              {/* Plus button inside card */}
              <div className="absolute bottom-4 right-4">
                <button className="ml-2 flex h-12 w-12 items-center justify-center rounded-full border-2 border-teal-500 text-lg font-semibold text-teal-500 transition hover:bg-teal-500/10">
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Video card */}
          <div className="relative h-80 w-full overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
              alt="How We Work"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />

            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl font-bold tracking-widest text-white lg:text-6xl">HOW WE WORK</h2>
            </div>

            {/* Play button */}
            <div className="absolute bottom-6 right-6">
              <button className="flex h-24 w-24 items-center justify-center rounded-full bg-teal-500 text-white shadow-2xl transition hover:bg-teal-600">
                <svg
                  className="ml-1 h-10 w-10 fill-white"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon points="5 3 19 12 5 21" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}