import Image from "next/image";
import { Check } from "lucide-react";

type Item = {
  title: string;
  subtitle: string;
  src: string;
  w: number;
  h: number;
  id: string;
};

const items: Item[] = [
  {
    id: "creative-direction",
    title: "Creative Direction",
    subtitle: "Editorial Portraits",
    src: "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1400&auto=format&fit=crop",
    w: 1400,
    h: 1960,
  },
  {
    id: "brand-campaign",
    title: "Brand Campaign",
    subtitle: "Billboards Placement",
    src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=1400&auto=format&fit=crop",
    w: 1400,
    h: 933,
  },
  {
    id: "minimal-1",
    title: "Minimal Product Scene",
    subtitle: "Lighting and Composition",
    src: "https://images.unsplash.com/photo-1540573130231-62d5f4a0a7e3?q=80&w=1200&auto=format&fit=crop",
    w: 1200,
    h: 1800,
  },
  {
    id: "social-content",
    title: "Social Content",
    subtitle: "Performance Creative",
    src: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1400&auto=format&fit=crop",
    w: 1400,
    h: 933,
  },
  {
    id: "web-design",
    title: "Web Design",
    subtitle: "High Fidelity Layout",
    src: "https://images.unsplash.com/photo-1553531888-a6736cbe3e52?q=80&w=1200&auto=format&fit=crop",
    w: 1200,
    h: 1600,
  },
  {
    id: "bts-film-set",
    title: "BTS – Film Set",
    subtitle: "Production Day",
    src: "https://images.unsplash.com/photo-1516637090014-cf3d0c5a8e68?q=80&w=1400&auto=format&fit=crop",
    w: 1400,
    h: 1960,
  },
  {
    id: "minimal-2",
    title: "Minimal Product Scene",
    subtitle: "Lighting and Composition",
    src: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=1400&auto=format&fit=crop",
    w: 1400,
    h: 933,
  },
  {
    id: "minimal-3",
    title: "Minimal Product Scene",
    subtitle: "Lighting and Composition",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1400&auto=format&fit=crop",
    w: 1400,
    h: 933,
  },
  {
    id: "minimal-4",
    title: "Minimal Product Scene",
    subtitle: "Lighting and Composition",
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1400&auto=format&fit=crop",
    w: 1400,
    h: 1400,
  },
];

export default function VisualHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-2xl">
        <h2 className="text-2xl font-semibold md:text-3xl">Visual Highlights</h2>
        <p className="mt-2 text-sm text-white/70">A glimpse into our latest productions and creative campaigns.</p>
      </div>

      <div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="mb-6 break-inside-avoid rounded-xl bg-[#0e0e0e] shadow-md">
            <div className="relative">
              <Image
                src={item.src}
                alt={item.title}
                width={item.w}
                height={item.h}
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <span className="absolute bottom-3 right-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500">
                <Check className="h-3.5 w-3.5 text-black" />
              </span>
            </div>
            <div className="px-4 py-4">
              <h3 className="text-sm font-semibold md:text-base">{item.title}</h3>
              <p className="mt-1 text-xs text-white/70 md:text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}