import React from "react";

export function Areas() {
  return (
    <section className="section areas" id="obszary" aria-labelledby="obszary-title">
      <div className="container">
        <p className="eyebrow">Obszary pracy</p>
        <h2 className="visually-hidden" id="obszary-title">Obszary pracy</h2>

        {/* Przygotowanie motoryczne */}
        <article className="area reveal">
          <figure className="area__media">
            <img
              src="/assets/img/motoryka-1080.webp"
              srcSet="/assets/img/motoryka-640.webp 640w, /assets/img/motoryka-1080.webp 1080w, /assets/img/motoryka-1600.webp 1600w"
              sizes="(min-width: 960px) 44vw, 100vw"
              width="1080"
              height="1351"
              loading="lazy"
              decoding="async"
              alt="Trener asekuruje zawodnika wykonującego przysiad ze sztangą"
            />
          </figure>
          <div className="area__text">
            <h3 className="h2">Przygotowanie motoryczne i&nbsp;rozwój sportowy</h3>
            <p>Prowadzę zawodników indywidualnie, uwzględniając wymagania ich sportu, poziom zaawansowania i cele treningowe.</p>
            <p>Pracuję między innymi z zawodnikami trójboju siłowego, sportów walki oraz piłki nożnej. Wspieram również osoby uprawiające inne dyscypliny, które chcą poprawić siłę, dynamikę, sprawność i jakość treningu.</p>
            <p>Tworzę i realizuję programy treningowe dopasowane do zawodnika — od rozwoju podstawowych zdolności motorycznych po bardziej zaawansowane przygotowanie fizyczne.</p>
            <ul className="tags" aria-label="Dyscypliny">
              <li>Trójbój siłowy</li>
              <li>Sporty walki</li>
              <li>Piłka nożna</li>
            </ul>
          </div>
        </article>

        {/* Trening medyczny */}
        <article className="area area--flip reveal">
          <figure className="area__media">
            <img
              src="/assets/img/medyczny-1080.webp"
              srcSet="/assets/img/medyczny-640.webp 640w, /assets/img/medyczny-1080.webp 1080w"
              sizes="(min-width: 960px) 44vw, 100vw"
              width="1080"
              height="1920"
              loading="lazy"
              decoding="async"
              alt="Trener ocenia zakres ruchu w stawie kolanowym podopiecznej leżącej na kozetce"
            />
          </figure>
          <div className="area__text">
            <h3 className="h2">Trening medyczny i&nbsp;odbudowa sprawności</h3>
            <p>Ból, uraz lub operacja mogą znacząco ograniczyć możliwości ruchowe i utrudnić powrót do codziennej aktywności czy sportu.</p>
            <p>W swojej pracy pomagam stopniowo odbudowywać siłę, tolerancję na obciążenia i sprawność funkcjonalną. Dobieram ćwiczenia oraz ich intensywność do aktualnych możliwości danej osoby, etapu powrotu do aktywności i zaleceń dotyczących dalszego postępowania.</p>
            <p>Pracuję z osobami z dolegliwościami bólowymi, po operacjach kręgosłupa i kolana, rekonstrukcji więzadła krzyżowego przedniego (ACL), szyciu łąkotki, a także z problemami dotyczącymi barków i stawów skokowych.</p>
            <ul className="tags" aria-label="Z czym pracuję">
              <li>Kręgosłup</li>
              <li>Kolano</li>
              <li>ACL</li>
              <li>Łąkotka</li>
              <li>Barki</li>
              <li>Stawy skokowe</li>
            </ul>
            <p>W zależności od sytuacji uzupełniam proces rehabilitacji odpowiednio dobranym treningiem siłowym i funkcjonalnym. Celem jest odzyskiwanie sprawności i przygotowanie organizmu do coraz większych wymagań — od codziennych czynności po powrót do sprawności i sportu.</p>
          </div>
        </article>

        {/* Diagnostyka */}
        <article className="area reveal" id="diagnostyka">
          <figure className="area__media">
            <img
              src="/assets/img/diagnostyka-1080.webp"
              srcSet="/assets/img/diagnostyka-640.webp 640w, /assets/img/diagnostyka-1080.webp 1080w, /assets/img/diagnostyka-1600.webp 1600w"
              sizes="(min-width: 960px) 44vw, 100vw"
              width="1080"
              height="1620"
              loading="lazy"
              decoding="async"
              alt="Zawodnik wykonuje wyskok na platformach dynamometrycznych, trener odczytuje wynik na tablecie"
            />
          </figure>
          <div className="area__text">
            <h3 className="h2">Diagnostyka, która wspiera decyzje treningowe</h3>
            <p>Nie tylko oceniam, jak ktoś się porusza. Sprawdzam również, jakie możliwości fizyczne jest w stanie wykazać podczas testów diagnostycznych.</p>
            <p>Wykorzystuję platformy dynamometryczne i dynamometr firmy VALD Performance, aby uzupełnić ocenę sprawności o obiektywne pomiary.</p>
          </div>
        </article>

        {/* Parametry diagnostyczne */}
        <div className="metrics reveal">
          <p className="metrics__intro">W zależności od zastosowanego urządzenia i protokołu testowego mogę oceniać między innymi:</p>
          <ol className="metrics__list">
            <li>
              <h4>Siłę mięśniową</h4>
              <p>Możliwości generowania siły przez wybrane grupy mięśniowe.</p>
            </li>
            <li>
              <h4>Moc i dynamikę</h4>
              <p>Zdolność do szybkiego rozwijania siły i wykonywania dynamicznych zadań ruchowych.</p>
            </li>
            <li>
              <h4>Różnice między kończynami</h4>
              <p>Wybrane asymetrie, które należy interpretować w kontekście całego obrazu funkcjonalnego.</p>
            </li>
            <li>
              <h4>Parametry ruchu</h4>
              <p>W tym wybrane charakterystyki wyskoku, lądowania, równowagi lub innych testowanych zadań.</p>
            </li>
          </ol>
        </div>

        <div className="data reveal">
          <figure className="data__media">
            <img
              src="/assets/img/tablet-1080.webp"
              srcSet="/assets/img/tablet-640.webp 640w, /assets/img/tablet-1080.webp 1080w"
              sizes="(min-width: 960px) 30vw, 100vw"
              width="1080"
              height="1920"
              loading="lazy"
              decoding="async"
              alt="Tablet z wynikiem pomiaru siły w niutonach z dynamometru VALD"
            />
          </figure>
          <div className="data__text">
            <p>Pomiary wykorzystuję jako punkt wyjścia do planowania treningu, monitorowania zmian i weryfikowania efektów kolejnych etapów pracy.</p>
            <p>W przypadku sportowców pozwalają lepiej ukierunkować przygotowanie fizyczne. U osób wracających do sprawności mogą stanowić istotne uzupełnienie oceny funkcjonalnej i procesu rehabilitacji.</p>
            <blockquote className="pull">
              Sam wynik nie jest odpowiedzią na każde pytanie. Jego wartość wynika z właściwego doboru testu, interpretacji danych i przełożenia ich na konkretne działania.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
