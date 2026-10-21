"use client";

import { useState } from "react";
import Arrow from "./Arrow";

const serviceOptions = ["Residential", "Kitchen & Bath", "Commercial", "Styling", "Renovation"];
const budgetOptions = ["Under ₹5L", "₹5L – 15L", "₹15L – 40L", "₹40L +"];
const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", phone: "", city: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setErrors((er) => ({ ...er, [name]: false }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const next = {
      name: !values.name.trim(),
      email: !emailRe.test(values.email.trim()),
      message: !values.message.trim(),
    };
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;
    // Hook up a real endpoint (e.g. a Route Handler or Formspree) here
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success is-visible">
        <h3>
          Thank you, <em>truly.</em>
        </h3>
        <p className="muted">Your message is with us. Someone from the studio will be in touch within one working day.</p>
      </div>
    );
  }

  const field = (name, label, { type = "text", required, error, full, textarea } = {}) => (
    <div className={`field${full ? " full" : ""}${errors[name] ? " has-error" : ""}`}>
      {textarea ? (
        <textarea id={name} name={name} placeholder=" " value={values[name]} onChange={update} />
      ) : (
        <input type={type} id={name} name={name} placeholder=" " value={values[name]} onChange={update} />
      )}
      <label htmlFor={name}>
        {label}
        {required && " *"}
      </label>
      {error && <div className="field__error">{error}</div>}
    </div>
  );

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      {field("name", "Your name", { required: true, error: "Please tell us your name." })}
      {field("email", "Email address", { type: "email", required: true, error: "Please enter a valid email." })}
      {field("phone", "Phone", { type: "tel" })}
      {field("city", "City")}

      <div className="full">
        <span className="form-label">I&apos;m interested in</span>
        <div className="chips">
          {serviceOptions.map((s) => (
            <label key={s}>
              <input type="checkbox" name="service" value={s} />
              <span>{s}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="full">
        <span className="form-label">Approximate budget</span>
        <div className="chips">
          {budgetOptions.map((b) => (
            <label key={b}>
              <input type="radio" name="budget" value={b} />
              <span>{b}</span>
            </label>
          ))}
        </div>
      </div>

      {field("message", "Tell us about your project", {
        required: true,
        full: true,
        textarea: true,
        error: "A few words about your project, please.",
      })}

      <div className="full">
        <button type="submit" className="btn btn--solid">
          Send Enquiry <Arrow />
        </button>
      </div>
    </form>
  );
}
