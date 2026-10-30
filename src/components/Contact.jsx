import React from "react";

export function Contact() {
  return (
    <section className="section contact" id="kontakt" aria-labelledby="kontakt-title">
      <div className="container">
        <p className="eyebrow">Kontakt</p>
        <h2 className="contact__title reveal" id="kontakt-title">
          Zacznij od swojego celu.
        </h2>
        <div className="contact__body reveal">
          <p>
            Chcesz poprawić wyniki sportowe, rozwinąć siłę, sprawdzić swoje możliwości w testach diagnostycznych czy odbudować sprawność po urazie?
          </p>
          <p>
            Skontaktuj się ze mną. Wspólnie określimy cel i zaplanujemy dalsze działania.
          </p>
        </div>

        <a className="contact__phone reveal" href="tel:+48791030123">
          +48&nbsp;791&nbsp;030&nbsp;123
        </a>

        <ul className="contact__actions reveal">
          <li>
            <a className="btn btn--gold" href="tel:+48791030123">Zadzwoń</a>
          </li>
          <li>
            <a className="btn btn--line" href="https://wa.me/48791030123" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </li>
          <li>
            <a className="btn btn--line" href="sms:+48791030123">SMS</a>
          </li>
          <li>
            <a className="btn btn--line" href="https://www.instagram.com/aurathletes/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>

        <div className="contact__places reveal">
          <h3>Gdzie trenujemy</h3>
          <ul>
            <li><strong>Ustrzyki Dolne</strong> Studio</li>
            <li><strong>Lesko</strong> Basen</li>
            <li><strong>Sanok</strong> Energy</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
