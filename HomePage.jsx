import React from 'react';

function HomePage() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '40px 20px', 
      backgroundColor: '#f0faf8', 
      minHeight: '100vh' 
    }}>
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{
          width: '180px',
          borderRadius: '16px',
          boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)',
          marginBottom: '30px'
        }}
      />

      {/* منشور الخدمات */}
      <img
        src="/flyer.jpg.PNG"
        alt="Flyer MS Gebäudereinigung"
        style={{
          width: '420px',
          borderRadius: '20px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
          marginBottom: '40px'
        }}
      />

      {/* العنوان والنص */}
      <h1 style={{ color: '#083b4c' }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>
      <p style={{ fontSize: '16px', color: '#555' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>
    </div>
  );
}

export default HomePage;
