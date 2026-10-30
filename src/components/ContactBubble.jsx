import React, { useState, useEffect, useRef } from "react";

export function ContactBubble() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const bubbleRef = useRef(null);

  useEffect(() => {
    let heroVisible = true;
    let contactVisible = false;

    const hero = document.querySelector(".hero");
    const contact = document.getElementById("kontakt");

    const updateVisibility = () => {
      setIsVisible(!heroVisible && !contactVisible);
      if (heroVisible || contactVisible) {
        setIsOpen(false);
      }
    };

    if ("IntersectionObserver" in window && hero && contact) {
      const heroObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            heroVisible = en.intersectionRatio > 0.35;
          });
          updateVisibility();
        },
        { threshold: [0, 0.35, 1] }
      );
      heroObserver.observe(hero);

      const contactObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((en) => {
            contactVisible = en.isIntersecting;
          });
          updateVisibility();
        },
        { threshold: 0.2 }
      );
      contactObserver.observe(contact);

      return () => {
        heroObserver.disconnect();
        contactObserver.disconnect();
      };
    } else {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bubbleRef.current && !bubbleRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={bubbleRef}
      className="bubble"
      data-state={isVisible ? "visible" : "hidden"}
    >
      <div className="bubble__menu" id="bubble-menu" hidden={!isOpen}>
        <a
          href="https://wa.me/48791030123"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          WhatsApp
        </a>
        <a href="sms:+48791030123" onClick={() => setIsOpen(false)}>
          SMS
        </a>
        <a
          href="https://www.instagram.com/aurathletes/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
        >
          Instagram
        </a>
      </div>

      <button
        className="bubble__toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="bubble-menu"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span className="bubble__label-open">Napisz</span>
        <span className="bubble__label-close">Zamknij</span>
      </button>
    </div>
  );
}
