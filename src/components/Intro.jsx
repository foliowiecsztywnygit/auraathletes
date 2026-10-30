import React from "react";

export function Intro() {
  return (
    <section className="section intro" aria-label="Wprowadzenie">
      <div className="container">
        <p className="intro__lead reveal">
          Pomagam sportowcom rozwijać potencjał fizyczny, a osobom zmagającym się z bólem i ograniczeniami ruchowymi — stopniowo odbudowywać sprawność.
        </p>
        <div className="intro__body reveal">
          <p>
            Łączę programowanie treningowe, przygotowanie motoryczne, trening siłowy i trening medyczny z obiektywną diagnostyką wykorzystującą technologię VALD Performance.
          </p>
          <p>
            Pracuję zarówno z zawodnikami, którzy chcą osiągać lepsze wyniki sportowe, jak i z osobami wracającymi do aktywności po urazach, operacjach i dłuższych przerwach w treningu.
          </p>
        </div>
      </div>
    </section>
  );
}
