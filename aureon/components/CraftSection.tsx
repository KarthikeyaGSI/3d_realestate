"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "./ui/SectionLabel";

export default function CraftSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textContainerRef.current || !sectionRef.current) return;
      const texts = textContainerRef.current.children;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        }
      });

      tl.fromTo(texts[0], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(texts[0], { opacity: 0, y: -50, duration: 1 }, "+=0.5")
        .fromTo(texts[1], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 })
        .to(texts[1], { opacity: 0, y: -50, duration: 1 }, "+=0.5")
        .fromTo(texts[2], { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="craft" className="h-screen w-full bg-[var(--surface)] relative overflow-hidden flex items-center z-10">
      <div className="absolute top-12 left-12 z-20">
        <SectionLabel index="02" title="Craft" className="!text-[var(--ink)] [&>div]:bg-[var(--ink)] [&>span:first-child]:text-[var(--bronze)]" />
      </div>

      <div className="w-1/2 h-full absolute right-0 top-0 hidden md:flex items-center justify-center p-24">
        <div 
          className="w-full h-full bg-cover bg-center grayscale opacity-80"
          style={{ backgroundImage: "url('/images/projects/villa-01.webp')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--surface)] via-transparent to-transparent" />
      </div>

      <div className="w-full md:w-1/2 pl-12 md:pl-24 h-full flex flex-col justify-center relative z-10">
        <div ref={textContainerRef} className="relative h-[200px]">
          <div className="absolute inset-0">
            <h3 className="text-4xl md:text-6xl font-editorial text-[var(--ink)] mb-6">Material Resonance</h3>
            <p className="text-lg text-[var(--muted-ink)] max-w-md">Every surface is chosen not just for how it looks, but how it absorbs light and sound. Travertine, brushed bronze, and smoked oak.</p>
          </div>
          <div className="absolute inset-0 opacity-0">
            <h3 className="text-4xl md:text-6xl font-editorial text-[var(--ink)] mb-6">Structural Poetics</h3>
            <p className="text-lg text-[var(--muted-ink)] max-w-md">The architecture bends to the landscape, not the other way around. Floor-to-ceiling glass dissolves the boundary between interior sanctuary and exterior wild.</p>
          </div>
          <div className="absolute inset-0 opacity-0">
            <h3 className="text-4xl md:text-6xl font-editorial text-[var(--ink)] mb-6">Precision Engineering</h3>
            <p className="text-lg text-[var(--muted-ink)] max-w-md">What looks effortless is the result of obsessive calculation. The cantilevered decks float without visible support, defying gravity through mastery.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
