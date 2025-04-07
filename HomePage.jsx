import React from 'react';

function HomePage() {
  return (
    <div style={{
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f8f5',
      minHeight: '100vh',
      padding: '40px 20px'
    }}>
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{
          width: '180px',
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
          width: '400px',
          borderRadius: '16px',
          boxShadow: '0 6px 18px rgba(0, 0, 0, 0.1)',
          marginBottom: '35px'
        }}
      />

      {/* عنوان وترحيب */}
      <h1 style={{ color: '#093b5c' }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>
      <p style={{ color: '#333', fontSize: '15px', marginTop: '10px' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>
    </div>
  );
}

export default HomePage;
