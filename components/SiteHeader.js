export function SiteHeader({ navOpen, onToggle, onNavigate }) {
  return (
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
          onClick={onToggle}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="site-nav" className={`site-nav${navOpen ? " is-open" : ""}`}>
          <a href="#projekt" onClick={onNavigate}>Uvod</a>
          <a href="#video-sekce" onClick={onNavigate}>Video</a>
          <a href="#informace" onClick={onNavigate}>Informace</a>
          <a href="#galerie" onClick={onNavigate}>Galerie</a>
          <a href="#kontakt" onClick={onNavigate}>Kontakt</a>
        </nav>

        <a href="#kontakt" className="nav-cta">Kontakt</a>
      </div>
    </header>
  );
}
