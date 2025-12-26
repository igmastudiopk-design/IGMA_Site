import Image from "next/image";
import { Check } from "lucide-react";

type Item = {
  title: string;
  subtitle: string;
  src: string;
  w: number;
  h: number;
  id: string;
  heightClass: string;
};

const items: Item[] = [
  {
    id: "minimal-1",
    title: "Minimal Product Scene",
    subtitle: "Lighting and Composition",
    src: "/visualhighlights/1 (1).jpg",
    w: 800,
    h: 1000,
    heightClass: "h-[380px] md:h-[340px]",
  },
  {
    id: "creative-direction",
    title: "Creative Direction",
    subtitle: "Editorial Portraits",
    src: "/visualhighlights/1 (2).jpg",
    w: 800,
    h: 900,
    heightClass: "h-[260px] md:h-[300px]",
  },
  {
    id: "brand-campaign",
    title: "Brand Campaign",
    subtitle: "Billboards Placement",
    src: "/visualhighlights/1 (3).jpg",
    w: 800,
    h: 900,
    heightClass: "h-[320px] md:h-[400px]",
  },
  {
    id: "web-design",
    title: "Web Design",
    subtitle: "High Fidelity Layout",
    src: "/visualhighlights/1 (4).jpg",
    w: 800,
    h: 1000,
    heightClass: "h-[400px] md:h-[360px]",
  },
  {
    id: "social-content",
    title: "Social Content",
    subtitle: "Performance Creative",
    src: "/visualhighlights/1 (5).jpg",
    w: 800,
    h: 900,
    heightClass: "h-[260px] md:h-[300px]",
  },
  {
    id: "bts-film-set",
    title: "BTS–Film Set",
    subtitle: "Production Day",
    src: "/visualhighlights/1 (6).jpg",
    w: 800,
    h: 900,
    heightClass: "h-[320px] md:h-[400px]",
  },
  {
    id: "minimal-2",
    title: "Minimal Product Scene",
    subtitle: "Lighting and Composition",
    src: "/visualhighlights/1 (7).jpg",
    w: 800,
    h: 900,
    heightClass: "h-[380px] md:h-[340px]",
  },
  {
    id: "urban-photoshoot",
    title: "Urban Photoshoot",
    subtitle: "City Vibes",
    src: "/visualhighlights/1 (9).png",
    w: 800,
    h: 900,
    heightClass: "h-[320px] md:h-[400px]",
  },
  {
    id: "minimal-3",
    title: "Minimal Product Scene",
    subtitle: "Lighting and Composition",
    src: "/visualhighlights/1 (8).jpg",
    w: 800,
    h: 900,
    heightClass: "h-[260px] md:h-[300px]",
  },
];

export default function VisualHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 bg-[#0B0B0B]">
      <div className="max-w-2xl mb-8">
        <h2 className="text-2xl font-semibold md:text-3xl text-white">
          Visual Highlights
        </h2>
        <p className="mt-2 text-sm text-white/70">
          A glimpse into our latest productions and creative campaigns.
        </p>
      </div>
      <div
        className="
          columns-1
          sm:columns-2
          lg:columns-3
          gap-6
          [column-fill:_balance]
        "
      >
        {items.map((item) => (
          <div
            key={item.id}
            className={`
              mb-6
              break-inside-avoid
              rounded-2xl
              shadow-[0_4px_32px_0_rgba(0,0,0,0.45)]
              bg-[#181818]
              overflow-hidden
              group
              transition
              duration-400
              ease-in-out
              ${item.heightClass}
              relative
              hover:scale-[1.05]
              hover:shadow-[0_8px_40px_0_rgba(34,197,94,0.12)]
              hover:brightness-110
            `}
            style={{ borderRadius: "16px" }}
          >
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover"
                quality={90}
                priority
              />
              {/* Gradient overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
            </div>
            {/* Card content */}
            <div className="absolute left-0 right-0 bottom-0 flex items-end justify-between px-5 pb-5 z-10">
              <div>
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-300">{item.subtitle}</p>
              </div>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#22C55E] shadow-lg">
                <Check className="h-4 w-4 text-black" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
