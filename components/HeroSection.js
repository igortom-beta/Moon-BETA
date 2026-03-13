export function HeroSection({ t }) {
  const hostedVideoSrc =
    "https://github.com/igortom-beta/Moon-BETA/releases/download/moon-aura-media/proforma-start.mp4";
  const basePath = process.env.NODE_ENV === "production" ? "/Moon-BETA" : "";
  const posterSrc = `${basePath}/videos/proforma-start-poster.png`;

  return (
    <section id="projekt" className="hero section">
      <div className="hero-overlay" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="shell hero-content">
        <div className="reveal-block" data-reveal>
          <p className="eyebrow">
            <span />
            <span>{t.heroSubtitle}</span>
            <span />
          </p>
          <h1>Moon River</h1>
          <p className="hero-copy-text">{t.heroDescription}</p>
        </div>

        <div id="video-sekce" className="hero-video reveal-block" data-reveal>
          <div className="frame-glow" aria-hidden="true" />
          <div className="video-frame video-frame-xl">
            <video
              className="hero-player"
              controls
              preload="metadata"
              playsInline
              poster={posterSrc}
            >
              <source src={hostedVideoSrc} type="video/mp4" />
            </video>
          </div>
        </div>

        <div className="hero-actions reveal-block" data-reveal>
          <a href="#kontakt" className="button">{t.heroButton}</a>
        </div>
      </div>
    </section>
  );
}
