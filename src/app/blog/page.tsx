import React from "react";
import CTA from "@/components/cta";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/data/blogs";

export default function ContentSection() {
  const featuredPost = blogData.find((post) => post.featured);
  const popularPosts = blogData.filter((post) => !post.featured);

  return (
    <>
      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 min-h-screen py-16 sm:py-20 flex items-center">
        <div className="mx-auto w-full max-w-5xl">
          {featuredPost && (
            <Link href={`/blog/${featuredPost.id}`}>
              <div className="flex flex-col md:flex-row rounded-2xl bg-[#0e0e0e] px-6 sm:px-8 py-6 sm:py-8 gap-8 shadow-xl min-h-[65vh] hover:shadow-2xl hover:bg-[#1a1a1a] transition-all duration-300 cursor-pointer group">
                <div className="flex-1 space-y-4 text-foreground">
                  <div className="inline-flex w-fit rounded-full bg-[#16a085] px-4 py-1 text-xs font-semibold text-white">
                    Featured
                  </div>
                  <h2 className="text-2xl font-bold leading-snug md:text-3xl group-hover:text-[#16a085] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-white/70">
                    {featuredPost.shortContent}
                  </p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#16a085] to-[#0e7c68] flex items-center justify-center text-white font-bold">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div className="flex flex-col text-sm text-white/70">
                        <span className="font-medium text-foreground">
                          {featuredPost.author}
                        </span>
                        <span className="text-xs">{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <span className="text-xs text-white/50">{featuredPost.date}</span>
                  </div>
                </div>
                <div className="flex-1 overflow-hidden rounded-xl">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 pb-16 sm:pb-20">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Latest Articles
          </h2>
          <p className="mt-3 mb-8 max-w-xl text-sm text-white/70 sm:mb-10 text-center">
            Explore our comprehensive collection of insights on content strategy,
            design, video marketing, and digital branding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
            {popularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="flex h-full flex-col text-left hover:opacity-100 opacity-100 transition-all duration-300 group">
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex gap-2 mb-3">
                    <span className="inline-flex rounded-full bg-[#f1f9f7] px-3 py-1 text-xs font-semibold text-[#16a085]">
                      {post.category}
                    </span>
                    <span className="inline-flex text-xs text-white/60 items-center">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold leading-snug text-foreground line-clamp-2 mb-3 group-hover:text-[#16a085] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70 line-clamp-2 mb-4 flex-1">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#16a085] to-[#0e7c68] flex items-center justify-center text-white text-xs font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs text-white/60">{post.author}</span>
                    </div>
                    <span className="text-xs text-white/50">{post.date}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
