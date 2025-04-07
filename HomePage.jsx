import React from 'react';

function HomePage() {
  return (
    <div style={{
      backgroundColor: '#f2f9f8',
      minHeight: '100vh',
      paddingTop: '40px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{
          width: '180px',
          borderRadius: '16px',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          marginBottom: '30px'
        }}
      />

      {/* منشور الخدمات */}
      <img
        src="/flyer.jpg.PNG"
        alt="Flyer MS Gebäudereinigung"
        style={{
          width: '400px',
          borderRadius: '20px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
          marginBottom: '40px'
        }}
      />

      {/* العنوان والنص */}
      <h1 style={{ color: '#033E53' }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>
      <p style={{ color: '#333', fontSize: '16px', marginTop: '10px' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>
    </div>
  );
}

export default HomePage;
