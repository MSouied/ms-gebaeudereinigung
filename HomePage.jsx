import React from 'react';

function HomePage() {
  return (
    <div
      style={{
        backgroundColor: '#f0fbf8',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        padding: '30px',
        textAlign: 'center',
      }}
    >
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{
          width: '180px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          marginBottom: '25px'
        }}
      />

      {/* منشور الخدمات */}
      <img
        src="/flyer.jpg.PNG"
        alt="Flyer MS Gebäudereinigung"
        style={{
          width: '380px',
          borderRadius: '16px',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
          marginBottom: '30px'
        }}
      />

      {/* العنوان والنص */}
      <h2 style={{ color: '#0a3d62', marginBottom: '10px' }}>
        Willkommen bei unserem Reinigungsservice!
      </h2>
      <p style={{ color: '#555', fontSize: '14px' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>
    </div>
  );
}

export default HomePage;
