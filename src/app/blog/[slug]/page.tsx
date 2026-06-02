import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { Badge } from "@/components/ui/badge";
import { mdxComponents } from "@/components/mdx/mdx-components";
import { getPostBySlug, generateStaticParams as getParams } from "@/lib/mdx";
import { formatDate } from "@/lib/utils";

export { getParams as generateStaticParams };

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { frontmatter } = getPostBySlug(slug);
  return {
    title: frontmatter.title,
    description: frontmatter.summary,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const { frontmatter, content } = getPostBySlug(slug);

  return (
    <PageWrapper className="max-w-3xl">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        All posts
      </Link>

      <header className="mb-10">
        <p className="text-xs text-text-muted mb-3">
          {formatDate(frontmatter.date)}
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary leading-tight mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-lg text-text-muted mb-5">{frontmatter.summary}</p>
        <div className="flex flex-wrap gap-1.5">
          {frontmatter.tags.map((tag) => (
            <Badge key={tag} variant="muted">
              {tag}
            </Badge>
          ))}
        </div>
      </header>

      <article className="prose prose-slate max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </article>
    </PageWrapper>
  );
}
