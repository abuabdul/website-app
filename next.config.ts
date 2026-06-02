import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

// Repo name — must match the GitHub repository name exactly
const REPO = "website-app";

// Content Security Policy for server-mode deployments (Vercel / Node.js).
// Not applied on GitHub Pages — static file hosts can't set HTTP headers.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
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
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "Content-Security-Policy", value: CSP },
];

const nextConfig: NextConfig = {
  // Static export for GitHub Pages; default server mode for Vercel
  ...(isGitHubPages && { output: "export" }),

  // Prefix all routes and assets with /website-app on GitHub Pages
  basePath: isGitHubPages ? `/${REPO}` : "",
  assetPrefix: isGitHubPages ? `/${REPO}/` : "",

  images: {
    unoptimized: true,
  },

  // Expose base path to client components (used by assetPath() in utils.ts)
  env: {
    NEXT_PUBLIC_BASE_PATH: isGitHubPages ? `/${REPO}` : "",
  },

  // Security headers — only works with a server runtime, not static export
  ...(!isGitHubPages && {
    async headers() {
      return [
        {
          source: "/(.*)",
          headers: securityHeaders,
        },
      ];
    },
  }),
};

export default nextConfig;
