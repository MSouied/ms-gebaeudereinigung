import React from 'react';

function HomePage() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f8f9fa',
      color: '#333',
    }}>
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{ width: '150px', marginBottom: '20px' }}
      />

      {/* صورة المنشور */}
      <img
        src="/flyer.jpg.PNG"
        alt="Flyer MS Gebäudereinigung"
        style={{
          maxWidth: '300px',
          width: '100%',
          marginBottom: '30px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px'
        }}
      />

      {/* عنوان ترحيبي */}
      <h1 style={{ fontSize: '24px', color: '#007B8F' }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>

      {/* جملة توضيحية */}
      <p style={{ fontSize: '16px', color: '#555' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>
    </div>
  );
}

export default HomePage;
