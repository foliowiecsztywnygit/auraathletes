import React, { useState, useRef } from "react";

const TABS = [
  { id: "ustrzyki", city: "Ustrzyki Dolne", place: "Studio" },
  { id: "lesko", city: "Lesko", place: "Basen" },
  { id: "sanok", city: "Sanok", place: "Energy" },
];

const PRICING_DATA = {
  ustrzyki: {
    title: "Ustrzyki Dolne · Studio",
    single: [
      { name: "1 trening", price: "140 zł" },
      { name: "4 treningi", price: "525 zł" },
      { name: "8 treningów", price: "1 000 zł" },
      { name: "12 treningów", price: "1 450 zł" },
      { name: "48 treningów", price: "5 000 zł" },
    ],
    double: [
      { name: "1 trening", price: "200 zł" },
      { name: "4 treningi", price: "720 zł" },
      { name: "8 treningów", price: "1 360 zł" },
      { name: "12 treningów", price: "1 900 zł" },
      { name: "48 treningów", price: "7 000 zł" },
    ],
    triple: [
      { name: "1 trening", price: "250 zł" },
      { name: "4 treningi", price: "920 zł" },
      { name: "8 treningów", price: "1 720 zł" },
      { name: "12 treningów", price: "2 400 zł" },
    ],
  },
  lesko: {
    title: "Lesko · Basen",
    single: [
      { name: "1 trening", price: "120 zł" },
      { name: "4 treningi", price: "450 zł" },
      { name: "8 treningów", price: "850 zł" },
      { name: "12 treningów", price: "1 200 zł" },
      { name: "48 treningów", price: "4 000 zł" },
    ],
    double: [
      { name: "1 trening", price: "150 zł" },
      { name: "4 treningi", price: "560 zł" },
      { name: "8 treningów", price: "1 050 zł" },
      { name: "12 treningów", price: "1 500 zł" },
      { name: "48 treningów", price: "5 000 zł" },
    ],
    triple: [
      { name: "1 trening", price: "200 zł" },
      { name: "4 treningi", price: "740 zł" },
      { name: "8 treningów", price: "1 400 zł" },
      { name: "12 treningów", price: "1 900 zł" },
    ],
  },
  sanok: {
    title: "Sanok · Energy",
    single: [
      { name: "1 trening", price: "150 zł" },
      { name: "4 treningi", price: "560 zł" },
      { name: "8 treningów", price: "1 040 zł" },
      { name: "12 treningów", price: "1 450 zł" },
      { name: "48 treningów", price: "5 100 zł" },
    ],
    double: [
      { name: "1 trening", price: "200 zł" },
      { name: "4 treningi", price: "720 zł" },
      { name: "8 treningów", price: "1 360 zł" },
      { name: "12 treningów", price: "1 900 zł" },
      { name: "48 treningów", price: "7 000 zł" },
    ],
    triple: [
      { name: "1 trening", price: "250 zł" },
      { name: "4 treningi", price: "920 zł" },
      { name: "8 treningów", price: "1 720 zł" },
      { name: "12 treningów", price: "2 400 zł" },
    ],
  },
};

const SERVICES = [
  { name: "Konsultacja diagnostyczna na platformach dynamometrycznych", price: "400 zł" },
  { name: "Konsultacja diagnostyczna + plan treningowy", price: "400 zł" },
  { name: "Plan treningowy", price: "200 zł" },
  { name: "Plan treningowy + 1 trening personalny", price: "300 zł" },
  { name: "Plan treningowy + 2 treningi personalne", price: "430 zł" },
  { name: "Plan treningowy + 3 treningi personalne", price: "560 zł" },
  { name: "Prowadzenie online", price: "350 zł", note: "/ miesiąc" },
];

export function Pricing() {
  const [activeTab, setActiveTab] = useState("ustrzyki");
  const tabRefs = useRef({});

  const handleKeyDown = (e, index) => {
    let nextIndex = null;
    if (e.key === "ArrowRight") nextIndex = (index + 1) % TABS.length;
    if (e.key === "ArrowLeft") nextIndex = (index - 1 + TABS.length) % TABS.length;
    if (e.key === "Home") nextIndex = 0;
    if (e.key === "End") nextIndex = TABS.length - 1;

    if (nextIndex !== null) {
      e.preventDefault();
      const nextTab = TABS[nextIndex].id;
      setActiveTab(nextTab);
      tabRefs.current[nextTab]?.focus();
    }
  };

  const current = PRICING_DATA[activeTab];

  return (
    <section className="section pricing" id="cennik" aria-labelledby="cennik-title">
      <div className="container">
        <p className="eyebrow">Cennik</p>
        <h2 className="h2 reveal" id="cennik-title">Karnety treningowe</h2>

        <div className="tabs" role="tablist" aria-label="Lokalizacja">
          {TABS.map((tab, idx) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                ref={(el) => (tabRefs.current[tab.id] = el)}
                className="tab"
                role="tab"
                id={`tab-${tab.id}`}
                aria-controls={`panel-${tab.id}`}
                aria-selected={isSelected}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              >
                <span className="tab__city">{tab.city}</span>
                <span className="tab__place">{tab.place}</span>
              </button>
            );
          })}
        </div>

        <div
          className="panel"
          role="tabpanel"
          id={`panel-${activeTab}`}
          aria-labelledby={`tab-${activeTab}`}
        >
          <h3 className="panel__title">{current.title}</h3>
          <div className="passes">
            <div className="pass">
              <h4 className="pass__title">Karnet jednoosobowy</h4>
              <dl className="pass__rows">
                {current.single.map((row) => (
                  <div key={row.name}>
                    <dt>{row.name}</dt>
                    <dd>{row.price}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="pass">
              <h4 className="pass__title">Karnet dwuosobowy</h4>
              <dl className="pass__rows">
                {current.double.map((row) => (
                  <div key={row.name}>
                    <dt>{row.name}</dt>
                    <dd>{row.price}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="pass">
              <h4 className="pass__title">Karnet trzyosobowy</h4>
              <dl className="pass__rows">
                {current.triple.map((row) => (
                  <div key={row.name}>
                    <dt>{row.name}</dt>
                    <dd>{row.price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="services reveal">
          <h3 className="services__title">Diagnostyka, plany i prowadzenie online</h3>
          <p className="services__note">Niezależnie od lokalizacji</p>
          <dl className="pass__rows services__rows">
            {SERVICES.map((s) => (
              <div key={s.name}>
                <dt>{s.name}</dt>
                <dd>
                  {s.price} {s.note && <small>{s.note}</small>}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
