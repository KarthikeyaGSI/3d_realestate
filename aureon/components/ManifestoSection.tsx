"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

export default function ManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!textRef.current) return;
      const words = textRef.current.querySelectorAll(".word");
      
      gsap.fromTo(
        words,
        { opacity: 0.1, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const text = "Luxury is not decoration. It is precision made emotional. We design impossible villas, towers, and private worlds for those who have seen everything and still expect to be moved.";

  return (
    <section ref={sectionRef} id="manifesto" className="h-screen flex items-center justify-center bg-[var(--background)] px-6 relative z-10">
      <div className="max-w-5xl mx-auto text-center" ref={textRef}>
        <h2 className="text-manifesto font-editorial italic text-[var(--ink)] flex flex-wrap justify-center gap-x-4 gap-y-2">
          {text.split(" ").map((word, i) => (
            <span key={i} className="word inline-block">{word}</span>
          ))}
        </h2>
      </div>
    </section>
  );
}
