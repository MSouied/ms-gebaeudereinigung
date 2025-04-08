// ملف: HomePage.jsx

import React from 'react'; import './index.css';

function HomePage() { return ( <div className="container"> {/* شعار الشركة */} <img
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
  <button onClick={() => window.location.href = 'mailto:xfire80@hotmail.com'}>
    Kontakt aufnehmen
  </button>

  {/* تذييل احترافي */}
  <footer>
    © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
  </footer>
</div>

); }

export default HomePage;

