import Image from "next/image";
import Button from "@/components/button";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/main/hero.jpg"
        alt="Team meeting in studio"
        fill
        priority
        sizes="100%"
        className="object-cover brightness-50"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight">
            <span className="block text-emerald-400">We generate ideas,</span>
            <span className="block text-white">you generate impact.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
            We create visuals that captivate, connect, and convert.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              href="https://wa.me/923715000280"
              label="Book a Call"
              variant="gradient"
            />
            <Button
              href="https://wa.me/923715000280"
              label="Whatsapp"
              variant="outline"
              target="_blank"
              rel="noopener noreferrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
