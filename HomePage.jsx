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

      <h1>Willkommen bei unserem Reinigungsservice!</h1>
      <p>Ihr zuverlässiger Partner für Gebäudereinigung in Ihrer Region.</p>

      <a href="#kontakt">
        <button>Kontakt aufnehmen</button>
      </a>

      <h2>Unsere Leistungen</h2>
      <ul className="services">
        <li>🧹 Büroreinigung</li>
        <li>🪜 Treppenhausreinigung</li>
        <li>🪟 Fensterreinigung</li>
        <li>🧼 Grundreinigung</li>
        <li>🏥 Praxisreinigung</li>
      </ul>

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

      <footer>
        © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
      </footer>
    </div>
  );
}
