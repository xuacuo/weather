export default function Header({
  title,
  subtitle = "Where imagination takes flight and nature speaks with spirit.",
  bg = "/bg-header.jpg",
  parallax = true,
}) {
  // animate by WORD to avoid layout shift
  const renderTitle = (t) =>
    t.split(" ").map((word, i) => (
      <span
        key={`${word}-${i}`}
        className="inline-block opacity-0 align-baseline animate-[fade-in_0.7s_ease_forwards]"
        style={{ animationDelay: `${i * 100}ms` }}
      >
        {word}&nbsp;
      </span>
    ));

  return (
    <header className="relative w-full h-[60vh] md:h-[80vh] flex items-center justify-center bg-gray-200 -mt-[10px]">
      {/* Background */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: parallax ? "fixed" : "scroll",
        }}
      />

      {/* Top gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-[140px] bg-gradient-to-b from-black/50 via-black/25 to-transparent"
      />

      {/* Bottom vignette */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent"
      />

      {/* Content */}
      <div className="relative z-10 mx-4 w-full max-w-6xl flex flex-col items-center text-center">
        <div className="bg-black/40 rounded-lg p-6 md:p-8 border border-transparent">
          {/* Title */}
          <h1
            className="
              text-white text-4xl md:text-6xl font-bold leading-tight
              drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]
              transition-transform duration-500
            "
          >
            {renderTitle(title)}
          </h1>

          {/* Subtitle (static, no animation) */}
          {subtitle && (
            <p className="mt-4 text-lg md:text-xl italic text-white/90">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
