import type { Metadata } from "next";
import { PageWrapper } from "@/components/layout/page-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { BlogListing } from "@/components/sections/blog-listing";
import { getAllPosts, getAllTags } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on software architecture, engineering leadership, and career growth.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <PageWrapper>
      <SectionHeader
        eyebrow="Writing"
        title="Blog"
        subtitle="Thoughts on software architecture, engineering leadership, and lessons from the trenches."
      />
      <BlogListing posts={posts} tags={tags} />
    </PageWrapper>
  );
}
