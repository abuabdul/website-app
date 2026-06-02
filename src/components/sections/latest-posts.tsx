import Link from "next/link";
import { SectionHeader } from "@/components/ui/section-header";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export function LatestPosts() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between mb-10">
        <SectionHeader eyebrow="Writing" title="Latest Posts" className="mb-0" />
        <Link href="/blog" className="text-sm font-medium text-accent hover:underline hidden sm:block">
          All posts →
        </Link>
      </div>
      <div className="space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="group border-b border-border pb-6 last:border-0">
            <Link href={`/blog/${post.slug}`} className="block">
              <p className="text-xs text-text-muted mb-1.5">
                {formatDate(post.date)} · {post.readingTime}
              </p>
              <h3 className="text-lg font-semibold text-primary group-hover:text-accent transition-colors mb-1.5">
                {post.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">{post.summary}</p>
            </Link>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="muted">
                  {tag}
                </Badge>
              ))}
            </div>
          </article>
        ))}
      </div>
      <Link href="/blog" className="mt-6 inline-block text-sm font-medium text-accent hover:underline sm:hidden">
        All posts →
      </Link>
    </section>
  );
}
