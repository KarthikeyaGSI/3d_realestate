"use client";

import { useEffect, useRef, useState } from "react";
import SectionLabel from "./ui/SectionLabel";

export default function PrivateAccessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const element = sectionRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseenter", () => setIsHovering(true));
      element.addEventListener("mouseleave", () => setIsHovering(false));
    }

    return () => {
      if (element) {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseenter", () => setIsHovering(true));
        element.removeEventListener("mouseleave", () => setIsHovering(false));
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="private-access" className="py-32 w-full bg-[#0a0a0a] relative z-10 overflow-hidden cursor-none">
      <div className="absolute top-12 left-12 z-20">
        <SectionLabel index="05" title="Access" />
      </div>

      <div className="max-w-4xl mx-auto py-32 px-6 relative">
        {/* Hidden text that reveals on hover with mask */}
        <h2 className="text-5xl md:text-7xl font-editorial italic text-white/5 text-center leading-tight">
          True luxury is <br/> invisibility.
        </h2>

        <div 
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 flex items-center justify-center"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(200,169,106,0.15), transparent 40%)`
          }}
        >
          <h2 
            className="text-5xl md:text-7xl font-editorial italic text-[var(--champagne)] text-center leading-tight w-full"
            style={{
              clipPath: `circle(150px at ${mousePos.x}px ${mousePos.y}px)`
            }}
          >
            True luxury is <br/> invisibility.
          </h2>
        </div>
      </div>
    </section>
  );
}
