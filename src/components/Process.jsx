import React from "react";

export function Process() {
  return (
    <section className="section process" id="proces" aria-labelledby="proces-title">
      <div className="container">
        <p className="eyebrow">Proces</p>
        <h2 className="h2 reveal" id="proces-title">Jak pracuję?</h2>

        <ol className="steps">
          <li className="step reveal">
            <span className="step__no" aria-hidden="true">01</span>
            <div>
              <h3>Ocena i określenie celu</h3>
              <p>Poznaję Twoje potrzeby, historię treningową, aktualne możliwości i ograniczenia. W zależności od celu wykorzystuję odpowiednie testy funkcjonalne i pomiary dynamometryczne.</p>
            </div>
          </li>
          <li className="step reveal">
            <span className="step__no" aria-hidden="true">02</span>
            <div>
              <h3>Programowanie treningowe</h3>
              <p>Na podstawie zebranych informacji planuję proces. Dobieram ćwiczenia, objętość, intensywność i tempo progresji do celu oraz możliwości organizmu.</p>
            </div>
          </li>
          <li className="step reveal">
            <span className="step__no" aria-hidden="true">03</span>
            <div>
              <h3>Trening i systematyczna praca</h3>
              <p>Realizujemy plan, rozwijając określone zdolności lub stopniowo odbudowując sprawność. Obciążenia dostosowuję do postępów, reakcji organizmu i aktualnego etapu procesu.</p>
            </div>
          </li>
          <li className="step reveal">
            <span className="step__no" aria-hidden="true">04</span>
            <div>
              <h3>Monitorowanie i modyfikacja planu</h3>
              <p>Wykorzystuję obserwacje treningowe i — gdy jest to uzasadnione — powtarzane pomiary, aby ocenić zmiany i zaplanować kolejne etapy.</p>
            </div>
          </li>
        </ol>

        <p className="process__note reveal">Nie realizuję jednego schematu dla wszystkich. Plan powinien odpowiadać konkretnej osobie, jej celom i aktualnym możliwościom.</p>
      </div>
    </section>
  );
}
