import React from "react";

export function Audience() {
  return (
    <section className="section audience" id="dla-kogo" aria-labelledby="dla-kogo-title">
      <div className="container">
        <p className="eyebrow">Dla kogo</p>
        <h2 className="h2 reveal" id="dla-kogo-title">Dla kogo jest moja praca?</h2>

        <ul className="audience__list">
          <li className="reveal">
            <h3>Sportowcy</h3>
            <p>Którzy chcą poprawić przygotowanie fizyczne i rozwijać potencjał sportowy.</p>
          </li>
          <li className="reveal">
            <h3>Osoby z dolegliwościami bólowymi</h3>
            <p>Które chcą pracować nad sprawnością i tolerancją na ruch oraz obciążenia.</p>
          </li>
          <li className="reveal">
            <h3>Osoby po operacjach i urazach</h3>
            <p>Które odbudowują siłę i sprawność w ramach odpowiednio zaplanowanego procesu.</p>
          </li>
          <li className="reveal">
            <h3>Osoby aktywne fizycznie</h3>
            <p>Które chcą być silniejsze, sprawniejsze i lepiej przygotowane do codziennych wyzwań.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
