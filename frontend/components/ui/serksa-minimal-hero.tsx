"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Map } from "lucide-react";

export default function SerksaMinimalHero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setSize();

    type Particle = {
      x: number;
      y: number;
      speed: number;
      opacity: number;
      fadeDelay: number;
      fadeStart: number;
      fadingOut: boolean;
    };

    let particles: Particle[] = [];
    let raf = 0;

    const count = () => Math.floor((canvas.width * canvas.height) / 7000);

    const make = (): Particle => {
      const fadeDelay = Math.random() * 600 + 100;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() / 5 + 0.1,
        opacity: 0.7,
        fadeDelay,
        fadeStart: Date.now() + fadeDelay,
        fadingOut: false,
      };
    };

    const reset = (p: Particle) => {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      p.speed = Math.random() / 5 + 0.1;
      p.opacity = 0.7;
      p.fadeDelay = Math.random() * 600 + 100;
      p.fadeStart = Date.now() + p.fadeDelay;
      p.fadingOut = false;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < count(); i++) particles.push(make());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) reset(p);
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true;
        if (p.fadingOut) {
          p.opacity -= 0.008;
          if (p.opacity <= 0) reset(p);
        }
        ctx.fillStyle = `rgba(30, 30, 30, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, 0.6, Math.random() * 2 + 1);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      setSize();
      init();
    };

    window.addEventListener("resize", onResize);
    init();
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="serksa-minimal-root">
      <style>{`
.serksa-minimal-root, .serksa-minimal-root * {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.serksa-minimal-root {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #fafafa;
  color: #171717;
}

/* hero center */
.serksa-hero {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  text-align: center;
  pointer-events: none;
  z-index: 10;
}
.serksa-kicker {
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #737373;
  margin-bottom: 14px;
}
.serksa-title {
  font-weight: 600;
  font-size: clamp(40px, 10vw, 96px);
  line-height: 0.95;
  margin: 0;
  color: #171717;
  text-shadow: none;
}
.serksa-subtitle {
  margin-top: 18px;
  font-size: clamp(16px, 2.5vw, 20px);
  color: #525252;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* accent lines container */
.serksa-accent-lines {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
}

/* base line visuals */
.serksa-hline, .serksa-vline {
  position: absolute;
  background: #262626;
  opacity: .2;
  will-change: transform, opacity;
}

/* horizontal lines */
.serksa-hline {
  height: 1px; left: 0; right: 0;
  transform: scaleX(0);
  transform-origin: 50% 50%;
  animation: drawX 800ms cubic-bezier(.22,.61,.36,1) forwards;
}
.serksa-hline:nth-child(1){ top: 20%; animation-delay: 150ms; }
.serksa-hline:nth-child(2){ top: 50%; animation-delay: 280ms; }
.serksa-hline:nth-child(3){ top: 80%; animation-delay: 410ms; }

/* vertical lines */
.serksa-vline {
  width: 1px; top: 0; bottom: 0;
  transform: scaleY(0);
  transform-origin: 50% 0%;
  animation: drawY 900ms cubic-bezier(.22,.61,.36,1) forwards;
}
.serksa-vline:nth-child(4){ left: 20%; animation-delay: 520ms; }
.serksa-vline:nth-child(5){ left: 50%; animation-delay: 640ms; }
.serksa-vline:nth-child(6){ left: 80%; animation-delay: 760ms; }

/* subtle gradient shimmer while drawing */
.serksa-hline::after, .serksa-vline::after{
  content:"";
  position:absolute;
  inset:0;
  background: linear-gradient(90deg, transparent, rgba(30,30,30,.15), transparent);
  opacity:0;
  animation: shimmer 900ms ease-out forwards;
}
.serksa-hline:nth-child(1)::after{ animation-delay: 150ms; }
.serksa-hline:nth-child(2)::after{ animation-delay: 280ms; }
.serksa-hline:nth-child(3)::after{ animation-delay: 410ms; }
.serksa-vline:nth-child(4)::after{ animation-delay: 520ms; }
.serksa-vline:nth-child(5)::after{ animation-delay: 640ms; }
.serksa-vline:nth-child(6)::after{ animation-delay: 760ms; }

/* keyframes */
@keyframes drawX {
  0% { transform: scaleX(0); opacity: 0; }
  60% { opacity: .3; }
  100% { transform: scaleX(1); opacity: .2; }
}
@keyframes drawY {
  0% { transform: scaleY(0); opacity: 0; }
  60% { opacity: .3; }
  100% { transform: scaleY(1); opacity: .2; }
}
@keyframes shimmer {
  0% { opacity: .0; }
  30% { opacity: .2; }
  100% { opacity: 0; }
}

/* canvas */
.serksa-particleCanvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  mix-blend-mode: multiply;
  opacity: .3;
  z-index: 0;
}

/* CTA buttons */
.serksa-cta-container {
  margin-top: 32px;
  display: flex;
  gap: 12px;
  justify-content: center;
  pointer-events: auto;
}
      `}</style>

      {/* Particles */}
      <canvas ref={canvasRef} className="serksa-particleCanvas" />

      {/* Accent Lines */}
      <div className="serksa-accent-lines">
        <div className="serksa-hline" />
        <div className="serksa-hline" />
        <div className="serksa-hline" />
        <div className="serksa-vline" />
        <div className="serksa-vline" />
        <div className="serksa-vline" />
      </div>

      {/* Hero */}
      <main className="serksa-hero">
        <div>
          <div className="serksa-kicker">Visual Learning</div>
          <h1 className="serksa-title">
            System Design,<br />
            Explained Visually
          </h1>
          <p className="serksa-subtitle">
            Master how apps like Instagram and WhatsApp work—through interactive diagrams and real-world analogies
          </p>

          <div className="serksa-cta-container">
            <Link href="/learn">
              <Button size="lg" className="gap-2 rounded-full px-6">
                <Map className="w-5 h-5" />
                Start Learning Path
              </Button>
            </Link>
            <Link href="/concepts">
              <Button size="lg" variant="outline" className="gap-2 rounded-full px-6 border-gray-300 hover:bg-gray-100">
                <BookOpen className="w-5 h-5" />
                Browse Concepts
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </section>
  );
}
