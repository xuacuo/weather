"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "", // honeypot
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function validate(values) {
    const e = {};
    if (!values.name || values.name.trim().length < 2) e.name = "Please enter your name.";
    if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = "Enter a valid email.";
    if (!values.message || values.message.trim().length < 10) e.message = "Tell me a bit more (10+ chars).";
    return e;
  }

  function handleChange(ev) {
    const { name, value } = ev.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    if (form.website) return; // bot trap
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setStatus("sending");
    await new Promise((r) => setTimeout(r, 800)); // mock request
    setStatus("sent");
    setForm({ name: "", email: "", subject: "", message: "", website: "" });
    setTimeout(() => setStatus("idle"), 2500);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 md:px-8 pb-20">
      <header className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Contact</h1>
        <p className="mt-3 text-slate-600">Leave a note and I’ll get back to you soon.</p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="mx-auto rounded-2xl border border-slate-200 bg-white/90 backdrop-blur p-6 md:p-8 shadow-sm"
      >
        {/* honeypot */}
        <input
          type="text"
          name="website"
          value={form.website}
          onChange={handleChange}
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative">
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full rounded-xl border border-slate-300/70 bg-white/80 px-4 py-3 outline-none transition
                         focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              required
              autoComplete="name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "err-name" : undefined}
            />
            <label
              htmlFor="name"
              className="absolute left-3 top-3 px-1 text-slate-500 bg-white/80 transition-all
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                         peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-700"
            >
              Name
            </label>
            {errors.name && (
              <p id="err-name" className="mt-1 text-xs text-rose-600">
                {errors.name}
              </p>
            )}
          </div>

          <div className="relative">
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" "
              className="peer w-full rounded-xl border border-slate-300/70 bg-white/80 px-4 py-3 outline-none transition
                         focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
              required
              autoComplete="email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "err-email" : undefined}
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-3 px-1 text-slate-500 bg-white/80 transition-all
                         peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                         peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-700"
            >
              Email
            </label>
            {errors.email && (
              <p id="err-email" className="mt-1 text-xs text-rose-600">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="relative mt-5">
          <input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full rounded-xl border border-slate-300/70 bg-white/80 px-4 py-3 outline-none transition
                       focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            autoComplete="off"
          />
          <label
            htmlFor="subject"
            className="absolute left-3 top-3 px-1 text-slate-500 bg-white/80 transition-all
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-700"
          >
            Subject
          </label>
        </div>

        <div className="relative mt-5">
          <textarea
            id="message"
            name="message"
            rows={6}
            value={form.message}
            onChange={handleChange}
            placeholder=" "
            className="peer w-full rounded-xl border border-slate-300/70 bg-white/80 px-4 py-3 outline-none transition
                       focus:border-sky-400 focus:ring-4 focus:ring-sky-100 resize-y"
            required
            autoComplete="off"
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "err-message" : undefined}
          />
          <label
            htmlFor="message"
            className="absolute left-3 top-3 px-1 text-slate-500 bg-white/80 transition-all
                       peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                       peer-focus:-top-2 peer-focus:text-xs peer-focus:text-sky-700"
          >
            Message
          </label>
          {errors.message && (
            <p id="err-message" className="mt-1 text-xs text-rose-600">
              {errors.message}
            </p>
          )}
        </div>

        {/* Submit (centered button, small note below) */}
        <div className="mt-6 flex flex-col items-center">
          <button
            type="submit"
            disabled={status === "sending"}
            className="mx-auto inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white
                       bg-gradient-to-r from-sky-600 to-indigo-600
                       hover:from-sky-500 hover:to-indigo-500
                       disabled:opacity-60 disabled:cursor-not-allowed
                       focus:outline-none focus:ring-4 focus:ring-sky-200 transition"
          >
            {status === "sending" ? "Sending…" : "Send"}
          </button>

          <p
            className={`mt-2 text-xs ${
              status === "sent" ? "text-emerald-600" : "text-slate-500"
            }`}
            aria-live="polite"
          >
            {status === "sent" ? "Thanks! Your message has been sent." : "I respect your privacy."}
          </p>
        </div>
      </form>
    </div>
  );
}
