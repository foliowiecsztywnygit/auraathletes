import React from "react";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <img
          className="site-footer__logo"
          src="/assets/logo/aura-logo-480.webp"
          width="480"
          height="513"
          alt="Aura Athletes"
          loading="lazy"
        />
        <div className="site-footer__meta">
          <p className="site-footer__est"><span>Est 2024</span></p>
          <ul className="site-footer__links">
            <li>
              <a href="https://www.instagram.com/aurathletes/" target="_blank" rel="noopener noreferrer">
                @aurathletes
              </a>
            </li>
            <li>
              <a href="tel:+48791030123">+48 791 030 123</a>
            </li>
          </ul>
          <p className="site-footer__copy">© 2026 Aura Athletes</p>
        </div>
        <span className="site-footer__glyph" lang="ja" aria-hidden="true">光</span>
      </div>
    </footer>
  );
}
