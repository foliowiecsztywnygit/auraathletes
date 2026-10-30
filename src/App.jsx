import React, { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Intro } from "./components/Intro";
import { Areas } from "./components/Areas";
import { Process } from "./components/Process";
import { Audience } from "./components/Audience";
import { About } from "./components/About";
import { Philosophy } from "./components/Philosophy";
import { Pricing } from "./components/Pricing";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ContactBubble } from "./components/ContactBubble";
import { CertificateModal } from "./components/CertificateModal";
import { useScrollReveal } from "./hooks/useScrollReveal";

export function App() {
  const [selectedCert, setSelectedCert] = useState(null);
  useScrollReveal();

  return (
    <>
      <a className="skip-link" href="#main">Przejdź do treści</a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Areas />
        <Process />
        <Audience />
        <About onSelectCert={setSelectedCert} />
        <Philosophy />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <ContactBubble />
      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
}
