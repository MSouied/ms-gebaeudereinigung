import React from 'react';

function HomePage() {
  return (
    <div style={{
      backgroundColor: '#f4f8f9',
      textAlign: 'center',
      padding: '40px',
      fontFamily: 'Arial, sans-serif',
    }}>
      
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{
          width: '140px',
          marginBottom: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}
      />

      {/* منشور الخدمات */}
      <img
        src="/flyer.jpg.PNG"
        alt="Flyer MS Gebäudereinigung"
        style={{
          width: '320px',
          marginBottom: '30px',
          borderRadius: '12px',
          boxShadow: '0 6px 12px rgba(0,0,0,0.15)'
        }}
      />

      {/* العنوان والنص */}
      <h1 style={{ color: '#0b3757', marginTop: '10px' }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>
      <p style={{ color: '#444', marginTop: '10px' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>
    </div>
  );
}

export default HomePage;
