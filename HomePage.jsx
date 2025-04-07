import React from 'react';

function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#eefaf7',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: '30px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{
          width: '160px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          marginBottom: '30px',
        }}
      />

      {/* منشور الخدمات */}
      <img
        src="/flyer.jpg.PNG"
        alt="Flyer MS Gebäudereinigung"
        style={{
          width: '360px',
          borderRadius: '16px',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
          marginBottom: '40px',
        }}
      />

      {/* عنوان الموقع */}
      <h1 style={{ color: '#05445E', marginBottom: '10px' }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>

      {/* وصف مختصر */}
      <p style={{ color: '#333', fontSize: '14px', maxWidth: '400px' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>

      {/* زر التواصل */}
      <a
        href="mailto:xfire80@hotmail.com"
        style={{
          marginTop: '25px',
          backgroundColor: '#189AB4',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = '#05445E')}
        onMouseOut={(e) => (e.target.style.backgroundColor = '#189AB4')}
      >
        Kontakt aufnehmen
      </a>

      {/* تذييل الصفحة */}
      <footer style={{ marginTop: '60px', fontSize: '12px', color: '#777' }}>
        © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
      </footer>
    </div>
  );
}

export default HomePage;
