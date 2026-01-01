import React from "react";
import { blogData } from "@/data/blogs";
import Image from "next/image";
import CTA from "@/components/cta";
import ShareButton from "@/components/ShareButton";
import Link from "next/link";

interface BlogPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  return blogData.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { id } = await params;
  const post = blogData.find((blog) => blog.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Blog Not Found
          </h1>
          <p className="text-white/70 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-block bg-[#16a085] text-white px-6 py-3 rounded-lg hover:bg-[#138870] transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogData
    .filter((b) => b.category === post.category && b.id !== post.id)
    .slice(0, 3);

  return (
    <>
      <article className="min-h-screen bg-gradient-to-b from-[#0e0e0e] to-black">
        {/* Header Image */}
        <div className="relative h-[400px] sm:h-[500px] w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Article Content */}
        <div className="mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 -mt-32 relative z-10">
          {/* Meta Information */}
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <span className="inline-flex rounded-full bg-[#16a085] px-4 py-1 text-xs font-semibold text-white">
              {post.category}
            </span>
            <span className="text-sm text-white/60">{post.readTime}</span>
            <span className="text-sm text-white/60">{post.date}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="mb-12 flex items-center gap-4 pb-8 border-b border-white/10">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#16a085] to-[#0e7c68] flex items-center justify-center text-white font-bold">
              {post.author.charAt(0)}
            </div>
            <div>
              <p className="font-semibold text-foreground">{post.author}</p>
              <p className="text-sm text-white/60">Content Creator & Strategist</p>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none mb-12">
            {post.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-base sm:text-lg leading-relaxed text-white/80 mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mb-12 pb-12 border-b border-white/10">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Tags
            </h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-white/5 px-4 py-2 text-xs text-white/70 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mb-12 pb-12 border-b border-white/10">
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Share This Article
            </h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${typeof window !== 'undefined' ? window.location.href : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 text-white/70 hover:bg-white/10 transition-colors"
              >
                LinkedIn
              </a>
              <ShareButton />
            </div>
          </div>

          {/* Author Bio */}
          <div className="mb-12 rounded-2xl bg-[#1a1a1a] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-foreground mb-4">
              About the Author
            </h3>
            <p className="text-white/70 leading-relaxed">
              {post.author} is a content creator and digital marketing strategist
              with years of experience in helping brands create compelling visual
              content and marketing campaigns. Passionate about the intersection of
              creativity and data, they share insights and strategies to help
              creators and brands succeed in the digital age.
            </p>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
            <h2 className="text-3xl font-bold text-foreground mb-12">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group flex flex-col h-full rounded-xl overflow-hidden bg-[#1a1a1a] hover:bg-[#242424] transition-colors"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 p-6 flex flex-col">
                    <span className="inline-flex w-fit rounded-full bg-[#16a085] px-3 py-1 text-xs font-semibold text-white mb-3">
                      {relatedPost.category}
                    </span>
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-[#16a085] transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-white/60 line-clamp-2 flex-1 mb-4">
                      {relatedPost.description}
                    </p>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-xs text-white/50">{relatedPost.readTime}</span>
                      <span className="text-xs text-white/50">{relatedPost.date}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      <CTA />
    </>
  );
}
