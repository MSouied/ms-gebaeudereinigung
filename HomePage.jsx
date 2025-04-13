// ===== HomePage.jsx ===== // الخطوة 1: افتح ملف HomePage.jsx في مشروعك على GitHub // الخطوة 2: احذف كل الكود السابق فيه، ثم الصق الكود التالي:

import React from 'react'; import './index.css';

export default function HomePage() { return ( <div className="container"> <img src="/logo-ms-gebaeudereinigung.PNG" alt="Firmenlogo" style={{ width: '180px', marginBottom: '20px' }} />

<img
    src="/flyer.jpg.PNG"
    alt="Flyer"
    style={{ width: '400px', marginBottom: '30px' }}
  />

  <h1>Willkommen bei unserem Reinigungsservice!</h1>
  <p>Dies ist eine Beispielseite für unsere zukünftige Website.</p>

  <a href="mailto:xfire80@hotmail.com">
    <button>Kontakt aufnehmen</button>
  </a>

  <footer>
    © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
  </footer>
</div>

); }

