import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Breash Supplies, our mission, vision and commitment to dependable healthcare supply across Uganda.",
};

const values = [
  ["01", "Integrity", "Honest, transparent and professional in every relationship."],
  ["02", "Quality", "Certified, reliable products selected for healthcare settings."],
  ["03", "Innovation", "Modern solutions that help organisations deliver care better."],
  ["04", "Customer focus", "Practical support shaped around each client’s needs."],
  ["05", "Excellence", "High standards from product sourcing through after-sales care."],
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="site-shell page-hero-inner">
          <div><h1>A dependable partner in healthcare delivery.</h1></div>
          <p>We make it easier for healthcare organisations to access the equipment, consumables and support they need to provide better patient care.</p>
        </div>
      </section>

      <section className="content-section">
        <div className="site-shell">
          <div className="content-grid">
            <Reveal><span className="eyebrow">Who we are</span><h2>Supply built around the people delivering care.</h2></Reveal>
            <Reveal delay={100}>
              <p className="large-copy">Breash Supplies Ltd. is a medical equipment and healthcare supplies company serving hospitals, clinics, pharmacies, laboratories, NGOs, humanitarian organisations and government health institutions.</p>
              <p>We know dependable supply is essential to effective healthcare. Our role is to connect organisations with quality products, fair pricing and knowledgeable support, whether they are restocking everyday consumables, sourcing specialised equipment or preparing an entire facility.</p>
              <p>By combining responsive service with a strong commitment to quality, we aim to build lasting relationships with every organisation we serve.</p>
            </Reveal>
          </div>

          <Reveal className="about-gallery" delay={80}>
            <div className="about-gallery-item about-gallery-hospital"><Image src="/images/hero-hospital.webp" alt="Nurse preparing hospital equipment supplied by Breash Supplies" fill sizes="(max-width: 720px) 33vw, 20vw" /></div>
            <div className="about-gallery-item about-gallery-lab"><Image src="/images/hero-lab.webp" alt="Laboratory technician using diagnostic equipment from Breash Supplies" fill sizes="(max-width: 720px) 33vw, 20vw" /></div>
            <div className="about-gallery-item about-gallery-supplies"><Image src="/images/hero-supplies.webp" alt="Medical consumables and supplies prepared by a Breash Supplies healthcare partner" fill sizes="(max-width: 720px) 33vw, 20vw" /></div>
          </Reveal>

          <div className="values-grid">
            {values.map(([number, title, copy], index) => <Reveal className="value-card" delay={index * 65} key={title}><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}
          </div>
        </div>
      </section>

      <section className="vision-section">
        <div className="site-shell vision-grid">
          <Reveal className="vision-card"><span className="eyebrow">Our mission</span><h2>Making quality healthcare solutions more accessible.</h2><p>To deliver affordable, high-quality medical supplies and equipment that enhance healthcare services while maintaining the highest standards of professionalism, customer care and ethical business practice.</p></Reveal>
          <Reveal className="vision-card" delay={100}><span className="eyebrow">Our vision</span><h2>A trusted supply partner for Uganda and the region.</h2><p>To be the leading and most trusted medical supplies provider in Uganda and across the region, recognised for excellence, reliability and innovation in healthcare delivery.</p></Reveal>
        </div>
      </section>
    </main>
  );
}
