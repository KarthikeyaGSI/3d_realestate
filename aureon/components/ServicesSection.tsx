"use client";

import { useState } from "react";
import SectionLabel from "./ui/SectionLabel";
import { cn } from "@/lib/utils";
import MagneticButton from "./ui/MagneticButton";
import { getLenis } from "@/lib/lenis";

const SERVICES = [
  { id: "buy", title: "Acquire", image: "/images/services/buy.png" },
  { id: "sell", title: "Commission", image: "/images/services/sell.png" },
  { id: "rent", title: "Experience", image: "/images/services/rent.png" }
];

export default function ServicesSection() {
  const [active, setActive] = useState<string>("buy");

  const handleCtaClick = () => {
    const target = document.querySelector("#cta");
    if (!target) return;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: 0, duration: 2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="h-screen w-full bg-[var(--ink)] text-[var(--surface)] relative z-10 flex flex-col">
      <div className="pt-12 pl-12 shrink-0">
        <SectionLabel index="04" title="Services" />
      </div>

      <div className="flex-1 flex w-full h-full mt-12 overflow-hidden">
        {SERVICES.map((service) => {
          const isActive = active === service.id;
          return (
            <div 
              key={service.id}
              onMouseEnter={() => setActive(service.id)}
              className={cn(
                "h-full relative transition-all duration-700 ease-[var(--ease-out-aureon)] border-r border-white/10 last:border-0 cursor-pointer overflow-hidden flex flex-col justify-end pb-24 px-12 group",
                isActive ? "w-[60%]" : "w-[20%]"
              )}
            >
              <div 
                className={cn(
                  "absolute inset-0 bg-center bg-cover transition-transform duration-1000 ease-[var(--ease-out-aureon)]",
                  isActive ? "scale-100 opacity-60" : "scale-110 opacity-20 grayscale"
                )}
                style={{ backgroundImage: `url(${service.image})` }}
              />
              {/* Fallback bg */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] to-transparent z-10" />
              
              <div className="relative z-20 flex flex-col gap-6">
                <h3 className={cn(
                  "font-editorial transition-all duration-700 whitespace-nowrap",
                  isActive ? "text-7xl italic text-[var(--champagne)]" : "text-3xl text-[var(--muted-ink)] -rotate-90 origin-left translate-y-24"
                )}>
                  {service.title}
                </h3>
                
                <div className={cn(
                  "transition-all duration-700 delay-100 overflow-hidden",
                  isActive ? "opacity-100 max-h-[100px]" : "opacity-0 max-h-0"
                )}>
                  <MagneticButton 
                    onClick={handleCtaClick}
                    className="bg-transparent border border-[var(--champagne)] hover:bg-[var(--champagne)] hover:text-[var(--ink)] text-[var(--champagne)]"
                  >
                    Inquire Now
                  </MagneticButton>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
