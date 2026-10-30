import React, { useState, useEffect } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("nav-locked", isOpen);
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("nav-locked");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e) => {
      if (e.matches) setIsOpen(false);
    };
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isSolid || isOpen ? "is-solid" : ""}`} id="top">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Aura Athletes — strona główna" onClick={closeMenu}>
          <img src="/assets/logo/aura-logo-480.webp" width="480" height="513" alt="Aura Athletes" />
        </a>

        <nav className={`nav ${isOpen ? "is-open" : ""}`} aria-label="Główna nawigacja">
          <button
            className="nav__toggle"
            type="button"
            aria-expanded={isOpen}
            aria-controls="nav-list"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="nav__toggle-open">Menu</span>
            <span className="nav__toggle-close">Zamknij</span>
          </button>

          <div className="nav__panel" id="nav-list">
            <ul className="nav__list">
              <li><a href="#obszary" onClick={closeMenu}>Obszary pracy</a></li>
              <li><a href="#proces" onClick={closeMenu}>Jak pracuję</a></li>
              <li><a href="#o-mnie" onClick={closeMenu}>O mnie</a></li>
              <li><a href="#cennik" onClick={closeMenu}>Cennik</a></li>
              <li><a href="#kontakt" onClick={closeMenu}>Kontakt</a></li>
            </ul>
            <a className="nav__phone" href="tel:+48791030123">+48 791 030 123</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
