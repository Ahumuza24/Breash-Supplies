"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const slides = [
  { image: "/images/hero-hospital.webp", kicker: "Medical equipment", title: <>Reliable equipment.<br />Better healthcare.</>, body: "Quality medical equipment and dependable support for hospitals, clinics and healthcare organisations across Uganda." },
  { image: "/images/hero-lab.webp", kicker: "Laboratory solutions", title: <>Precision starts with<br />what you trust.</>, body: "Laboratory equipment, test kits, reagents and consumables selected to support accurate, efficient workflows." },
  { image: "/images/hero-supplies.webp", kicker: "Medical consumables", title: <>Everyday essentials.<br />Always within reach.</>, body: "A responsive supply partner for the products your healthcare teams depend on, every day." },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
  const copyRef = useRef<HTMLDivElement>(null);
  const previousSlide = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % slides.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused]);

  useLayoutEffect(() => {
    const image = imagesRef.current[active];
    const copy = copyRef.current;
    if (!image || !copy) return;

    const previous = previousSlide.current === null ? null : imagesRef.current[previousSlide.current];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.killTweensOf([...imagesRef.current.filter(Boolean), copy]);

    if (reduceMotion) {
      gsap.set(imagesRef.current, { autoAlpha: 0, scale: 1 });
      gsap.set([image, copy], { autoAlpha: 1, y: 0 });
    } else {
      const timeline = gsap.timeline();
      if (previous && previous !== image) timeline.to(previous, { autoAlpha: 0, scale: 1.03, duration: 1.15, ease: "power2.inOut" }, 0);
      timeline
        .fromTo(image, { autoAlpha: 0, scale: 1.09 }, { autoAlpha: 1, scale: 1, duration: 1.5, ease: "power2.out" }, 0)
        .fromTo(copy, { autoAlpha: 0, y: 28 }, { autoAlpha: 1, y: 0, duration: 0.8, ease: "power3.out" }, 0.18);
    }

    previousSlide.current = active;
  }, [active]);

  return (
    <section className="hero" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hero-images" aria-hidden="true">{slides.map((slide, index) => <Image ref={node => { imagesRef.current[index] = node; }} src={slide.image} alt="" fill sizes="100vw" priority={index === 0} key={slide.image} />)}</div>
      <div className="hero-scrim" />
      <div className="site-shell hero-inner">
        <div className="hero-copy" ref={copyRef}>
          <span className="hero-kicker"><i /> {slides[active].kicker}</span>
          <h1>{slides[active].title}</h1><p>{slides[active].body}</p>
          <div className="hero-actions"><Link className="button button-cyan" href="/contact">Request a quote <ArrowUpRight size={18} /></Link><Link className="button button-ghost" href="/products">Explore products</Link></div>
        </div>
        
      </div>
    </section>
  );
}
