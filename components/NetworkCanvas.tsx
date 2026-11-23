'use client';

import { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

export default function NetworkCanvas({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext('2d');
    const isDark = variant === 'dark';
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let nodes: Node[] = [];
    let rafId = 0;

    function setup() {
      if (!canvas || !parent) return;
      w = parent.offsetWidth;
      h = parent.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const isSmall = w < 760;
      const count = isSmall ? 22 : 42;
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h * 0.85,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 1,
      }));
    }

    function draw() {
      if (!ctx) return;
      const isSmall = w < 760;
      const maxDist = isSmall ? 110 : 150;
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h * 0.85) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const op = (1 - dist / maxDist) * 0.35;
            ctx.strokeStyle = isDark
              ? `rgba(243,206,79,${op})`
              : `rgba(241,182,11,${op})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(243,206,79,0.5)' : 'rgba(10,13,16,0.45)';
        ctx.fill();
      }

      rafId = requestAnimationFrame(draw);
    }

    setup();
    draw();
    window.addEventListener('resize', setup);
    return () => {
      window.removeEventListener('resize', setup);
      cancelAnimationFrame(rafId);
    };
    }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_bottom,black_55%,transparent_96%)]"
    />
  );
}
