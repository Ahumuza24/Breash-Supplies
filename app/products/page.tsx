import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Boxes, HeartPulse, ImageOff, Microscope, ShieldCheck, Stethoscope } from "lucide-react";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Products & Services",
  description: "Explore medical consumables, diagnostic and hospital equipment, laboratory supplies, PPE and after-sales support from Breash Supplies.",
};

const categories = [
  { number: "01", title: "Medical consumables", copy: "Essential supplies that support routine procedures, patient care and infection prevention.", icon: Boxes, items: ["Gloves", "Syringes", "Gauze", "Bandages", "Disinfectants", "Masks"] },
  { number: "02", title: "Diagnostic equipment", copy: "Dependable tools that support accurate, efficient patient assessment in everyday clinical settings.", icon: Stethoscope, items: ["Thermometers", "Stethoscopes", "Blood pressure monitors", "Glucometers"] },
  { number: "03", title: "Hospital equipment", copy: "Equipment for patient mobility, bedside care, respiratory support and facility readiness.", icon: HeartPulse, items: ["Patient beds", "Wheelchairs", "Stretchers", "Oxygen concentrators"] },
  { number: "04", title: "Laboratory supplies", copy: "Equipment and consumables for reliable testing and efficient laboratory workflows.", icon: Microscope, items: ["Microscopes", "Test kits", "Reagents", "Lab consumables"] },
  { number: "05", title: "Personal protective equipment", copy: "Dependable protection for healthcare professionals working in demanding environments.", icon: ShieldCheck, items: ["Coveralls", "Face shields", "Respirators"] },
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

          <div className="category-list">
            {categories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <Reveal className="category-block" delay={categoryIndex * 40} key={category.title}>
                  <div className="category-block-header">
                    <div className="category-block-title"><Icon size={22} strokeWidth={1.5} /><span className="product-number">{category.number}</span><h3>{category.title}</h3></div>
                    <p>{category.copy}</p>
                  </div>
                  <div className="product-item-grid">
                    {category.items.map(item => (
                      <div className="product-item-card" key={item}>
                        <div className="product-item-image">
                          <div className="product-item-placeholder"><ImageOff size={20} strokeWidth={1.4} /></div>
                        </div>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </Reveal>
              );
            })}
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
