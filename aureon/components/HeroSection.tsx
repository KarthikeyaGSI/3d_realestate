"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { prefersReducedMotion } from "@/lib/utils";

/* ─── Config ─── */
const TOTAL_FRAMES = 180;
const FRAME_PATH = "/frames/frame_";
const FRAME_EXT = ".png";

const pad = (n: number) => String(n).padStart(6, "0");
const frameUrl = (i: number) => `${FRAME_PATH}${pad(i)}${FRAME_EXT}`;

const COPY_SEQUENCE = [
  { text: "AUREON", type: "title" as const, start: 0, end: 20 },
  { text: "Some structures are built.", type: "line" as const, start: 15, end: 35 },
  { text: "Others are summoned.", type: "line" as const, start: 30, end: 50 },
  { text: "Private worlds.", type: "accent" as const, start: 45, end: 65 },
  { text: "Suspended beyond expectation.", type: "line" as const, start: 60, end: 85 },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bloomRef = useRef<HTMLDivElement>(null);
  const copyRefs = useRef<(HTMLDivElement | null)[]>([]);
  const finalTextRef = useRef<HTMLDivElement>(null);
  const fogRef = useRef<HTMLDivElement>(null);
  const cloudBackRef = useRef<HTMLDivElement>(null);
  const cloudMidRef = useRef<HTMLDivElement>(null);
  const cloudForeRef = useRef<HTMLDivElement>(null);
  const cloudUltraRef = useRef<HTMLDivElement>(null);
  const images = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrame = useRef(0);
  const [loadProgress, setLoadProgress] = useState(0);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = images.current[index];
    if (!canvas || !img) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const scale = Math.max(cw / iw, ch / ih);
    const sw = iw * scale;
    const sh = ih * scale;
    const imgRatio = sw / sh;
    const canvasRatio = cw / ch;
    let drawWidth, drawHeight, drawX, drawY;

    if (canvasRatio > imgRatio) {
      drawWidth = cw;
      drawHeight = cw / imgRatio;
      drawX = 0;
      drawY = (ch - drawHeight) / 2;
    } else {
      drawHeight = ch;
      drawWidth = ch * imgRatio;
      drawY = 0;
      drawX = (cw - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
  }, []);

  /* ─── Canvas resize + frame preload ─── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      drawFrame(currentFrame.current);
    };
    resize();
    window.addEventListener("resize", resize);

    let loadedCount = 0;
    let cancelled = false;

    const loadImage = (index: number): Promise<void> =>
      new Promise((resolve) => {
        if (cancelled || images.current[index]) { resolve(); return; }
        const img = new Image();
        img.onload = () => {
          if (cancelled) { resolve(); return; }
          images.current[index] = img;
          loadedCount++;
          const currentProgress = Math.round((loadedCount / TOTAL_FRAMES) * 100);
          setLoadProgress(currentProgress);
          
          // Dispatch global progress event for the Preloader
          window.dispatchEvent(new CustomEvent("hero-progress", { detail: { percent: currentProgress } }));

          /* Draw immediately if this is the current target frame */
          if (index === currentFrame.current) {
            drawFrame(index);
          }
          resolve();
        };
        img.onerror = () => resolve();
        img.src = frameUrl(index);
      });

    const preload = async () => {
      // 1. Load the first frame immediately so the screen isn't blank
      await loadImage(0);
      drawFrame(0);

      // Force GSAP to recalculate the scroll height now that the first frame is painted
      ScrollTrigger.refresh();

      // 2. Load the rest in small batches of 5 to prevent Next.js dev server timeouts
      const BATCH_SIZE = 5;
      for (let i = 1; i < TOTAL_FRAMES; i += BATCH_SIZE) {
        if (cancelled) return;
        const batch = [];
        for (let j = 0; j < BATCH_SIZE; j++) {
          if (i + j < TOTAL_FRAMES) {
            batch.push(loadImage(i + j));
          }
        }
        await Promise.all(batch);
      }
    };

    preload();

    return () => {
      cancelled = true;
      window.removeEventListener("resize", resize);
    };
  }, [drawFrame]);

  /* ─── Main Animation Controller ─── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const wrapper = section.parentElement;
    if (!wrapper) return;

    const ctx = gsap.context(() => {
      /* Map scroll progress through hero-root → frame index (first 60% of scroll) */
      ScrollTrigger.create({
        trigger: wrapper,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate: (self) => {
          /* Animate frames during the ENTIRE wrapper scroll */
          const frameProgress = self.progress;
          const targetIndex = Math.min(
            Math.floor(frameProgress * (TOTAL_FRAMES - 1)),
            TOTAL_FRAMES - 1
          );

          let bestIndex = targetIndex;
          if (!images.current[targetIndex]) {
            bestIndex = 0;
            for (let offset = 1; offset < TOTAL_FRAMES; offset++) {
              const lo = targetIndex - offset;
              const hi = targetIndex + offset;
              if (lo >= 0 && images.current[lo]) { bestIndex = lo; break; }
              if (hi < TOTAL_FRAMES && images.current[hi]) { bestIndex = hi; break; }
            }
          }

          if (bestIndex !== currentFrame.current) {
            currentFrame.current = bestIndex;
            drawFrame(bestIndex);
          }
        },
      });

      /* Golden bloom across first 55% of wrapper scroll */
      if (bloomRef.current) {
        gsap.fromTo(
          bloomRef.current,
          { opacity: 0.05 },
          {
            opacity: 0.45,
            ease: "none",
            scrollTrigger: {
              trigger: wrapper,
              start: "top top",
              end: "55% bottom",
              scrub: 1,
            },
          }
        );
      }

      /* ─── Cloud sweep across the screen between 55% and 95% scroll ─── */
      if (cloudBackRef.current && cloudMidRef.current && cloudForeRef.current && cloudUltraRef.current && fogRef.current) {
        const cloudTl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "55% top", 
            end: "95% top",   
            scrub: true,
          },
        });

        // Layer 1: Back (moves slowest, starts early)
        cloudTl.fromTo(
          cloudBackRef.current,
          { y: "100vh", opacity: 0 },
          { y: "-150vh", opacity: 0.8, duration: 1.5, ease: "none" },
          0
        );
        
        // Layer 2: Mid
        cloudTl.fromTo(
          cloudMidRef.current,
          { y: "100vh", opacity: 0 },
          { y: "-180vh", opacity: 0.9, duration: 1.5, ease: "none" },
          0.15
        );
        
        // Layer 3: Fore
        cloudTl.fromTo(
          cloudForeRef.current,
          { y: "110vh", opacity: 0 },
          { y: "-220vh", opacity: 1, duration: 1.5, ease: "none" },
          0.3
        );

        // Layer 4: Ultra (moves fastest, starts latest)
        cloudTl.fromTo(
          cloudUltraRef.current,
          { y: "120vh", opacity: 0 },
          { y: "-260vh", opacity: 1, duration: 1.5, ease: "none" },
          0.45
        );

        // The fog layer completely obliterates the video background to pure dense mist
        // Delayed heavily so clouds are clearly visible against the dark video before turning white
        cloudTl.fromTo(fogRef.current, 
          { opacity: 0 }, 
          { opacity: 1, duration: 1, ease: "power2.in" }, 
          0.8
        );
      }

      /* ─── Final Text Block Entrance (75% to 95%) ─── */
      if (finalTextRef.current) {
        gsap.fromTo(
          finalTextRef.current,
          { opacity: 0, y: 80, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: wrapper,
              start: "75% top",
              end: "95% top",
              scrub: true,
            },
          }
        );
      }

      /* ─── Copy sequence based on start/end percentages ─── */
      const total = COPY_SEQUENCE.length;

      copyRefs.current.forEach((el, i) => {
        if (!el) return;

        const { start, end } = COPY_SEQUENCE[i];

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: `${start}% top`,
            end: `${end}% top`,
            scrub: 1.5, // Smoother scrub for elegant typography
          },
        });

        // Elegant, calm vertical parallax fade without the intense 3D camera sweeps
        tl.fromTo(
          el,
          { opacity: 0, y: 100, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power2.out" }
        );
        tl.to(
          el,
          { opacity: 0, y: -100, scale: 1.05, duration: 0.6, ease: "power2.in" }
        );
      });
    }, section);

    return () => ctx.revert();
  }, [drawFrame]);

  /* ─── Page load entrance ─── */
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({ delay: 2.0 }); // Wait for preloader to finish

    if (overlayRef.current) {
      tl.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 1.6 }, 0);
    }

    if (copyRefs.current[0]) {
      tl.fromTo(
        copyRefs.current[0],
        { opacity: 0, y: 60, scale: 0.88 },
        { opacity: 1, y: 0, scale: 1, duration: 1.4, ease: "power3.out" },
        0.2
      );
    }
  }, []);

  return (
    /* sticky replaces the GSAP pin — stays at top while #hero-root scrolls */
    <section
      ref={sectionRef}
      id="hero"
      className="sticky top-0 w-full h-screen overflow-hidden"
      style={{ zIndex: 10 }}
      aria-label="Hero — Scroll to explore"
    >
      {/* Frame canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />

      {/* Cinematic vignette */}
      <div
        ref={overlayRef}
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `
            linear-gradient(180deg, rgba(23,19,15,0.3) 0%, rgba(23,19,15,0.0) 30%, rgba(23,19,15,0.0) 60%, rgba(23,19,15,0.45) 100%),
            linear-gradient(90deg, rgba(23,19,15,0.2) 0%, transparent 25%, transparent 75%, rgba(23,19,15,0.2) 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Golden bloom */}
      <div
        ref={bloomRef}
        className="absolute inset-0 pointer-events-none z-[3]"
        style={{
          background:
            "radial-gradient(ellipse 65% 45% at 50% 25%, rgba(200,169,106,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Dense Fog Layer - fades in to completely obscure the video behind clouds */}
      <div
        ref={fogRef}
        className="absolute inset-0 pointer-events-none z-[4] opacity-0"
        style={{ background: "#e8e5df" }}
        aria-hidden="true"
      />

      {/* Clouds Overlay Container */}
      <div 
        className="absolute inset-0 pointer-events-none z-[5] overflow-visible"
        style={{ mixBlendMode: "screen" }}
      >
        {/* Layer 1: Back Cloud */}
        <div
          ref={cloudBackRef}
          className="absolute inset-0"
          style={{ mixBlendMode: "screen", filter: "blur(8px)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/cloud-overlay.png" 
            alt="" 
            className="w-full h-[200vh] object-cover" 
            style={{ 
              transform: "scale(1.4)", 
              objectPosition: "center",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)"
            }} 
          />
        </div>
        {/* Layer 2: Mid Cloud */}
        <div
          ref={cloudMidRef}
          className="absolute inset-0"
          style={{ mixBlendMode: "screen", filter: "blur(4px)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/cloud-overlay.png" 
            alt="" 
            className="w-full h-[200vh] object-cover" 
            style={{ 
              transform: "scaleX(-1) scaleY(1.2)", 
              objectPosition: "center",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)"
            }} 
          />
        </div>
        {/* Layer 3: Fore Cloud */}
        <div
          ref={cloudForeRef}
          className="absolute inset-0"
          style={{ mixBlendMode: "screen" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/cloud-overlay.png" 
            alt="" 
            className="w-full h-[200vh] object-cover" 
            style={{ 
              transform: "scale(1.1)", 
              objectPosition: "center",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)"
            }} 
          />
        </div>
      </div>

      {/* 3D Flying Text Blocks */}
      <div className="absolute inset-0 pointer-events-none z-[6] flex items-center justify-center perspective-[1000px]">
        {COPY_SEQUENCE.map((copy, i) => (
          <div
            key={i}
            ref={(el) => { copyRefs.current[i] = el; }}
            className="absolute text-center opacity-0"
            style={{ transformStyle: "preserve-3d" }}
          >
            {copy.type === "title" && (
              <h1 className="text-hero text-[var(--champagne)] font-light tracking-[0.2em] uppercase">
                {copy.text}
              </h1>
            )}
            {copy.type === "line" && (
              <p className="text-3xl md:text-5xl font-display font-light text-white tracking-wide">
                {copy.text}
              </p>
            )}
            {copy.type === "accent" && (
              <p className="text-4xl md:text-6xl font-editorial italic text-[var(--champagne)]">
                {copy.text}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Final Summary Text before transition out */}
      <div 
        ref={finalTextRef}
        className="absolute bottom-24 left-12 md:left-24 z-[7] opacity-0"
      >
        <p className="text-xl md:text-3xl font-editorial italic text-[var(--surface)] max-w-lg leading-relaxed">
          Sanctuaries designed to silence the noise of the world.
        </p>
      </div>

    </section>
  );
}
