"use client";

import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";

type Client = { name: string; image: string };

export function ClientsMarquee({ clients }: { clients: Client[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = gsap.fromTo(track, { xPercent: -50 }, {
      xPercent: 0,
      duration: 30,
      ease: "none",
      repeat: -1,
    });

    const pause = () => animation.pause();
    const resume = () => animation.resume();
    track.parentElement?.addEventListener("mouseenter", pause);
    track.parentElement?.addEventListener("mouseleave", resume);
    return () => {
      track.parentElement?.removeEventListener("mouseenter", pause);
      track.parentElement?.removeEventListener("mouseleave", resume);
      animation.kill();
    };
  }, []);

  return (
    <div className="clients-marquee" role="region" aria-label="Our clients">
      <div className="clients-marquee-track" ref={trackRef}>
        {[0, 1].map((group) => (
          <div className="clients-logo-group" aria-hidden={group === 1} key={group}>
            {clients.map((client) => (
              <div className="client-logo" key={`${group}-${client.name}`}>
                <Image src={client.image} alt={group === 0 ? client.name : ""} fill sizes="(max-width: 720px) 174px, 220px" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
