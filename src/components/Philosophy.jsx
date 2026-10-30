import React from "react";

export function Philosophy() {
  return (
    <section className="philosophy" aria-labelledby="filozofia-title">
      <figure className="philosophy__media">
        <img
          src="/assets/img/druzyna-1400.webp"
          srcSet="/assets/img/druzyna-800.webp 800w, /assets/img/druzyna-1400.webp 1400w, /assets/img/druzyna-2200.webp 2200w"
          sizes="100vw"
          width="1400"
          height="933"
          loading="lazy"
          decoding="async"
          alt="Drużyna Aura Athletes w koszulkach z logo na sali treningowej"
        />
      </figure>
      <div className="section container philosophy__text">
        <h2 className="h2 reveal" id="filozofia-title">
          Trening oparty na wiedzy, danych i&nbsp;indywidualnym podejściu
        </h2>
        <div className="philosophy__cols">
          <p className="reveal">
            Wierzę, że skuteczna praca wymaga połączenia wiedzy, doświadczenia, odpowiednio dobranych metod treningowych i świadomego monitorowania postępów.
          </p>
          <blockquote className="pull pull--large reveal">
            Technologia dostarcza danych. Programowanie treningowe pozwala nadać im kierunek. Systematyczna praca przekłada założenia na rozwój sprawności.
          </blockquote>
          <p className="reveal">
            Niezależnie od tego, czy Twoim celem jest większa siła, lepsze wyniki sportowe czy powrót do aktywności po kontuzji, punktem wyjścia jest zrozumienie Twoich potrzeb i zaplanowanie właściwego procesu.
          </p>
        </div>
      </div>
    </section>
  );
}
