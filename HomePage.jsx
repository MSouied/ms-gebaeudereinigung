import React, { useState } from 'react';
import './index.css';

export default function HomePage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container">
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        className="logo"
      />

      {/* منشور الخدمات */}
      <img
        src="/flyer.jpg.PNG"
        alt="Flyer MS Gebäudereinigung"
        className="flyer"
      />

      {/* الترحيب والعنوان */}
      <h1>Willkommen bei unserem Reinigungsservice!</h1>
      <p>Ihr zuverlässiger Partner für Gebäudereinigung in Ihrer Region.</p>

      <a href="#kontakt">
        <button>Kontakt aufnehmen</button>
      </a>

      {/* الخدمات */}
      <h2>Unsere Leistungen</h2>
      <ul className="services">
        <li>🧹 Büroreinigung</li>
        <li>🪜 Treppenhausreinigung</li>
        <li>🪟 Fensterreinigung</li>
        <li>🧼 Grundreinigung</li>
        <li>🏥 Praxisreinigung</li>
      </ul>

      {/* نموذج التواصل */}
      <h2 id="kontakt">Kontaktformular</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="email" placeholder="Ihre E-Mail" required />
          <textarea placeholder="Ihre Nachricht" required />
          <button type="submit">Senden</button>
        </form>
      ) : (
        <p>Vielen Dank! Wir melden uns bald bei Ihnen.</p>
      )}

      {/* 1. Warum wir? */}
      <section className="section">
        <h2>Warum wir?</h2>
        <ul className="services">
          <li>✔️ Über 10 Jahre Erfahrung</li>
          <li>✔️ Umweltfreundliche Reinigungsmittel</li>
          <li>✔️ Schnelle & zuverlässige Services</li>
          <li>✔️ Flexibel & kundenorientiert</li>
        </ul>
      </section>

      {/* 2. Kundenbewertungen */}
      <section className="section">
        <h2>Kundenbewertungen</h2>
        <ul className="services">
          <li>⭐ \"Sehr professionell und freundlich – empfehlenswert!\"</li>
          <li>⭐ \"Immer pünktlich und gründlich, top Service!\"</li>
          <li>⭐ \"Unsere Praxis war nie sauberer – Danke!\"</li>
        </ul>
      </section>

      {/* 3. Unsere Partner */}
      <section className="section">
        <h2>Unsere Partner</h2>
        <ul className="services">
          <li>🏢 Kanzlei Müller</li>
          <li>🏥 Zahnarztpraxis am Main</li>
          <li>🏘️ Hausverwaltung Lohr</li>
        </ul>
      </section>

      {/* 4. Kontaktmöglichkeiten */}
      <section className="section">
        <h2>Weitere Kontaktmöglichkeiten</h2>
        <ul className="services">
          <li>📞 Telefon: 0178 1766657</li>
          <li>✉️ E-Mail: xfire80@hotmail.com</li>
          <li>💬 WhatsApp: Direktnachricht möglich</li>
        </ul>
      </section>

      {/* 5. Impressum */}
      <section className="section">
        <h2>Impressum</h2>
        <p>MS Gebäudereinigung</p>
        <p>Mohamad Souied, Neue Gärten 17, 97816 Lohr am Main</p>
        <p>USt-ID: DE123456789</p>
      </section>

      {/* التذييل */}
      <footer>
        © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
      </footer>
    </div>
  );
}
