import React from "react";

const CERTIFICATES = [
  {
    name: "Trening Medyczny Level 3",
    meta: "Train Movement Academy",
    img: "/assets/cert/trening-medyczny.webp",
    width: 1600,
    height: 1127,
  },
  {
    name: "Rehab Kolano — rehabilitacja kolana w realiach gabinetu i siłowni",
    meta: "Strength Development · 2026",
    img: "/assets/cert/rehab-kolano.webp",
    width: 1600,
    height: 1126,
  },
  {
    name: "Diagnostyka Trenerska",
    meta: "A-game Athletic Performance · Wrocław 2023 · 15 h",
    img: "/assets/cert/diagnostyka-trenerska.webp",
    width: 1600,
    height: 1162,
  },
  {
    name: "Personal Trainer",
    meta: "Vocational Competence Certificate (VCC) · 2024",
    img: "/assets/cert/personal-trainer-vcc.webp",
    width: 1600,
    height: 1106,
  },
];

export function About({ onSelectCert }) {
  return (
    <section className="section about" id="o-mnie" aria-labelledby="o-mnie-title">
      <div className="container about__grid">
        <figure className="about__media reveal">
          <img
            src="/assets/img/portret-1080.webp"
            srcSet="/assets/img/portret-640.webp 640w, /assets/img/portret-1080.webp 1080w"
            sizes="(min-width: 960px) 38vw, 100vw"
            width="1080"
            height="1920"
            loading="lazy"
            decoding="async"
            alt="Grzegorz Krawiec z tabletem podczas testów diagnostycznych na sali treningowej"
          />
        </figure>

        <div className="about__text">
          <p className="eyebrow">O mnie</p>
          <h2 className="h2 reveal" id="o-mnie-title">Grzegorz Krawiec</h2>
          <p className="about__role reveal">Trener przygotowania fizycznego</p>

          <div className="reveal">
            <p>Jestem trenerem przygotowania fizycznego. W swojej pracy łączę elementy treningu siłowego, przygotowania motorycznego i treningu medycznego.</p>
            <p>Pracuję ze sportowcami reprezentującymi różne dyscypliny, w tym trójbój siłowy, sporty walki i piłkę nożną. Wspieram również osoby, które chcą poprawić swoją sprawność, odbudować siłę lub wrócić do aktywności po urazach i operacjach.</p>
            <p>Podczas pracy z klientami korzystam z platform dynamometrycznych i dynamometru, które pomagają mi dokładniej ocenić siłę i możliwości fizyczne danej osoby. Dzięki temu mogę lepiej dopasować trening do Twoich potrzeb i na bieżąco sprawdzać postępy rehabilitacji.</p>
            <p className="about__goal">Moim celem jest pomagać ludziom rozwijać możliwości fizyczne i świadomie pracować nad sprawnością.</p>
          </div>

          <div className="certs reveal">
            <h3 className="certs__title">Kwalifikacje</h3>
            <ul className="certs__list">
              {CERTIFICATES.map((cert) => (
                <li key={cert.name}>
                  <button
                    type="button"
                    className="cert"
                    onClick={() => onSelectCert(cert)}
                  >
                    <span className="cert__name">{cert.name}</span>
                    <span className="cert__meta">{cert.meta}</span>
                    <span className="cert__view">Zobacz</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
