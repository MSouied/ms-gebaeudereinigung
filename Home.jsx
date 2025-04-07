import React from 'react';

function HomePage() {
  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f9f9f9',
      color: '#333',
      maxWidth: '800px',
      margin: 'auto',
      padding: '20px',
      textAlign: 'center'
    }}>
      {/* الشعار */}
      <img
        src="/logo-ms-gebaeudereinigung.PNG"
        alt="MS Gebäudereinigung Logo"
        style={{ width: '160px', marginBottom: '20px' }}
      />

      {/* منشور الخدمات */}
      <img
        src="/flyer.jpg.PNG"
        alt="Flyer MS Gebäudereinigung"
        style={{ width: '300px', borderRadius: '12px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}
      />

      <h1 style={{ fontSize: '24px', color: '#002244' }}>
        Willkommen bei unserem Reinigungsservice!
      </h1>
      <p style={{ fontSize: '16px', color: '#555' }}>
        Dies ist eine Beispielseite für unsere zukünftige Website.
      </p>

      {/* بيانات الاتصال */}
      <div style={{ marginTop: '30px' }}>
        <p style={{ fontSize: '18px' }}>📞 0178 1766657</p>
        <p style={{ fontSize: '18px' }}>✉️ xfire80@hotmail.com</p>
      </div>

      {/* زر عرض الأسعار */}
      <button style={{
        backgroundColor: '#007BFF',
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        borderRadius: '8px',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '25px'
      }}>
        Jetzt Angebot anfordern
      </button>

      {/* الفوتر */}
      <footer style={{ fontSize: '12px', color: '#aaa', marginTop: '40px' }}>
        © 2025 MS Gebäudereinigung. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}

export default HomePage;
