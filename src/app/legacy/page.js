"use client";

import { useEffect, useRef, useState } from "react";

const legacy = [
  { year: "1986", items: [
    { title: "Castle in the Sky", subtitle: "Feature Film", img: "/Laputa Castle in the Sky_41.jpg",
      desc: "A landmark adventure that helped define the studio’s hand-crafted worldbuilding." },
  ]},
  { year: "1988", items: [
    { title: "My Neighbor Totoro", subtitle: "Feature Film", img: "/My Neighbor Totoro_29.jpg",
      desc: "A gentle tale that tied environmental themes to everyday childhood wonder." },
    { title: "Iconography", subtitle: "Cultural Impact", img: "/Iconography.jpg",
      desc: "The Totoro silhouette and Catbus imagery entered global pop culture and exhibitions." },
  ]},
  { year: "1997", items: [
    { title: "Princess Mononoke", subtitle: "Feature Film", img: "/Princess Mononoke_33.jpg",
      desc: "Epic ecological myth that set new standards for complexity in animated narratives." },
  ]},
  { year: "2001", items: [
    { title: "Spirited Away", subtitle: "Academy Award", img: "/Spirited Away_42.jpg",
      desc: "First non-English animated film to win the Oscar for Best Animated Feature." },
  ]},
  { year: "2004", items: [
    { title: "Howl’s Moving Castle", subtitle: "Feature Film", img: "/Howls Moving Castle_35.jpg",
      desc: "A moving fable about love and anti-war ideals with elaborate mechanical design." },
  ]},
  { year: "2013", items: [
    { title: "The Wind Rises", subtitle: "Feature Film", img: "/The Wind Rises_50.jpg",
      desc: "A reflective drama on craft, ambition, and moral consequence." },
  ]},
  { year: "2023", items: [
    { title: "The Boy and the Heron", subtitle: "Feature Film", img: "/The Boy and the Heron.jpeg",
      desc: "Late-style meditation on grief and creation, continuing festival acclaim." },
  ]},
];

function InView({ children, className = "", once = true, delay = 0 }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setSeen(true);
            if (once) io.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      style={{ animationDelay: seen ? `${delay}ms` : undefined }}
      className={`${className} ${seen ? "animate-[fade-in-up_0.6s_ease_forwards]" : "opacity-0"}`}
    >
      {children}
    </div>
  );
}

// FIX: remove TypeScript types here
function YearCell({ year, side }) {
  return (
    <div className="relative flex items-start">
      <div
        className={`absolute top-0 bottom-0 w-[2px] bg-slate-300/80 ${
          side === "left" ? "right-0" : "left-0"
        }`}
      />
      <div
        className={`text-slate-500/80 text-3xl md:text-4xl font-serif italic select-none
                    ${side === "left" ? "pr-4" : "pl-4"}
                    opacity-0 animate-[fade-in-up_0.5s_ease_forwards]`}
        style={{ animationDelay: "80ms" }}
      >
        {year}
      </div>
    </div>
  );
}


function LegacyBlock({ block, reversed = false }) {
  return (
    <div className="space-y-8">
      {block.items.map((item, idx) => {
        // FIX: plain JS, no TS type
        const side = reversed ? "right" : "left";
        return (
          <InView key={`${block.year}-${idx}`} delay={idx * 120}>
            <div
              className={`grid gap-6 md:gap-8 ${
                side === "left" ? "grid-cols-[7rem_1fr]" : "grid-cols-[1fr_7rem]"
              }`}
            >
              {side === "left" && <YearCell year={block.year} side="left" />}

              <div className="relative z-10">
                <div
                  className={`absolute top-6 h-[2px] bg-slate-300/80 ${
                    side === "left" ? "-left-6 w-6" : "right-0 w-6"
                  }`}
                />
                <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-[2px] hover:shadow-md">
                  {item.img && (
                    <div className="aspect-[3/2] w-full overflow-hidden">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="p-5">
                    <h3 className="text-slate-900 font-semibold">{item.title}</h3>
                    <p className="text-[11px] uppercase tracking-wider text-slate-500 mt-1">
                      {item.subtitle}
                    </p>
                    <p className="text-slate-700 text-sm leading-relaxed mt-3">{item.desc}</p>
                  </div>
                </div>
              </div>

              {side === "right" && <YearCell year={block.year} side="right" />}
            </div>
          </InView>
        );
      })}
    </div>
  );
}

export default function LegacyPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-20">
      <header className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Legacy</h1>
        <p className="text-slate-600 mt-2">Key milestones across decades — films, records, and cultural impact.</p>
      </header>

      {/* responsive: 1 col (mobile) → 2 cols (md+) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        {legacy.map((block, i) => (
          <LegacyBlock key={block.year} block={block} reversed={i % 2 === 1} />
        ))}
      </div>
    </div>
  );
}
