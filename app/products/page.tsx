import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Products & Services",
  description: "Explore medical consumables, diagnostic and hospital equipment, laboratory supplies, PPE and after-sales support from Breash Supplies.",
};

const products = [
  { number: "01", title: "Medical consumables", copy: "Essential supplies that support routine procedures, patient care and infection prevention.", tags: ["Gloves", "Syringes", "Gauze", "Bandages", "Disinfectants", "Masks"] },
  { number: "02", title: "Diagnostic equipment", copy: "Dependable tools that support accurate, efficient patient assessment in everyday clinical settings.", tags: ["Thermometers", "Stethoscopes", "Blood pressure monitors", "Glucometers"] },
  { number: "03", title: "Hospital equipment", copy: "Equipment for patient mobility, bedside care, respiratory support and facility readiness.", tags: ["Patient beds", "Wheelchairs", "Stretchers", "Oxygen concentrators"] },
  { number: "04", title: "Laboratory supplies", copy: "Equipment and consumables for reliable testing and efficient laboratory workflows.", tags: ["Microscopes", "Test kits", "Reagents", "Lab consumables"] },
  { number: "05", title: "Personal protective equipment", copy: "Dependable protection for healthcare professionals working in demanding environments.", tags: ["Coveralls", "Face shields", "Respirators"] },
];

const services = [
  ["01", "Equipment installation", "Professional support to help ensure applicable equipment is properly set up and ready for use."],
  ["02", "Practical training", "Clear guidance that helps healthcare teams understand and confidently operate supplied equipment."],
  ["03", "Maintenance support", "Ongoing assistance for applicable equipment to help maintain dependable performance over time."],
];

export default function ProductsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="site-shell page-hero-inner">
          <div><span className="eyebrow cyan">Products & services</span><h1>Everything your team needs to deliver care.</h1></div>
          <p>A broad selection of quality medical products, backed by professional guidance and dependable after-sales support.</p>
        </div>
      </section>

      <section className="catalog-section">
        <div className="site-shell">
          <Reveal className="section-heading-row"><div><span className="eyebrow">Our product range</span><h2>Source with clarity.<br />Order with confidence.</h2></div><p>Need an item that is not listed? Share your specifications with our team and we will help you identify suitable options.</p></Reveal>
          <div className="catalog-list">
            {products.map((product, index) => <Reveal className="catalog-item" delay={index * 55} key={product.title}>
              <span>{product.number}</span><h2>{product.title}</h2><div className="catalog-details"><p>{product.copy}</p><div className="product-tags">{product.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
            </Reveal>)}
          </div>
        </div>
      </section>

      <section className="service-band">
        <div className="site-shell service-band-grid">
          <Reveal><span className="eyebrow cyan">After-sales support</span><h2>Our service continues after delivery.</h2><p>Good equipment is only the start. We help your organisation integrate applicable products into daily operations and keep them performing reliably.</p><Link className="button button-cyan" href="/contact">Discuss your requirements <ArrowUpRight size={18} /></Link></Reveal>
          <div className="service-list">{services.map(([number, title, copy], index) => <Reveal className="service-row" delay={index * 80} key={title}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></Reveal>)}</div>
        </div>
      </section>
    </main>
  );
}
