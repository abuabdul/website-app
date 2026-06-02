import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/utils";

export function Hero() {
  return (
    <section className="bg-muted border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Senior Software Engineer · Full-Stack · Cloud · AI
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Abubacker A K
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-text-muted max-w-xl">
              10+ years building scalable enterprise systems with Java, Node.js, React, and AWS.
              Now bridging full-stack engineering with Generative AI and cloud architecture.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
              <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors bg-primary text-white hover:bg-primary/90 h-11 px-6 text-sm"
              >
                View Resume
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors border border-primary text-primary hover:bg-primary/5 h-11 px-6 text-sm"
              >
                View Projects
              </Link>
            </div>
          </div>

          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-border shadow-lg bg-muted">
              <Image
                src={assetPath("/images/profile-placeholder.png")}
                alt="Abubacker A K profile photo"
                width={208}
                height={208}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
