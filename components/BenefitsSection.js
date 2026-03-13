import { benefits } from "./data";

export function BenefitsSection() {
  return (
    <section className="section">
      <div className="shell split-panel">
        <div className="split-copy reveal-block" data-reveal>
          <p className="split-kicker">Vybrane benefity</p>
          <h2>Prezentace navrzena pro prvni dojem i dalsi obchodni upravy.</h2>
          <p>
            Web je ted rozdeleny do samostatnych Next.js komponent, takze se s nim
            bude pracovat pohodlneji i pri vetsich zmenach. Zaroven jsme presunuli
            video na vlastni hosting a zvetsili jeho roli v uvodni sekci.
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
  );
}
