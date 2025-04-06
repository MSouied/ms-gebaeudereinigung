export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 p-4">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">MS Gebäudereinigung</h1>
        <p className="text-lg mt-2 font-medium">Ihr zuverlässiger Partner für Sauberkeit und Hygiene</p>
      </header>

      <section className="py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Unsere Leistungen</h2>
        <ul className="space-y-2">
          <li><strong>Wohnungs- und Haushaltsreinigung:</strong> Gründliche Reinigung von Wohnbereichen, Küchen, Bädern und mehr.</li>
          <li><strong>Büro- und Praxisreinigung:</strong> Saubere Arbeitsplätze für Mitarbeiter und Kunden.</li>
          <li><strong>Fenster- und Glasreinigung:</strong> Streifenfreier Glanz für Fenster, Türen und Glasflächen.</li>
          <li><strong>Treppenhausreinigung:</strong> Gepflegte Eingangsbereiche für einen guten ersten Eindruck.</li>
          <li><strong>Grundreinigung:</strong> Intensive Reinigung bei Einzug, Auszug oder Renovierung.</li>
        </ul>
      </section>

      <section className="py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Über uns</h2>
        <p className="max-w-2xl mx-auto">
          MS Gebäudereinigung ist ein familiengeführtes Unternehmen aus Lohr am Main. Mit Leidenschaft und Präzision bieten wir professionelle Reinigungsdienste für Privat- und Geschäftskunden. Zuverlässigkeit, Gründlichkeit und Diskretion zeichnen unsere Arbeit aus.
        </p>
      </section>

      <section className="py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Kontakt</h2>
        <p>Email: <a href="mailto:xfire80@hotmail.com" className="text-blue-600">xfire80@hotmail.com</a></p>
        <p>Telefon: <a href="tel:01781766657" className="text-blue-600">0178 1766657</a></p>
        <form className="mt-6 max-w-md mx-auto text-left space-y-4">
          <input type="text" placeholder="Ihr Name" className="w-full border border-gray-300 rounded p-2" />
          <input type="email" placeholder="Ihre E-Mail" className="w-full border border-gray-300 rounded p-2" />
          <textarea placeholder="Ihre Nachricht" className="w-full border border-gray-300 rounded p-2"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Nachricht senden</button>
        </form>
      </section>

      <footer className="text-center py-4 text-sm text-gray-500">
        &copy; 2025 MS Gebäudereinigung. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}