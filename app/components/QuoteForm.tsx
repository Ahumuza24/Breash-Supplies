"use client";

import { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";

export function QuoteForm() {
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Website enquiry from ${form.get("name")}`);
    const body = encodeURIComponent([
      `Name: ${form.get("name")}`,
      `Organisation: ${form.get("organisation")}`,
      `Phone: ${form.get("phone")}`,
      `Email: ${form.get("email")}`,
      `Product category: ${form.get("category")}`,
      "",
      String(form.get("message")),
    ].join("\n"));
    window.location.href = `mailto:breashsupplies@gmail.com?subject=${subject}&body=${body}`;
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
