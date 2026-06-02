import type { MetadataRoute } from "next";

// Bots explicitly disallowed:
// - AI training crawlers (OpenAI, Anthropic, Google, Meta, Apple, Common Crawl, etc.)
// - Aggressive SEO/audit crawlers that offer no indexing value
const DISALLOWED_BOTS: Extract<MetadataRoute.Robots["rules"], unknown[]> = [
  // AI training crawlers
  { userAgent: "GPTBot", disallow: ["/"] },
  { userAgent: "ChatGPT-User", disallow: ["/"] },
  { userAgent: "OAI-SearchBot", disallow: ["/"] },
  { userAgent: "ClaudeBot", disallow: ["/"] },
  { userAgent: "anthropic-ai", disallow: ["/"] },
  { userAgent: "Claude-Web", disallow: ["/"] },
  { userAgent: "Google-Extended", disallow: ["/"] }, // Gemini / Bard training
  { userAgent: "Googlebot-Image", disallow: ["/"] },
  { userAgent: "Meta-ExternalAgent", disallow: ["/"] },
  { userAgent: "Meta-ExternalFetcher", disallow: ["/"] },
  { userAgent: "Applebot-Extended", disallow: ["/"] },
  { userAgent: "CCBot", disallow: ["/"] }, // Common Crawl (used by many AI datasets)
  { userAgent: "Bytespider", disallow: ["/"] }, // TikTok / ByteDance
  { userAgent: "Diffbot", disallow: ["/"] },
  { userAgent: "ImagesiftBot", disallow: ["/"] },
  { userAgent: "omgili", disallow: ["/"] },
  { userAgent: "omgilibot", disallow: ["/"] },
  { userAgent: "YouBot", disallow: ["/"] },
  { userAgent: "cohere-ai", disallow: ["/"] },
  { userAgent: "PerplexityBot", disallow: ["/"] },
  // Aggressive SEO/audit crawlers
  { userAgent: "AhrefsBot", disallow: ["/"] },
  { userAgent: "SemrushBot", disallow: ["/"] },
  { userAgent: "MJ12bot", disallow: ["/"] },
  { userAgent: "DotBot", disallow: ["/"] },
  { userAgent: "BLEXBot", disallow: ["/"] },
  { userAgent: "PetalBot", disallow: ["/"] },
  { userAgent: "SeznamBot", disallow: ["/"] },
  { userAgent: "DataForSeoBot", disallow: ["/"] },
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Legitimate search engines — allow full crawl for SEO
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "DuckDuckBot", allow: "/" },
      { userAgent: "LinkedInBot", allow: "/" }, // so link previews work
      // All disallowed bots
      ...DISALLOWED_BOTS,
      // Everyone else — allow (covers smaller legitimate search engines)
      { userAgent: "*", allow: "/" },
    ],
    sitemap: "https://abuabdul.dev/sitemap.xml",
  };
}
