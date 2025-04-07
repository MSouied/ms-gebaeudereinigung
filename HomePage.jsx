import React from 'react';

function HomePage() {
  return (
    <div
      style={{
        backgroundColor: '#f0faf7',
        minHeight: '100vh',
        padding: '50px 20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        animation: 'fadeIn 1s ease-in-out'
      }}
    >
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{
          width: '180px',
          borderRadius: '16px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
          marginBottom: '30px',
          transition: 'transform 0.3s',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />

      {/* منشور الخدمات */}
      <img
        src="/flyer.jpg.PNG"
        alt="Flyer MS Gebäudereinigung"
        style={{
          width: '400px',
          borderRadius: '20px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          marginBottom: '40px',
          transition: 'transform 0.3s',
          cursor: 'pointer'
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />

      {/* عنوان وترحيب */}
      <h1 style={{ fontSize: '24px', color: '#123a42' }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>
      <p style={{ color: '#666' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>

      {/* زر تواصل */}
      <a
        href="mailto:xfire80@hotmail.com"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '12px 24px',
          backgroundColor: '#0e766d',
          color: '#fff',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background-color 0.3s, transform 0.3s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = '#0c5d57';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = '#0e766d';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        Kontakt aufnehmen
      </a>

      {/* تذييل */}
      <footer style={{ marginTop: '40px', fontSize: '12px', color: '#888' }}>
        © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
      </footer>
    </div>
  );
}

export default HomePage;
