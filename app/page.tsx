import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  FlaskConical,
  HeartPulse,
  Microscope,
  ShieldCheck,
  Stethoscope,
  Truck,
  Wrench,
} from "lucide-react";
import { Hero } from "./components/Hero";
import { Reveal } from "./components/Reveal";
import { ClientsMarquee } from "./components/ClientsMarquee";

const categories = [
  { number: "01", title: "Medical consumables", copy: "Everyday essentials for safe, uninterrupted care, from gloves and syringes to gauze, masks and disinfectants.", icon: Boxes },
  { number: "02", title: "Diagnostic equipment", copy: "Dependable tools for confident patient assessment, including monitors, thermometers, stethoscopes and glucometers.", icon: Stethoscope },
  { number: "03", title: "Hospital equipment", copy: "Patient beds, wheelchairs, stretchers, oxygen concentrators and the equipment that keeps facilities ready.", icon: HeartPulse },
  { number: "04", title: "Laboratory supplies", copy: "Microscopes, test kits, reagents and consumables selected to support reliable laboratory workflows.", icon: Microscope },
];

const advantages = [
  { title: "Quality assured", copy: "Certified products selected for professional healthcare environments.", icon: ShieldCheck },
  { title: "Reliable delivery", copy: "A responsive supply chain that keeps your facility prepared.", icon: Truck },
  { title: "Professional support", copy: "Knowledgeable guidance before, during and after every order.", icon: BadgeCheck },
];

const clients = [
  { name: "Cerba Lancet Uganda", image: "/images/cerba-lancet-uganda.jpeg" },
  { name: "Cipla Quality Chemical", image: "/images/cipla-qc.png" },
  { name: "DEI Pharma", image: "/images/dei-pharma.png" },
  { name: "Joint Clinical Research Centre", image: "/images/jcrc.png" },
  { name: "Uganda Coffee Development Authority", image: "/images/ucda.png" },
  { name: "Uganda Prisons Service", image: "/images/uganda-prisons.png" },
];

export default function Home() {
  return (
    <main>
      <Hero />
      <section className="client-strip" aria-label="Organisations we serve">
        <div className="site-shell client-strip-inner">
          <span className="eyebrow dark">Built for healthcare delivery</span>
          <div className="client-list"><span>Hospitals</span><i /><span>Clinics</span><i /><span>Laboratories</span><i /><span>NGOs</span><i /><span>Government</span></div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="site-shell intro-grid">
          <Reveal className="intro-title">
            <span className="eyebrow">Your healthcare supply partner</span>
            <h2>Better care begins with the right tools.</h2>
          </Reveal>
          <Reveal className="intro-copy" delay={120}>
            <p className="lead-copy">Healthcare teams should never have to compromise on the products they rely on.</p>
            <p>Breash Supplies helps organisations across Uganda source dependable medical equipment, consumables and laboratory solutions with responsive service and competitive pricing.</p>
            <Link className="text-link" href="/about">Meet Breash Supplies <ArrowUpRight size={17} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section products-section" id="products">
        <div className="site-shell">
          <Reveal className="section-heading-row">
            <div><span className="eyebrow">What we supply</span><h2>One dependable source.<br />Everyday clinical needs.</h2></div>
            <p>From routine restocking to equipping an entire facility, we help you procure with clarity and confidence.</p>
          </Reveal>
          <div className="category-grid">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Reveal className="category-card" delay={index * 70} key={category.title}>
                  <div className="category-top"><span>{category.number}</span><Icon size={24} strokeWidth={1.6} /></div>
                  <div><h3>{category.title}</h3><p>{category.copy}</p></div>
                  <Link href="/products" aria-label={`Explore ${category.title}`}><ArrowUpRight size={20} /></Link>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="ppe-note">
            <FlaskConical size={22} />
            <p><strong>Also supplying personal protective equipment</strong> including coveralls, face shields and respirators.</p>
            <Link href="/products">View full range <ArrowUpRight size={16} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section support-section">
        <div className="site-shell support-grid">
          <Reveal className="support-visual">
            <Image src="/images/hero-hospital.webp" alt="Breash Supplies technician installing and maintaining hospital equipment" fill sizes="(max-width: 720px) 100vw, 50vw" />
            <div className="support-visual-scrim" />
            <div className="support-caption"><Wrench size={20} /><span>Installation<br />Training<br />Maintenance</span></div>
          </Reveal>
          <Reveal className="support-content" delay={100}>
            <span className="eyebrow cyan">Support beyond supply</span>
            <h2>Equipment is only valuable when it works for your team.</h2>
            <p>For applicable equipment, our service continues after delivery. We help your team install, understand and maintain the systems you invest in.</p>
            <div className="support-services">
              <span><b>01</b> Equipment installation</span><span><b>02</b> Practical user training</span><span><b>03</b> Maintenance support</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section advantage-section">
        <div className="site-shell">
          <Reveal className="advantage-header"><span className="eyebrow">Why Breash</span><h2>Procurement without the uncertainty.</h2></Reveal>
          <div className="advantage-grid">
            {advantages.map((item, index) => {
              const Icon = item.icon;
              return <Reveal className="advantage-item" delay={index * 90} key={item.title}><Icon size={30} strokeWidth={1.5} /><div><h3>{item.title}</h3><p>{item.copy}</p></div></Reveal>;
            })}
          </div>
        </div>
      </section>

      <section className="clients-section" aria-labelledby="clients-heading">
        <Reveal className="site-shell clients-heading">
          <span className="eyebrow">Trusted by healthcare organisations</span>
          <h2 id="clients-heading">Proud to support the teams doing the work.</h2>
        </Reveal>
        <ClientsMarquee clients={clients} />
      </section>

      <section className="cta-section">
        <div className="site-shell cta-inner">
          <Reveal><span className="eyebrow cyan">Tell us what you need</span><h2>Let&apos;s equip better care.</h2></Reveal>
          <Reveal className="cta-actions" delay={100}><p>Share your product list, quantities or specifications. Our team will help you identify suitable options.</p><Link className="button button-cyan" href="/contact">Request a quote <ArrowUpRight size={18} /></Link></Reveal>
        </div>
      </section>
    </main>
  );
}
