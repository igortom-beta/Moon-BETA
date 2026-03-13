import { galleryItems } from "./data";

export function GallerySection() {
  return (
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
  );
}
