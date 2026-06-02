import { Hero } from "@/components/sections/hero";
import { AboutSummary } from "@/components/sections/about-summary";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { LatestPosts } from "@/components/sections/latest-posts";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSummary />
      <FeaturedProjects />
      <LatestPosts />
    </>
  );
}
