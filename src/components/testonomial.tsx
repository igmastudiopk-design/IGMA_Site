"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  id: number
  quote: string
  author: string
  title: string
  company: string
  image: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Working with IGMA has been a game-changer for our business. Their team blends strategic digital marketing with high-quality content production that truly connects with audiences.",
    author: "Amaka Micheal",
    title: "Media Executive, Buying & Control",
    company: "DISCORD",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    quote:
      "IGMA blends creativity with performance. Since partnering with them, our online engagement and conversions have grown significantly.",
    author: "James Richardson",
    title: "Chief Marketing Officer",
    company: "DISCORD",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    quote:
      "Their strategic insights and creative execution helped us stand out in a competitive market. Highly professional team.",
    author: "Sarah Chen",
    title: "Head of Digital Strategy",
    company: "DISCORD",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () =>
    setCurrentIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  const current = testimonials[currentIndex]

  return (
    <section className="w-full min-h-screen bg-[#070707] flex items-center justify-center px-2 py-12">
      <div className="w-full max-w-5xl">
        {/* Card */}
        <div
          className="relative rounded-[20px] px-12 py-10 flex items-center gap-10
          bg-[radial-gradient(120%_120%_at_0%_50%,#232b27_0%,#0e1f1a_60%,#1ba37a_100%)]
          shadow-[0_0_60px_rgba(32,200,150,0.10)]"
        >
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 rounded-[18px] overflow-hidden border border-emerald-500/30 bg-[#181f1c]">
              <Image
                src={current.image}
                alt={current.author}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-white/80 text-base leading-relaxed max-w-3xl mb-6">
              {current.quote}
            </p>
            <div>
              <h3 className="text-white font-semibold text-base">
                {current.author}
              </h3>
              <p className="text-white/60 text-sm">
                {current.title}
              </p>
            </div>
            {/* Company */}
            <div className="flex items-center gap-2 mt-3">
              <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center">
                {/* Discord SVG */}
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 text-[#1f6b52]"
                  fill="currentColor"
                >
                  {/* ...existing SVG path... */}
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515..." />
                </svg>
              </div>
              <span className="text-white text-xs font-semibold tracking-wide">
                {current.company}
              </span>
            </div>
            {/* Dots & Arrows Centered */}
            <div className="flex items-center justify-center gap-4 mt-8 w-full">
              <button
                onClick={prev}
                className="text-white/60 hover:text-white transition-colors rounded-full p-1.5 bg-transparent"
                aria-label="Previous"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                      i === currentIndex
                        ? "bg-emerald-500 scale-110 shadow"
                        : "bg-white/25"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="text-white/60 hover:text-white transition-colors rounded-full p-1.5 bg-transparent"
                aria-label="Next"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
