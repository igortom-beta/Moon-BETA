export function ContactSection({ submitLabel, submitState, onSubmit }) {
  return (
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

        <form className="contact-form reveal-block" data-reveal onSubmit={onSubmit}>
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
  );
}
