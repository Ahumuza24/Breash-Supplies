import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell footer-grid">
        <div className="footer-brand"><Image src="/images/breash-logo-trimmed.png" alt="Breash Supplies" width={190} height={53} /><p>Quality medical equipment, consumables and healthcare solutions supporting better care across Uganda.</p></div>
        <div><h3>Explore</h3><Link href="/about">About us</Link><Link href="/products">Products & services</Link><Link href="/contact">Request a quote</Link></div>
        <div><h3>Contact</h3><a href="tel:+256775207695"><Phone size={15} /> +256 775 207695</a><a href="mailto:breashsupplies@gmail.com"><Mail size={15} /> breashsupplies@gmail.com</a><span><MapPin size={15} /> Mabirizi Complex, Level 4</span></div>
        <div className="footer-action"><h3>Ready to source?</h3><Link href="/contact">Start an enquiry <ArrowUpRight size={19} /></Link></div>
      </div>
      <div className="site-shell footer-bottom"><span>© {new Date().getFullYear()} Breash Supplies Ltd.</span><span>Reliable supply. Better healthcare.</span></div>
    </footer>
  );
}
