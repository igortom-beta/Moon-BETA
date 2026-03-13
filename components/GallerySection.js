import { galleryItems } from "./data";

export function GallerySection({ t }) {
  return (
    <section id="galerie" className="section section-muted">
      <div className="shell">
        <div className="gallery-heading reveal-block" data-reveal>
          <div>
            <h2>{t.galleryTitle}</h2>
            <p>{t.galleryDescription}</p>
          </div>
          <a href="#kontakt" className="text-link">{t.galleryCta}</a>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure
              key={item.src}
              className={`gallery-item${item.wide ? " gallery-item-wide" : ""} reveal-block`}
              data-reveal
            >
              <img src={item.src} alt={item.alt} />
              <figcaption>{t[item.titleKey]}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
