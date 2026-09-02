"use client";

import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";

const WHATSAPP_NUMBER = "256775207695";
const CONTACT_EMAIL = "breashsupplies@gmail.com";

export function QuoteForm() {
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [enquiryText, setEnquiryText] = useState("");
  const [mailtoHref, setMailtoHref] = useState("");
  const [whatsappHref, setWhatsappHref] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "");
    const text = [
      `Name: ${name}`,
      `Organisation: ${form.get("organisation")}`,
      `Phone: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      `Product category: ${form.get("category")}`,
      "",
      String(form.get("message")),
    ].join("\n");

    const subject = `Website enquiry from ${name}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    const whatsapp = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`${subject}\n\n${text}`)}`;

    setEnquiryText(text);
    setMailtoHref(mailto);
    setWhatsappHref(whatsapp);
    setSent(true);
    window.location.href = mailto;
  }

  async function copyEnquiry() {
    try {
      await navigator.clipboard.writeText(enquiryText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  if (sent) {
    return (
      <div className="quote-form">
        <h2>Enquiry prepared</h2>
        <p>Your email app should now be opening with the enquiry ready to review and send. If nothing opened, use one of these instead.</p>
        <div className="quote-form-fallback">
          <a className="button button-outline" href={mailtoHref}>Open email app <ArrowUpRight size={18} /></a>
          <a className="button button-outline" href={whatsappHref} target="_blank" rel="noreferrer">Send via WhatsApp</a>
          <button type="button" className="text-link" onClick={copyEnquiry}>
            {copied ? <><Check size={16} /> Copied</> : <><Copy size={16} /> Copy enquiry text</>}
          </button>
        </div>
        <pre className="quote-form-preview">{enquiryText}</pre>
        <button type="button" className="text-link" onClick={() => setSent(false)}>Edit and resend</button>
      </div>
    );
  }

  return (
    <form className="quote-form" onSubmit={submit}>
      <h2>Request a quote</h2>
      <p>Tell us what you need and your preferred contact details.</p>
      <div className="form-grid">
        <div className="form-field"><label htmlFor="name">Full name</label><input id="name" name="name" autoComplete="name" required /></div>
        <div className="form-field"><label htmlFor="organisation">Organisation</label><input id="organisation" name="organisation" autoComplete="organization" /></div>
        <div className="form-field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
        <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
        <div className="form-field full"><label htmlFor="category">Product category</label><select id="category" name="category"><option>Medical consumables</option><option>Diagnostic equipment</option><option>Hospital equipment</option><option>Laboratory supplies</option><option>Personal protective equipment</option><option>Installation, training or maintenance</option><option>Other requirement</option></select></div>
        <div className="form-field full"><label htmlFor="message">Products, quantities or specifications</label><textarea id="message" name="message" required /></div>
      </div>
      <button className="button button-cyan" type="submit">Prepare enquiry <ArrowUpRight size={18} /></button>
      <p className="form-note">Submitting opens your email app with the enquiry prepared for you to review and send.</p>
    </form>
  );
}
