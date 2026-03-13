import { languages } from "./translations";

export function SiteHeader({ navOpen, language, t, onLanguageChange, onToggle, onNavigate }) {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <a href="#projekt" className="brand" aria-label="Moon River">
          <span className="brand-mark">MR</span>
          <span className="brand-copy">
            <strong>Moon River</strong>
            <span>{t.brandTag}</span>
          </span>
        </a>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={navOpen}
          aria-controls="site-nav"
          aria-label="Otevrit navigaci"
          onClick={onToggle}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`site-nav${navOpen ? " is-open" : ""}`}>
          <a href="#projekt" onClick={onNavigate}>{t.navIntro}</a>
          <a href="#video-sekce" onClick={onNavigate}>{t.navVideo}</a>
          <a href="#informace" onClick={onNavigate}>{t.navInfo}</a>
          <a href="#ceny" onClick={onNavigate}>{t.navPricing}</a>
          <a href="#galerie" onClick={onNavigate}>{t.navGallery}</a>
          <a href="#kontakt" onClick={onNavigate}>{t.navContact}</a>
        </nav>

        <div className="nav-side">
          <div className="lang-switcher" aria-label="Language switcher">
            {languages.map((lang) => (
              <button
                key={lang}
                type="button"
                className={`lang-button${language === lang ? " is-active" : ""}`}
                onClick={() => onLanguageChange(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          <a href="#kontakt" className="nav-cta">{t.navContact}</a>
        </div>
      </div>
    </header>
  );
}
