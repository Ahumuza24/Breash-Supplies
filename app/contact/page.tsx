import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { QuoteForm } from "../components/QuoteForm";
import { Reveal } from "../components/Reveal";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description: "Contact Breash Supplies for medical equipment, healthcare supplies and quotation support in Uganda.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="site-shell page-hero-inner">
          <div><span className="eyebrow cyan">Contact us</span><h1>Tell us what your organisation <em>needs.</em></h1></div>
          <p>For routine supplies, specialised equipment or institutional requirements, our team is ready to help you source the right solution.</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="site-shell contact-layout">
          <Reveal className="contact-details">
            <span className="eyebrow">Start a conversation</span><h2>Responsive support begins here.</h2><p>Contact our team directly or use the quote form. Include quantities and specifications where possible so we can assist efficiently.</p>
            <div className="contact-methods">
              <div className="contact-method"><Phone size={22} /><div><span>Call us</span><a href="tel:+256775207695">+256 775 207695</a></div></div>
              <div className="contact-method"><Mail size={22} /><div><span>Email us</span><a href="mailto:breashsupplies@gmail.com">breashsupplies@gmail.com</a></div></div>
              <div className="contact-method"><MapPin size={22} /><div><span>Visit us</span><p>Mabirizi Complex, Level 4<br />Kampala, Uganda</p></div></div>
            </div>
          </Reveal>
          <Reveal delay={100}><QuoteForm /></Reveal>
        </div>
      </section>
    </main>
  );
}
