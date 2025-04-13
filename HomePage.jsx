import React from 'react';
import './index.css';

function HomePage() {
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

      {/* العنوان والترحيب */}
      <h1>Willkommen bei unserem Reinigungsservice!</h1>
      <p>Dies ist eine Beispielseite für unsere zukünftige Website.</p>

      {/* زر الاتصال */}
      <a href="mailto:xfire80@hotmail.com">
        <button>Kontakt aufnehmen</button>
      </a>

      {/* قسم من نحن */}
      <section className="section">
        <h2>Über uns</h2>
        <p>
          MS Gebäudereinigung ist ein engagiertes Familienunternehmen mit Leidenschaft für Sauberkeit und Zuverlässigkeit.
          Wir setzen auf Qualität, Vertrauen und transparente Kommunikation mit unseren Kunden.
        </p>
        <p>
          Mit einem motivierten Team bieten wir professionelle Reinigungsdienste für Büros, Praxen, Treppenhäuser und mehr –
          individuell abgestimmt auf Ihre Bedürfnisse.
        </p>
      </section>

      {/* قسم الخدمات */}
      <section className="section">
        <h2>Unsere Leistungen</h2>
        <ul className="services">
          <li>Büroreinigung</li>
          <li>Treppenhausreinigung</li>
          <li>Fensterreinigung</li>
          <li>Grundreinigung</li>
          <li>Praxisreinigung</li>
        </ul>
      </section>

      {/* نموذج التواصل */}
      <section className="section">
        <h2>Kontaktformular</h2>
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.');
          }}
        >
          <input type="email" placeholder="Ihre E-Mail" required />
          <textarea placeholder="Ihre Nachricht" required></textarea>
          <button type="submit">Senden</button>
        </form>
      </section>

      {/* تذييل احترافي */}
      <footer>
        © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
      </footer>
    </div>
  );
}

export default HomePage;
