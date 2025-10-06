// src/app/components/works-carousel-loop.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import Card from "../card";
import { works as baseWorks } from "../../data/works";

export default function WorksCarouselLoop({
  autoPlay = true,
  interval = 1500,
  variant = "auto",   // "auto" | "single"
  compact = false,    // NEW: tighter vertical spacing
}) {
  const [index, setIndex] = useState(1);
  const [visible, setVisible] = useState(variant === "single" ? 1 : 3);
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  const works = [baseWorks[baseWorks.length - 1], ...baseWorks, baseWorks[0]];
  const N = baseWorks.length;

  // responsive only in "auto" mode
  useEffect(() => {
    if (variant !== "auto") {
      setVisible(1);
      return;
    }
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisible(3);
      else if (w >= 768) setVisible(2);
      else setVisible(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [variant]);

  // autoplay
  useEffect(() => {
    if (!autoPlay) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setIndex((i) => i + 1), interval);
    return () => clearInterval(timerRef.current);
  }, [autoPlay, interval]);

  // translate
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    requestAnimationFrame(() => {
      track.style.transition = "transform 500ms ease";
      const percent = (index * 100) / visible;
      track.style.transform = `translateX(-${percent}%)`;
    });

    const handle = () => {
      if (index === N + 1) {
        track.style.transition = "none";
        setIndex(1);
        requestAnimationFrame(() => {
          const percent = 100 / visible;
          track.style.transform = `translateX(-${percent}%)`;
        });
      }
      if (index === 0) {
        track.style.transition = "none";
        setIndex(N);
        requestAnimationFrame(() => {
          const percent = (N * 100) / visible;
          track.style.transform = `translateX(-${percent}%)`;
        });
      }
    };

    track.addEventListener("transitionend", handle, { once: true });
  }, [index, visible, N]);

  const isSingle = variant === "single";

  return (
    <div className={`max-w-7xl mx-auto px-5 ${compact ? "pt-2 md:pt-3 pb-4" : "py-5"}`}>
      <div className="relative overflow-x-hidden overflow-y-visible">
        <div ref={trackRef} className="flex -mx-3">
          {works.map((w, i) => (
            <div
              key={i + w.title}
              className={`px-3 ${compact ? "pb-2" : "pb-4"}`}
              style={{
                flex: `0 0 ${100 / visible}%`,
                maxWidth: `${100 / visible}%`,
              }}
            >
              {isSingle ? (
                // Big image slide (works page)
                <div className="relative w-full h-[60vh] md:h-[80vh] rounded-xl overflow-hidden">
                  <img src={w.img} alt={w.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-auto bg-black/45 text-white px-4 py-3 rounded-lg max-w-xl">
                    <h2 className="text-lg md:text-2xl font-bold">{w.title}</h2>
                    {(w.desc || w.description) && (
                      <p className="text-xs md:text-sm mt-1 line-clamp-2">
                        {w.desc || w.description}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                // Default card slide (home page)
                <Card
                  imgSrc={w.img}
                  title={w.title}
                  description={w.desc || w.description}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
