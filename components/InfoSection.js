export function InfoSection() {
  return (
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
  );
}
