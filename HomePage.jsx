import React from 'react';

function HomePage() { const scrollToContact = () => { const footer = document.getElementById('footer'); if (footer) { footer.scrollIntoView({ behavior: 'smooth' }); } };

return ( <div style={{ minHeight: '100vh', backgroundColor: '#eaf7f4', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '60px 20px', fontFamily: 'Arial, sans-serif', }} > {/* شعار الشركة */} <img src="/logo-ms-gebaeudereinigung.PNG" alt="MS Gebäudereinigung Logo" style={{ width: '200px', marginBottom: '35px', borderRadius: '14px', boxShadow: '0 6px 14px rgba(0,0,0,0.2)', transition: 'transform 0.4s ease', }} onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')} onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')} />

{/* منشور الخدمات */}
  <img
    src="/flyer.jpg.PNG"
    alt="Flyer MS Gebäudereinigung"
    style={{
      width: '420px',
      borderRadius: '18px',
      marginBottom: '40px',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
      transition: 'transform 0.4s ease',
    }}
    onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
    onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
  />

  <h1 style={{ color: '#033d4f', fontSize: '26px', marginBottom: '12px' }}>
    Willkommen bei unserem Reinigungsservice!
  </h1>
  <p style={{ color: '#555', fontSize: '16px', marginBottom: '24px' }}>
    Dies ist eine Beispielseite für unsere zukünftige Website.
  </p>

  <button
    onClick={scrollToContact}
    style={{
      padding: '12px 24px',
      backgroundColor: '#0f6f65',
      color: '#fff',
      border: 'none',
      borderRadius: '6px',
      fontSize: '16px',
      cursor: 'pointer',
      boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
      transition: 'background-color 0.3s ease',
    }}
    onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0a5a52')}
    onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0f6f65')}
  >
    Kontakt aufnehmen
  </button>

  <p
    id="footer"
    style={{
      marginTop: '50px',
      fontSize: '12px',
      color: '#888',
      textAlign: 'center',
    }}
  >
    © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
  </p>
</div>

); }

export default HomePage;

