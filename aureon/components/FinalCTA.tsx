"use client";

import { useEffect, useRef, useState } from "react";
import MagneticButton from "./ui/MagneticButton";

export default function FinalCTA() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: { x: number, y: number, r: number, d: number }[] = [];
    const W = window.innerWidth;
    const H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 1,
        d: Math.random() * 50
      });
    }

    let angle = 0;
    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(200, 169, 106, 0.4)";
      ctx.beginPath();
      for (let i = 0; i < 50; i++) {
        let p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      update();
      animationId = requestAnimationFrame(draw);
    };

    const update = () => {
      angle += 0.01;
      for (let i = 0; i < 50; i++) {
        let p = particles[i];
        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        p.x += Math.sin(angle) * 2;
        if (p.x > W + 5 || p.x < -5 || p.y > H) {
          if (i % 3 > 0) {
            particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
          } else {
            if (Math.sin(angle) > 0) {
              particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
            } else {
              particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
            }
          }
        }
      }
    };

    draw();

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section id="cta" className="h-screen w-full bg-[var(--ink)] relative z-10 flex flex-col items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-30" />
      
      <div className="relative z-10 text-center flex flex-col items-center gap-12">
        <h2 className="text-6xl md:text-8xl font-editorial italic text-[var(--surface)]">
          Begin the <br/> Dialogue.
        </h2>
        
        <MagneticButton 
          onClick={() => setIsModalOpen(true)}
          className="text-lg px-12 py-6"
        >
          Request Consultation
        </MagneticButton>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/80 backdrop-blur-md">
          <div className="bg-[var(--surface)] p-12 max-w-lg w-full text-center relative rounded-sm">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-[var(--muted-ink)] hover:text-[var(--ink)]"
            >
              ✕
            </button>
            <h3 className="text-3xl font-editorial text-[var(--ink)] mb-6">Private Consultation</h3>
            <p className="text-[var(--muted-ink)] mb-8">Access is strictly by invitation or verified inquiry. Please provide your details.</p>
            <form className="flex flex-col gap-4 text-left" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <input type="text" placeholder="Name" className="bg-transparent border-b border-[var(--stone)] p-3 focus:outline-none focus:border-[var(--ink)]" required />
              <input type="email" placeholder="Email" className="bg-transparent border-b border-[var(--stone)] p-3 focus:outline-none focus:border-[var(--ink)]" required />
              <button type="submit" className="mt-8 bg-[var(--ink)] text-white py-4 uppercase tracking-widest text-xs hover:bg-[var(--bronze)] transition-colors">Submit Inquiry</button>
            </form>
          </div>
        </div>
      )}

      {/* Footer Credits */}
      <div className="absolute bottom-6 w-full text-center z-20">
        <p className="text-[var(--muted-ink)] text-sm tracking-widest uppercase font-sans">
          Developed by{" "}
          <a
            href="https://linktr.ee/karthikeyathallapally"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--champagne)] hover:text-[var(--surface)] transition-colors"
          >
            MarketingKO labs
          </a>
        </p>
      </div>
    </section>
  );
}
