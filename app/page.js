"use client";

import { useEffect, useState } from "react";

const galleryItems = [
  {
    title: "Exterier",
    alt: "Exterier vily",
    src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80",
    wide: true
  },
  {
    title: "Interier",
    alt: "Spolecenska zona",
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Suite",
    alt: "Loznice s vyhledem",
    src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Atmosfera",
    alt: "Detail interieru",
    src: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1600&q=80"
  },
  {
    title: "Gastronomie",
    alt: "Jidelna",
    src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80"
  }
];

const benefits = [
  {
    title: "Staticky zaklad",
    text: "Next.js je pripraveny na dalsi rust, ale stale exportuje cisty rychly web bez slozite infrastruktury."
  },
  {
    title: "Oddelene komponenty a styly",
    text: "Obsah a prezentace jsou prehledne rozdeleny, takze dalsi upravy budou rychlejsi a bezpecnejsi."
  },
  {
    title: "Publikovatelne ihned",
    text: "Projekt je pripraveny na automaticke nasazeni pres GitHub Pages pri dalsich updatech."
  }
];

export default function HomePage() {
  const [navOpen, setNavOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [submitState, setSubmitState] = useState("idle");

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeMenu = () => setNavOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setSubmitState("sending");

    window.setTimeout(() => {
      event.currentTarget.reset();
      setSubmitState("done");

      window.setTimeout(() => {
        setSubmitState("idle");
      }, 2200);
    }, 1200);
  };

  const submitLabel =
    submitState === "sending"
      ? "Odesila se..."
      : submitState === "done"
        ? "Zprava uspesne odeslana"
        : "Odeslat zpravu";

  return (
    <>
      <div className="site-bg" aria-hidden="true" />

      <header className="site-header">
        <div className="shell nav-shell">
          <a href="#projekt" className="brand" aria-label="Moon River">
            <span className="brand-mark">MR</span>
            <span className="brand-copy">
              <strong>Moon River</strong>
              <span>Signature Resort</span>
            </span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={navOpen}
            aria-controls="site-nav"
            aria-label="Otevrit navigaci"
            onClick={() => setNavOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav id="site-nav" className={`site-nav${navOpen ? " is-open" : ""}`}>
            <a href="#projekt" onClick={() => setNavOpen(false)}>Uvod</a>
            <a href="#video-sekce" onClick={() => setNavOpen(false)}>Video</a>
            <a href="#informace" onClick={() => setNavOpen(false)}>Informace</a>
            <a href="#galerie" onClick={() => setNavOpen(false)}>Galerie</a>
            <a href="#kontakt" onClick={() => setNavOpen(false)}>Kontakt</a>
          </nav>

          <a href="#kontakt" className="nav-cta">Kontakt</a>
        </div>
      </header>

      <main>
        <section id="projekt" className="hero section">
          <video className="hero-atmosphere" autoPlay muted loop playsInline>
            <source
              src="https://drive.google.com/uc?export=download&id=1uTcw-Cy-X26QDIG6oMdPvl69GtJvNa7q"
              type="video/mp4"
            />
          </video>
          <div className="hero-overlay" />
          <div className="hero-glow" aria-hidden="true" />

          <div className="shell hero-content">
            <div className="reveal-block" data-reveal>
              <p className="eyebrow">
                <span />
                <span>Autenticka pamat krajiny</span>
                <span />
              </p>
              <h1>Moon River</h1>
              <p className="hero-copy-text">
                Exkluzivni dlouhodoby pronajem. Vas ostrov v prirode s garantovanou
                opci 5+5 let. Spojeni absolutniho soukromi a premioveho servisu.
              </p>
            </div>

            <div id="video-sekce" className="hero-video reveal-block" data-reveal>
              <div className="frame-glow" aria-hidden="true" />
              <div className="video-frame video-frame-large">
                <iframe
                  src="https://drive.google.com/file/d/1uTcw-Cy-X26QDIG6oMdPvl69GtJvNa7q/preview"
                  title="Moon River prezentace"
                  allow="autoplay; fullscreen"
                />
              </div>
            </div>

            <div className="hero-actions reveal-block" data-reveal>
              <a href="#kontakt" className="button">Poptat pronajem</a>
            </div>
          </div>
        </section>

        <section id="informace" className="section">
          <div className="shell">
            <div className="section-intro reveal-block" data-reveal>
              <h2>Investice do klidu</h2>
              <div className="divider" />
              <p>
                Investice do Moon River predstavuje spojeni osobniho pozitku a financni
                jistoty. Model pronajmu je navrzen tak, aby poskytl absolutni klid a
                stabilni zhodnoceni.
              </p>
            </div>

            <div className="cards">
              <article className="card reveal-block" data-reveal>
                <div className="card-icon">01</div>
                <h3>Garantovany pronajem</h3>
                <p>
                  Dlouhodoba jistota vynosu bez nutnosti aktivniho reseni obsazenosti.
                  Garantovana opce na 5+5 let.
                </p>
              </article>

              <article className="card card-shift reveal-block" data-reveal>
                <div className="card-icon">02</div>
                <h3>Unikatni lokalita</h3>
                <p>
                  Lojzova Paseka, Frymburk. Ostrov v prirode obklopeny sumavskymi lesy
                  s primym pristupem k vode.
                </p>
              </article>

              <article className="card reveal-block" data-reveal>
                <div className="card-icon">03</div>
                <h3>Kompletni servis</h3>
                <p>
                  Bezstarostna udrzba, uklid a pece o pozemek v rezii profesionalniho
                  tymu resortu.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="galerie" className="section section-muted">
          <div className="shell">
            <div className="gallery-heading reveal-block" data-reveal>
              <div>
                <h2>Galerie prostoru</h2>
                <p>
                  Architektura, interiery a atmosfera resortu v peclive vybranem vyberu.
                </p>
              </div>
              <a href="#kontakt" className="text-link">Pozadat o detailni prezentaci</a>
            </div>

            <div className="gallery-grid">
              {galleryItems.map((item) => (
                <figure
                  key={item.title}
                  className={`gallery-item${item.wide ? " gallery-item-wide" : ""} reveal-block`}
                  data-reveal
                >
                  <img src={item.src} alt={item.alt} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell split-panel">
            <div className="split-copy reveal-block" data-reveal>
              <p className="split-kicker">Vybrane benefity</p>
              <h2>Prezentace navrzena pro prvni dojem i dalsi obchodni upravy.</h2>
              <p>
                Web je ted v Next.js, takze se s nim bude pracovat pohodlneji i pri
                dalsich rozsahlejsich zmenach. Zachovali jsme luxusni ton puvodni verze,
                ale zaklad je uz pripraveny pro dlouhodobou praci.
              </p>
            </div>

            <div className="benefit-list reveal-block" data-reveal>
              {benefits.map((benefit) => (
                <div className="benefit" key={benefit.title}>
                  <strong>{benefit.title}</strong>
                  <p>{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="section contact-section">
          <div className="shell contact-grid">
            <div className="contact-copy reveal-block" data-reveal>
              <p className="split-kicker">Kontaktujte nas</p>
              <h2>Zacnete svuj pribeh</h2>
              <p>
                Mate zajem o podrobnejsi informace nebo si prejete sjednat osobni schuzku?
                Vyplnte formular a nas tym se vam obratem ozve.
              </p>

              <div className="contact-list">
                <a href="mailto:info@villa-moonriver.cz">info@villa-moonriver.cz</a>
                <p>
                  Lojzova Paseka, Frymburk
                  <br />
                  382 26 Horni Plana, CZ
                </p>
              </div>
            </div>

            <form className="contact-form reveal-block" data-reveal onSubmit={handleContactSubmit}>
              <div className="field-grid">
                <label className="field">
                  <span>Jmeno a prijmeni</span>
                  <input type="text" name="name" required />
                </label>

                <label className="field">
                  <span>E-mailova adresa</span>
                  <input type="email" name="email" required />
                </label>
              </div>

              <label className="field">
                <span>Telefonni cislo</span>
                <input type="tel" name="phone" />
              </label>

              <label className="field">
                <span>Vase zprava</span>
                <textarea name="message" rows="5" required />
              </label>

              <button type="submit" className="button button-full" disabled={submitState === "sending"}>
                {submitLabel}
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-shell">
          <div>
            <div className="footer-brand">Moon River</div>
            <p>Signature Villa Resort</p>
          </div>
          <p>&copy; 2026 Moon River Resort. Vsechna prava vyhrazena.</p>
        </div>
      </footer>

      <button
        className="chat-toggle"
        type="button"
        aria-expanded={chatOpen}
        aria-controls="chat-window"
        onClick={() => setChatOpen((current) => !current)}
      >
        EMA
      </button>

      <aside id="chat-window" className={`chat-window${chatOpen ? " is-open" : ""}`} aria-hidden={!chatOpen}>
        <div className="chat-header">
          <div>
            <strong>EMA AI 4.0</strong>
            <span>Inteligentni pruvodce</span>
          </div>
          <button type="button" onClick={() => setChatOpen(false)} aria-label="Zavrit chat">
            x
          </button>
        </div>

        <div className="chat-body">
          <div className="chat-bubble">
            Vitejte v Moon River. Jsem EMA, vase spojeni s historii i komfortem tohoto
            mista. Cim mohu poslouzit?
          </div>
        </div>

        <form
          className="chat-input"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input type="text" placeholder="Zeptejte se Emy..." />
          <button type="submit">Odeslat</button>
        </form>
      </aside>
    </>
  );
}
