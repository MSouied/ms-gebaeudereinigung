import React from 'react';

function HomePage() {
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: '#eaf7f4',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '50px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{
          width: '180px',
          marginBottom: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'transform 0.3s ease',
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
          borderRadius: '16px',
          marginBottom: '30px',
          boxShadow: '0 6px 16px rgba(0,0,0,0.15)',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      />

      <h1 style={{ color: '#033d4f', fontSize: '24px', marginBottom: '10px' }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>
      <p style={{ color: '#555', fontSize: '16px', marginBottom: '20px' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>

      <button
        style={{
          padding: '10px 20px',
          backgroundColor: '#0f6f65',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#0a5a52')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#0f6f65')}
      >
        Kontakt aufnehmen
      </button>

      <p style={{ marginTop: '40px', fontSize: '12px', color: '#999' }}>
        © 2025 MS Gebäudereinigung – Sauberkeit mit Vertrauen.
      </p>
    </div>
  );
}

export default HomePage;
