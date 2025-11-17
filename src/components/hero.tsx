import Image from "next/image";
import Button from "@/components/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1920&auto=format&fit=crop"
          alt="Team meeting in studio"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            <span className="block text-emerald-400">We design,</span>
            <span className="block text-white">produce and scale</span>
            <span className="block text-white">brand <span className="text-emerald-400">experience.</span></span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            Strategy-led design and production to launch, grow and refresh with impact
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/book-call" label="Book a Call" variant="gradient" />
            <Button href="/contact" label="Whatsapp" variant="outline" />
          </div>
        </div>
      </div>
    </section>
  );
}