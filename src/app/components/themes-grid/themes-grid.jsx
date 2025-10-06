// src/app/components/themes-grid/themes-grid.jsx
export default function ThemesGrid() {
  const themes = [
    {
      label: "Fantasy",
      title: "Fantasy & Imagination",
      img: "/Fantasy & Imagination.webp",
      desc: "Magical worlds that reflect real-world issues.",
    },
    {
      label: "Women",
      title: "Women & Independence",
      img: "/Women & Independence.jpg",
      desc: "Strong female protagonists who grow through challenges.",
    },
    {
      label: "Pacifism",
      title: "Anti-war & Pacifism",
      img: "/Anti-war & Pacifism.jpg",
      desc: "A critique of war and violence, and the human cost of conflict.",
    },
    {
      label: "Nature",
      title: "Nature & Environmentalism",
      img: "/Nature & Environmentalism.avif",
      desc: "Respect for forests, oceans, and living beings.",
    },
  ];

  return (
    <div id="themes" className="max-w-7xl mx-auto px-6 pt-2 md:pt-3 pb-6">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center md:text-left">
        Themes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {themes.map((t) => (
          <article
            key={t.title}
            className="group relative rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="px-5 pt-5">
              <span className="inline-flex items-center rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium tracking-wide px-2.5 py-1 ring-1 ring-slate-200">
                {t.label}
              </span>

              <h3
                className="mt-3 font-bold tracking-tight text-slate-900 leading-snug text-[20px] md:text-[20px] line-clamp-2 min-h-[60px]"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
                title={t.title}
              >
                {t.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600">{t.desc}</p>
            </div>

            <div className="mt-4 px-5 pb-5">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg ring-1 ring-slate-200">
                <img
                  src={encodeURI(t.img)}
                  alt={t.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
