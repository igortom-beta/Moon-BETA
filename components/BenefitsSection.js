import { benefits } from "./data";

export function BenefitsSection({ t }) {
  return (
    <section className="section">
      <div className="shell split-panel">
        <div className="split-copy reveal-block" data-reveal>
          <p className="split-kicker">{t.benefitsKicker}</p>
          <h2>{t.benefitsTitle}</h2>
          <p>{t.benefitsDescription}</p>
        </div>

        <div className="benefit-list reveal-block" data-reveal>
          {benefits.map((benefit) => (
            <div className="benefit" key={benefit.titleKey}>
              <strong>{t[benefit.titleKey]}</strong>
              <p>{t[benefit.textKey]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
