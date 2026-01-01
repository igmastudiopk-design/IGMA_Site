"use client";

import Link from "next/link";
import { portfolioData } from "@/data/index";

export default function PortfolioNavigation() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 bg-[#0B0B0B]">
      <div className="max-w-2xl mb-12">
        <h2 className="text-3xl font-semibold md:text-4xl text-white">
          Portfolio
        </h2>
        <p className="mt-2 text-sm text-white/70">
          Browse our work across different categories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {portfolioData.map((category) => (
          <Link
            key={category.id}
            href={`/portfolio/${category.id}`}
            className="group relative overflow-hidden rounded-2xl h-64 bg-[#181818] hover:shadow-[0_8px_40px_0_rgba(34,197,94,0.12)] transition duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
            <div className="absolute inset-0 flex flex-col justify-end p-6">
              <h3 className="text-2xl font-semibold text-white group-hover:text-green-400 transition">
                {category.title}
              </h3>
              <p className="text-sm text-gray-300 mt-1">
                {category.images.length} images
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
