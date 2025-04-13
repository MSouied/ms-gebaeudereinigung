import React, { useState } from 'react'; import './index.css';

export default function HomePage() { const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

return ( <> {/* الشريط العلوي */} <header className="navbar"> <div className="navbar-left">MS Gebäudereinigung</div> <nav className="navbar-right"> <a href="#services">Leistungen</a> <a href="#kontakt">Kontakt</a> <a href="#formular">Formular</a> </nav> </header>

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
    <h2 id="services">Unsere Leistungen</h2>
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
      <form onSubmit={handleSubmit} className="contact-form" id="formular">
        <input type="email" placeholder="Ihre E-Mail" required />
        <textarea placeholder="Ihre Nachricht" required />
        <button type="submit">Senden</button>
      </form>
    ) : (
      <p>Vielen Dank! Wir melden uns bald bei Ihnen.</p>
    )}

    {/* Warum wir? */}
    <section className="section">
      <h2>Warum wir?</h2>
      <p>
        Wir arbeiten mit Sorgfalt, Ehrlichkeit und Motivation.<br />
        Unser Ziel ist es, zuverlässige Reinigungsdienste zu fairen Preisen anzubieten.<br />
        Wir nehmen uns Zeit für jeden Kunden und jede Aufgabe.
      </p>
    </section>

    {/* Kundenbewertungen */}
    <section className="section">
      <h2>Kundenbewertungen</h2>
      <p>Noch keine Bewertungen vorhanden – wir freuen uns auf Ihr Feedback!</p>
    </section>

    {/* Unsere Partner */}
    <section className="section">
      <h2>Unsere Partner</h2>
      <p>Derzeit arbeiten wir unabhängig. Partnerschaften sind in Planung.</p>
    </section>

    {/* Kontaktmöglichkeiten */}
    <section className="section">
      <h2>Weitere Kontaktmöglichkeiten</h2>
      <ul className="services">
        <li>📞 Telefon: 0178 1766657</li>
        <li>✉️ E-Mail: xfire80@hotmail.com</li>
        <li>💬 WhatsApp: Direktnachricht möglich</li>
      </ul>
    </section>

    {/* Impressum */}
    <section className="section">
      <h2>Impressum</h2>
      <p>MS Gebäudereinigung</p>
      <p>Kleingewerbe mit Sitz in Lohr am Main</p>
      <p>Diese Website befindet sich im Aufbau.</p>
    </section>

    <footer>
      © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
    </footer>
  </div>
</>

); }

