"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(node, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.fromTo(node, { autoAlpha: 0, y: 34 }, {
        autoAlpha: 1,
        y: 0,
        duration: 0.85,
        delay: delay / 1000,
        ease: "power3.out",
        scrollTrigger: { trigger: node, start: "top 88%", once: true },
      });
    }, node);
    return () => context.revert();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
