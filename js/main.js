/* Aura Athletes — interakcje (vanilla JS, bez zależności) */
(function () {
  "use strict";

  var doc = document.documentElement;
  doc.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Nagłówek: tło po zjechaniu z hero ---------- */
  var header = document.querySelector(".site-header");
  function onScroll() {
    header.classList.toggle("is-solid", window.scrollY > 40);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Menu mobilne ---------- */
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");

  function setNav(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("nav-locked", open);
    if (open) header.classList.add("is-solid"); else onScroll();
  }
  toggle.addEventListener("click", function () {
    setNav(toggle.getAttribute("aria-expanded") !== "true");
  });
  nav.querySelectorAll(".nav__panel a").forEach(function (a) {
    a.addEventListener("click", function () { setNav(false); });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) { setNav(false); toggle.focus(); }
  });
  window.matchMedia("(min-width: 1024px)").addEventListener("change", function (m) {
    if (m.matches) setNav(false);
  });

  /* ---------- Wideo w hero ---------- */
  var video = document.querySelector(".hero__video");
  var pauseBtn = document.querySelector(".hero__pause");

  function setPaused(paused) {
    if (paused) video.pause(); else video.play().catch(function () {});
    pauseBtn.setAttribute("aria-pressed", String(paused));
    pauseBtn.textContent = paused ? "Odtwórz" : "Pauza";
  }
  if (video) {
    if (reduceMotion) {
      video.removeAttribute("autoplay");
      setPaused(true);
    }
    pauseBtn.addEventListener("click", function () {
      setPaused(!video.paused);
    });
    // nie odtwarzaj wideo poza ekranem
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (pauseBtn.getAttribute("aria-pressed") === "true") return;
          if (en.isIntersecting) video.play().catch(function () {}); else video.pause();
        });
      }, { threshold: 0.05 }).observe(video);
    }
  }

  /* ---------- Pojawianie się treści ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(function (el) { el.classList.add("is-in"); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ---------- Cennik: zakładki lokalizacji ---------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute("aria-controls")).hidden = !on;
    });
    if (focus) tab.focus();
  }
  if (tabs.length) {
    selectTab(tabs[0], false);
    tabs.forEach(function (tab, i) {
      tab.addEventListener("click", function () { selectTab(tab, false); });
      tab.addEventListener("keydown", function (e) {
        var next = null;
        if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
        if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
        if (e.key === "Home") next = tabs[0];
        if (e.key === "End") next = tabs[tabs.length - 1];
        if (next) { e.preventDefault(); selectTab(next, true); }
      });
    });
  }

  /* ---------- Bąbelek kontaktowy ---------- */
  var bubble = document.querySelector(".bubble");
  var bubbleBtn = document.querySelector(".bubble__toggle");
  var bubbleMenu = document.getElementById("bubble-menu");
  var hero = document.querySelector(".hero");
  var contact = document.getElementById("kontakt");
  var heroVisible = true, contactVisible = false;

  function setBubbleMenu(open) {
    bubbleMenu.hidden = !open;
    bubbleBtn.setAttribute("aria-expanded", String(open));
  }
  function updateBubble() {
    var show = !heroVisible && !contactVisible;
    bubble.dataset.state = show ? "visible" : "hidden";
    if (!show) setBubbleMenu(false);
  }
  bubbleBtn.addEventListener("click", function () {
    setBubbleMenu(bubbleMenu.hidden);
  });
  document.addEventListener("click", function (e) {
    if (!bubble.contains(e.target)) setBubbleMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !bubbleMenu.hidden) { setBubbleMenu(false); bubbleBtn.focus(); }
  });

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        heroVisible = en.intersectionRatio > 0.35;
      });
      updateBubble();
    }, { threshold: [0, 0.35, 1] }).observe(hero);
    new IntersectionObserver(function (entries) {
      contactVisible = entries[0].isIntersecting;
      updateBubble();
    }, { threshold: 0.2 }).observe(contact);
  } else {
    bubble.dataset.state = "visible";
  }

  /* ---------- Podgląd certyfikatów ---------- */
  var dialog = document.querySelector(".lightbox");
  var lbImg = dialog.querySelector(".lightbox__img");
  var lbCap = dialog.querySelector(".lightbox__caption");

  document.querySelectorAll(".cert").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var name = btn.querySelector(".cert__name").textContent;
      lbImg.src = btn.dataset.cert;
      lbImg.width = btn.dataset.w;
      lbImg.height = btn.dataset.h;
      lbImg.alt = "Certyfikat: " + name;
      lbCap.textContent = name;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else window.open(btn.dataset.cert, "_blank");
    });
  });
  // zamknięcie kliknięciem w tło
  dialog.addEventListener("click", function (e) {
    if (e.target === dialog) dialog.close();
  });
})();
