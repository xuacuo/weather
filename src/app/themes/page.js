// src/app/themes/page.jsx
"use client";

import { useEffect, useRef, useState } from "react";

/* ---------- small fade-in helper ---------- */
function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- lightbox viewer ---------- */
function Lightbox({ items, startIndex = 0, onClose }) {
  const [index, setIndex] = useState(startIndex);
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
      if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(4, +(z + 0.25).toFixed(2)));
      if (e.key === "-") setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)));
      if (e.key === "0") setZoom(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length, onClose]);

  const next = () => { setIndex((i) => (i + 1) % items.length); setZoom(1); };
  const prev = () => { setIndex((i) => (i - 1 + items.length) % items.length); setZoom(1); };

  const src = encodeURI(items[index].img);
  const alt = items[index].title;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm" onClick={onClose} aria-modal="true" role="dialog">
      <button onClick={onClose} className="absolute top-4 right-4 rounded-full bg-white/10 text-white hover:bg-white/20 px-3 py-2 text-sm">Close ✕</button>
      <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20 px-3 py-2" aria-label="Previous">‹</button>
      <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 rounded-full bg-white/10 text-white hover:bg-white/20 px-3 py-2" aria-label="Next">›</button>

      <div className="h-full w-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
        <div className="relative max-w-[95vw] max-h-[90vh] w-full h-full">
          <div className="w-full h-full overflow-auto rounded-lg">
            <img src={src} alt={alt} className="block select-none mx-auto" style={{ width: `${zoom * 100}%`, height: "auto", maxWidth: "none" }} draggable={false} />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/55 text-white rounded-full px-3 py-1">
            <button className="px-2 py-1 hover:bg-white/10 rounded" onClick={() => setZoom((z) => Math.max(1, +(z - 0.25).toFixed(2)))} aria-label="Zoom out">−</button>
            <span className="tabular-nums text-sm">{Math.round(zoom * 100)}%</span>
            <button className="px-2 py-1 hover:bg-white/10 rounded" onClick={() => setZoom((z) => Math.min(4, +(z + 0.25).toFixed(2)))} aria-label="Zoom in">+</button>
            <button className="ml-1 px-2 py-1 hover:bg-white/10 rounded text-xs" onClick={() => setZoom(1)} aria-label="Reset zoom">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- page data ---------- */
const THEMES = [
  { title: "Fantasy & Imagination", img: "/Fantasy & Imagination.webp", desc: "Magical worlds that reflect real-world issues.", year: 2001 },
  { title: "Women & Independence",  img: "/Women & Independence.jpg",   desc: "Strong protagonists who grow through trials.", year: 1989 },
  { title: "Anti-war & Pacifism",   img: "/Anti-war & Pacifism.jpg",    desc: "A critique of war, exploring peace.",         year: 2004 },
  { title: "Nature & Environmentalism", img: "/Nature & Environmentalism.avif", desc: "Respect for forests and oceans.", year: 1997 },
];

/* ---------- page ---------- */
export default function ThemesPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-20">
      {/* header — match Legacy spacing */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Themes</h1>
        <p className="mt-2 text-slate-600">Core motifs that run through Miyazaki’s films.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {THEMES.map((t, i) => (
          <FadeIn key={t.title} delay={i * 80}>
            <article className="group relative rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
              {/* title (two lines, compact size) */}
              <div className="px-5 pt-5">
                <h3
                  className="mt-1 font-bold tracking-tight text-slate-900 text-[18px] md:text-[20px] leading-snug break-words"
                  style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "56px" }}
                  title={t.title}
                >
                  {t.title}
                </h3>
              </div>

              {/* image (click to open lightbox) */}
              <div className="mt-4 px-5">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(i)}
                  className="relative w-full aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-slate-200 cursor-zoom-in group"
                >
                  <img
                    src={encodeURI(t.img)}
                    alt={t.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                    decoding="async"
                  />
                </button>
              </div>

              {/* footer */}
              <div className="px-5 pb-5">
                <div className="mt-4 h-px w-full bg-slate-200/70" />
                <div className="mt-4 flex items-end justify-between">
                  <p className="text-sm text-slate-600">{t.desc}</p>
                  <span className="ml-4 shrink-0 font-semibold text-slate-900">/{t.year}</span>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={THEMES}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
