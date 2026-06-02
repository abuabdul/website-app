import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Abubacker A K",
    default: "Abubacker A K — Senior Software Engineer",
  },
  description:
    "Portfolio, blog, and CV of Abubacker A K — Senior Software Engineer with 10+ years building scalable Java, Node.js, React, and AWS systems, now expanding into Generative AI.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Abubacker A K",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-surface text-text">
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
