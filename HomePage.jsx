import React from 'react';

function HomePage() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f7f9',
      textAlign: 'center',
      padding: '20px'
    }}>
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.png"
        alt="MS Gebäudereinigung Logo"
        style={{
          width: '150px',
          marginBottom: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
        }}
      />

      {/* منشور الخدمات */}
      <img
        src="/flyer.jpg.PNG"
        alt="Flyer MS Gebäudereinigung"
        style={{
          width: '320px',
          maxWidth: '90%',
          borderRadius: '8px',
          marginBottom: '25px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
        }}
      />

      {/* عنوان وترحيب */}
      <h1 style={{
        color: '#1d3557',
        fontSize: '22px',
        marginBottom: '10px'
      }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>

      <p style={{ color: '#333', fontSize: '14px' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>
    </div>
  );
}

export default HomePage;
