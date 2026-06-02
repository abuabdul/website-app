import type { NextConfig } from "next";

// Content Security Policy — restricts what the page can load.
// 'unsafe-inline' is required by Next.js hydration and Tailwind CSS.
// Adjust connect-src / img-src if you add third-party services later.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  // Geist fonts are inlined by next/font — no external font domain needed
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "upgrade-insecure-requests",
]
  .join("; ")
  .trim();

const securityHeaders = [
  // Prevent the page from being embedded in an iframe anywhere (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers guessing the content type from response content
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only send the origin (not the full URL) as the Referer header
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Disable browser features the site doesn't use
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  // Force HTTPS for 2 years once visited (Vercel already enforces HTTPS, belt-and-braces)
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: CSP },
];

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Apply security headers to every route
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
