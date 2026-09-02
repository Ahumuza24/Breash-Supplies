"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products & Services" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}>
      <div className="site-shell header-inner">
        <Link href="/" className="brand" aria-label="Breash Supplies home"><Image src="/images/breash-logo-trimmed.png" alt="Breash Supplies" width={180} height={50} priority /></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">{links.map(link => <Link className={pathname === link.href ? "active" : ""} href={link.href} key={link.href}>{link.label}</Link>)}</nav>
        <Link className="header-cta" href="/contact">Request a quote <ArrowUpRight size={16} /></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X /> : <Menu />}</button>
      </div>
      <nav className="mobile-nav" aria-label="Mobile navigation">
        {links.map((link, index) => <Link style={{ "--nav-index": index } as CSSProperties} href={link.href} key={link.href}>{link.label}</Link>)}
        <Link className="button button-cyan" href="/contact">Request a quote</Link>
      </nav>
    </header>
  );
}
