import React, { useState } from 'react';
import './index.css';

function HomePage() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="container">
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{
          width: '180px',
          borderRadius: '12px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          marginBottom: '30px'
        }}
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
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="email" placeholder="Ihre E-Mail" required />
        <textarea placeholder="Ihre Nachricht" required></textarea>
        <button type="submit">Senden</button>
        {messageSent && (
          <p style={{ color: '#00796b', fontWeight: 'bold' }}>
            Vielen Dank! Wir melden uns bald bei Ihnen.
          </p>
        )}
      </form>

      <footer style={{ marginTop: '60px', fontSize: '13px', color: '#999' }}>
        © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
      </footer>
    </div>
  );
}

export default HomePage;
