"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

type PortfolioGalleryProps = {
  category: string;
  images: string[];
  title: string;
};

export default function PortfolioGallery({
  category,
  images,
  title,
}: PortfolioGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 bg-[#0B0B0B] min-h-screen mt-10">
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl font-semibold md:text-5xl text-white">
          {title}
        </h1>
        <p className="mt-2 text-sm text-white/70">
          Explore our {title.toLowerCase()} portfolio
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
        {images.map((image, index) => (
          <div
            key={index}
            className="mb-6 break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer transition duration-300 ease-in-out hover:scale-[1.02]"
            onClick={() =>
              setSelectedImage(`/portfolio/${category}/${image}`)
            }
          >
            <div className="relative h-64 md:h-80 w-full">
              <Image
                src={`/portfolio/${category}/${image}`}
                alt={`${title} ${index + 1}`}
                fill
                sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                className="object-cover group-hover:brightness-90 transition duration-300"
                quality={85}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div
            className="relative w-full h-full max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full size"
              fill
              sizes="100vw"
              className="object-contain"
              quality={95}
            />
          </div>
        </div>
      )}
    </section>
  );
}
