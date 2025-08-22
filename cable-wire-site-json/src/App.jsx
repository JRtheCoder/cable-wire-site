import React, { useState } from "react";
import company from "./content/company.json";
import products from "./content/products.json";
import industries from "./content/industries.json";
import downloads from "./content/downloads.json";
import rfq from "./content/rfq.json";
import quality from "./content/quality.json";

export default function CableWireLanding() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(e){ e.preventDefault(); setSubmitted(true); }

  return (
    <main className="font-sans text-slate-800">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3"><div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600" /><span className="text-lg font-semibold tracking-tight">{company.name}</span></div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#products" className="hover:text-blue-600">Products</a>
            <a href="#industries" className="hover:text-blue-600">Industries</a>
            <a href="#quality" className="hover:text-blue-600">Quality</a>
            <a href="#downloads" className="hover:text-blue-600">Downloads</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a href="#rfq" className="inline-flex items-center gap-2 rounded-xl border border-blue-600 px-3 py-2 text-sm text-blue-700 hover:bg-blue-50">Request a Quote</a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-white"/>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                {company.tagline.split(company.heroAccent)[0]}
                <span className="text-blue-700">{company.heroAccent}</span>
                {company.tagline.split(company.heroAccent)[1] || ""}
              </h1>
              <p className="mt-5 text-slate-600 text-lg">{company.heroSub}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#rfq" className="rounded-xl bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700">Get a Fast Quote</a>
                <a href="#products" className="rounded-xl border px-5 py-3 text-sm font-medium hover:bg-slate-50">Browse Products</a>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                {company.badges.map((b) => (<div key={b} className="flex items-center gap-2"><Dot/> {b}</div>))}
              </div>
            </div>
            <div className="relative">
              {company.heroImage ? (<img src={company.heroImage} alt="" className="aspect-[4/3] object-cover rounded-2xl shadow-inner" />)
              : (<div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner"/>)}
              <div className="absolute -bottom-6 -left-6 hidden md:block w-40 h-40 rounded-3xl bg-blue-100 rotate-6"/>
              <div className="absolute -top-6 -right-6 hidden md:block w-40 h-40 rounded-3xl bg-sky-100 -rotate-6"/>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Products</h2>
            <a href="#rfq" className="text-sm text-blue-700 hover:underline">Need something specific? Request a quote →</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p) => (
              <article key={p.title} className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {p.bullets.map((b) => (<li key={b} className="flex items-start gap-2"><Check/> <span>{b}</span></li>))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Industries Served</h2>
          <p className="mt-3 text-slate-600">Engineered and stocked for performance across harsh and regulated environments.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {industries.map((i) => (<div key={i} className="rounded-xl border bg-white px-3 py-2 text-sm text-center shadow-sm">{i}</div>))}
          </div>
        </div>
      </section>

      <section id="quality" className="py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Quality & Compliance</h2>
              <ul className="mt-5 space-y-3 text-slate-700">
                {quality.features.map((q) => (<li className="flex items-start gap-3" key={q}><Shield/> {q}</li>))}
              </ul>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {quality.items.map((q) => (
                <div className="rounded-2xl border bg-white p-5 shadow-sm" key={q.title}>
                  <p className="text-sm text-slate-500">{q.subtitle}</p>
                  <p className="mt-1 text-lg font-medium">{q.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="downloads" className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Downloads</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloads.map((d) => (
              <a key={d.name} href={d.href} className="group rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between"><p className="font-medium">{d.name}</p><Arrow/></div>
                <p className="mt-2 text-sm text-slate-600">Click to view. Replace with your file links.</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="rfq" className="py-16 md:py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">Request a Quote</h2>
              <p className="mt-3 text-slate-600">Tell us what you need—part numbers, specs, lengths, and quantities. We’ll reply same‑day.</p>
              <ul className="mt-6 space-y-2 text-sm text-slate-700">
                {rfq.bullets.map((b) => (<li className="flex items-start gap-2" key={b}><Check/>{b}</li>))}
              </ul>
              <div className="mt-6 rounded-xl border bg-white p-4 text-sm text-slate-600">
                <p className="font-medium text-slate-800">Sample RFQ text</p>
                <p className="mt-1">“{rfq.sampleText}”</p>
              </div>
            </div>

            <form id="contact" onSubmit={handleSubmit} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label className="text-sm text-slate-600">Name</label><input required className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} /></div>
                <div><label className="text-sm text-slate-600">Email</label><input required type="email" className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} /></div>
                <div className="sm:col-span-2"><label className="text-sm text-slate-600">Company</label><input className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" value={form.company} onChange={(e)=>setForm({...form, company:e.target.value})} /></div>
                <div className="sm:col-span-2"><label className="text-sm text-slate-600">Message</label><textarea required rows={5} className="mt-1 w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" value={form.message} onChange={(e)=>setForm({...form, message:e.target.value})} placeholder="Part # / spec, length, qty, application…" /></div>
              </div>
              {!submitted ? (<button className="mt-4 w-full rounded-xl bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700">Send</button>)
              : (<div className="mt-4 rounded-lg bg-green-50 text-green-700 p-3 text-sm">Thanks! We received your request. Replace this with your actual form handler.</div>)}
              <p className="mt-3 text-xs text-slate-500">By submitting, you agree to our terms. We respect your privacy.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3"><div className="h-8 w-8 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600" /><span className="font-medium">{company.name}</span></div>
            <p className="mt-3 text-sm text-slate-600">{company.address}</p>
            <p className="text-sm text-slate-600">{company.phone} • {company.email}</p>
          </div>
          <div className="text-sm text-slate-600"><p className="font-medium text-slate-800">Hours</p><p>{company.hours}</p><p>Same‑day pickup available</p></div>
          <div className="text-sm text-slate-600"><p className="font-medium text-slate-800">Quick Links</p><a className="block hover:underline" href="#products">Products</a><a className="block hover:underline" href="#rfq">Request a Quote</a><a className="block hover:underline" href="#downloads">Downloads</a></div>
        </div>
        <div className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
      </footer>
    </main>
  );
}
function Check(){return(<svg className="h-4 w-4 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>);}
function Dot(){return(<svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="4" /></svg>);}
function Shield(){return(<svg className="h-4 w-4 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);}
function Arrow(){return(<svg className="h-5 w-5 transition group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg>);}
