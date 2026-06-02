"use client";

import { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogListingProps {
  posts: BlogPost[];
  tags: string[];
}

export function BlogListing({ posts, tags }: BlogListingProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag ? posts.filter((p) => p.tags.includes(activeTag)) : posts;

  return (
    <div>
      {/* Tag filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        <Badge
          variant={activeTag === null ? "accent" : "default"}
          onClick={() => setActiveTag(null)}
        >
          All
        </Badge>
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant={activeTag === tag ? "accent" : "default"}
            onClick={() => setActiveTag(activeTag === tag ? null : tag)}
          >
            {tag}
          </Badge>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-8">
        {filtered.map((post) => (
          <article key={post.slug} className="group border-b border-border pb-8 last:border-0">
            <Link href={`/blog/${post.slug}`} className="block">
              <p className="text-xs text-text-muted mb-1.5">
                {formatDate(post.date)} · {post.readingTime}
              </p>
              <h2 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-text-muted leading-relaxed">{post.summary}</p>
            </Link>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="muted"
                  onClick={() => setActiveTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-text-muted py-12">No posts match this tag.</p>
      )}
    </div>
  );
}
