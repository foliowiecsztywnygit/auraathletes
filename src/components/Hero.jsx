import React, { useRef, useState, useEffect } from "react";

export function Hero() {
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const video = videoRef.current;
    if (!video) return;

    if (reduceMotion) {
      video.pause();
      setIsPaused(true);
      return;
    }

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (isPaused) return;
            if (entry.isIntersecting) {
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.05 }
      );
      observer.observe(video);
      return () => observer.disconnect();
    }
  }, [isPaused]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPaused(false);
    } else {
      video.pause();
      setIsPaused(true);
    }
  };

  return (
    <section className="hero" aria-label="Aura Athletes">
      <div className="hero__visual">
        <svg className="hero__arc" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="arcGold" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#d4ac3e" stopOpacity="0" />
              <stop offset="0.24" stopColor="#d4ac3e" />
              <stop offset="0.76" stopColor="#d4ac3e" />
              <stop offset="1" stopColor="#d4ac3e" stopOpacity="0" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="49.5" />
        </svg>

        <div className="hero__frame">
          <video
            ref={videoRef}
            className="hero__video"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/video/poster-720.jpg"
            aria-hidden="true"
          >
            <source src="/assets/video/hero-1080.mp4" type="video/mp4" media="(min-width: 1024px)" />
            <source src="/assets/video/hero-720.mp4" type="video/mp4" />
          </video>
        </div>

        <button
          className="hero__pause"
          type="button"
          aria-pressed={isPaused}
          onClick={togglePlay}
        >
          {isPaused ? "Odtwórz" : "Pauza"}
        </button>
      </div>

      <div className="hero__content">
        <p className="eyebrow">Przygotowanie motoryczne · Trening medyczny · Diagnostyka</p>
        <h1 className="hero__title">
          <span>Indywidualne podejście.</span>
          <span>Przemyślany proces.</span>
          <span className="is-gold">Postępy, które można monitorować.</span>
        </h1>
        <div className="hero__actions">
          <a className="btn btn--gold" href="#kontakt">Zacznij od swojego celu</a>
          <a className="btn btn--line" href="#cennik">Cennik</a>
        </div>
      </div>
    </section>
  );
}
