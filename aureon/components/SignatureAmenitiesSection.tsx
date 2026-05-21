"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import SectionLabel from "./ui/SectionLabel";

const AMENITIES = [
  { title: "The Vault", image: "/images/amenities/vault.png" },
  { title: "Horizon Pool", image: "/images/amenities/pool.png" },
  { title: "Sanctuary Spa", image: "/images/amenities/spa.png" }
];

export default function SignatureAmenitiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      imagesRef.current.forEach((img, i) => {
        if (!img) return;
        gsap.fromTo(img, 
          { y: "20%", scale: 1.1 },
          {
            y: "-20%",
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="amenities" className="py-32 w-full bg-[var(--background)] relative z-10">
      <div className="px-12 mb-24">
        <SectionLabel index="03" title="Amenities" className="!text-[var(--ink)] [&>div]:bg-[var(--ink)] [&>span:first-child]:text-[var(--bronze)]" />
      </div>

      <div className="flex flex-col gap-32 px-12 md:px-24">
        {AMENITIES.map((amenity, idx) => (
          <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}>
            <div className="w-full md:w-1/2 overflow-hidden h-[60vh] relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                ref={el => { imagesRef.current[idx] = el; }}
                src={amenity.image} 
                alt={amenity.title} 
                className="w-full h-[140%] object-cover absolute top-[-20%] left-0" 
              />
              {/* Fallback overlay */}
              <div className="absolute inset-0 bg-[var(--stone)]/20 -z-10" />
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <h3 className="text-5xl md:text-7xl font-editorial italic text-[var(--ink)]">{amenity.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
