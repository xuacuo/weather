// src/app/about/page.jsx
export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-8 pb-10">
      {/* page header (centered like Themes/Legacy) */}
      <header className="text-center mb-4 md:mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">About</h1>
      </header>

      {/* cinematic hero (div instead of section) */}
      <div className="relative h-[45vh] md:h-[60vh] rounded-2xl overflow-hidden -mx-1 md:mx-0">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-center bg-cover md:bg-fixed"
          style={{ backgroundImage: "url('/3333.png')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-transparent"
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h2
            className="text-white text-3xl md:text-5xl font-bold leading-tight opacity-0 animate-fadeIn"
            style={{ animationDelay: "60ms" }}
          >
            WHO IS
            <br />
            HAYAO MIYAZAKI?
          </h2>
          <p
            className="mt-3 max-w-3xl text-white/90 text-base md:text-lg opacity-0 animate-fadeIn"
            style={{ animationDelay: "220ms" }}
          >
            A filmmaker whose hand-drawn worlds speak softly about nature, courage,
            and quiet resistance to war. This page introduces the man behind
            Studio Ghibli’s most beloved films.
          </p>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      </div>

      {/* WHO IS center block (div instead of section) */}
      <div className="w-full max-w-5xl mx-auto mt-10">
        {/* top gradient line */}
        <div className="mb-5 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-7 flex flex-col items-center">
            <h2 className="leading-[1.15] tracking-wide text-[clamp(28px,6vw,54px)] font-normal text-slate-900 text-center">
              <span className="block">WHO IS</span>
              <span className="block">HAYAO MIYAZAKI?</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-4">
            <p className="text-slate-700 text-[clamp(14px,2.2vw,18px)] leading-relaxed">
              A filmmaker whose hand-drawn worlds speak softly about nature, courage,
              and quiet resistance to war. This page introduces the man behind
              Studio Ghibli&apos;s most beloved films.
            </p>
          </div>
        </div>

        {/* bottom gradient line */}
        <div className="mt-5 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
      </div>

      {/* profile split */}
      <div className="relative mt-14 mb-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        <span
          aria-hidden="true"
          className="hidden md:block absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent"
        />

        {/* portrait */}
        <div className="md:col-span-6">
          <div className="h-[320px] md:h-[460px] w-full overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200">
            <img
              src="/Hayao Miyazaki.jpg"
              alt="Hayao Miyazaki portrait"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* bio card */}
        <div className="md:col-span-6">
          <article className="relative h-[320px] md:h-[460px] w-full rounded-xl bg-white/90 backdrop-blur-sm ring-1 ring-slate-200 shadow-sm overflow-hidden">
            <span className="absolute left-0 top-0 h-1.5 w-16 bg-gradient-to-r from-slate-300 to-transparent" />
            <span className="absolute right-0 bottom-0 h-1.5 w-16 bg-gradient-to-l from-slate-300 to-transparent" />

            <div className="h-full flex flex-col p-6 md:p-8">
              <h3 className="text-slate-900 text-3xl md:text-4xl font-semibold tracking-tight mb-3">
                THE MAN
              </h3>

              <div className="prose prose-slate max-w-none grow overflow-auto">
                <p className="text-slate-700 text-[16px] leading-8">
                  Hayao Miyazaki (born January 5, 1941) is a renowned Japanese
                  animator, filmmaker, and manga artist. He co-founded Studio
                  Ghibli and became known for richly imagined worlds and humane,
                  hopeful storytelling.
                </p>
                <p className="text-slate-700 text-[16px] leading-8">
                  He graduated from Gakushuin University in 1963 and joined Toei
                  Animation, later collaborating with Isao Takahata. Early works include
                  <em> Gulliver’s Travels Beyond the Moon</em> (1965) and
                  <em> Puss in Boots</em> (1969). He directed his first feature,
                  <em> The Castle of Cagliostro</em>, in 1979.
                </p>
                <p className="text-slate-700 text-[16px] leading-8">
                  His films have earned global acclaim and major awards, shaping
                  generations of artists and audiences.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
