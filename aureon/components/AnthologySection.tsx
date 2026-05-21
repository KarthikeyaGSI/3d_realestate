"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "./ui/SectionLabel";
import Image from "next/image";

const PROJECTS = [
  { id: "01", title: "The Obsidian Villa", location: "Swiss Alps", image: "/images/projects/villa-01.webp" },
  { id: "02", title: "Aether Tower", location: "Dubai", image: "/images/projects/tower-01.webp" },
  { id: "03", title: "Lumina Estate", location: "Kyoto", image: "/images/projects/estate-01.webp" },
];

export default function AnthologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!galleryRef.current || !sectionRef.current) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        }
      });

      tl.to(galleryRef.current, {
        xPercent: -100 + (100 / PROJECTS.length),
        ease: "none"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="anthology" className="h-screen w-full overflow-hidden bg-[var(--ink)] text-[var(--surface)] relative z-10">
      <div className="absolute top-12 left-12 z-20">
        <SectionLabel index="01" title="Worlds" />
      </div>
      
      <div ref={galleryRef} className="flex h-full w-[300vw]">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="w-[100vw] h-full flex flex-col justify-center items-center relative px-20">
            <div className="w-[70%] h-[60%] relative overflow-hidden group">
              <div className="absolute inset-0 bg-[var(--ink)]/20 z-10 group-hover:bg-transparent transition-colors duration-700" />
              {/* Fallback image if missing */}
              <div className="absolute inset-0 bg-[var(--muted-ink)] flex items-center justify-center -z-10 text-xs">Missing Image</div>
              {/* Using native img for placeholder if the real one isn't created yet */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000 ease-[var(--ease-out-aureon)]" />
            </div>
            <div className="w-[70%] mt-8 flex justify-between items-end">
              <div>
                <div className="text-[var(--champagne)] font-mono text-sm mb-2">{project.id}</div>
                <h3 className="text-5xl font-editorial italic">{project.title}</h3>
              </div>
              <div className="text-[var(--stone)] uppercase tracking-widest text-xs">
                {project.location}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
