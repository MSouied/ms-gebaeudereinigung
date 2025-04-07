import React from 'react';

function HomePage() {
  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: '#f6fbfc',
        fontFamily: 'Arial, sans-serif',
        padding: '40px 20px',
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
          marginBottom: '30px'
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
          marginBottom: '40px'
        }}
      />

      {/* العنوان */}
      <h1 style={{ color: '#0d3b66' }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>

      {/* النص */}
      <p style={{ fontSize: '14px', color: '#444' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>
    </div>
  );
}

export default HomePage;
