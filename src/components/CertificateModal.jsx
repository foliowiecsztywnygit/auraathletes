import React, { useEffect, useRef } from "react";

export function CertificateModal({ cert, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (cert) {
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [cert]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  if (!cert) return null;

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      aria-label="Podgląd certyfikatu"
      onClick={handleBackdropClick}
      onClose={onClose}
    >
      <form method="dialog" className="lightbox__bar" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
        <p className="lightbox__caption">{cert.name}</p>
        <button className="lightbox__close" type="button" onClick={onClose}>
          Zamknij
        </button>
      </form>
      <img
        className="lightbox__img"
        src={cert.img}
        alt={`Certyfikat: ${cert.name}`}
        width={cert.width}
        height={cert.height}
      />
    </dialog>
  );
}
