import React from 'react';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      
      {/* شعار الشركة */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{ width: '200px', marginBottom: '20px' }}
      />

      {/* منشور الخدمات */}
      <img
        src="/flyer-ms-gebaeudereinigung.PNG"
        alt="Flyer MS Gebäudereinigung"
        style={{ width: '300px', marginBottom: '20px' }}
      />

      <h1>Willkommen bei unserem Reinigungsservice!</h1>
      <p>Dies ist eine Beispielseite für unsere zukünftige Website.</p>
    </div>
  );
}

export default HomePage;
