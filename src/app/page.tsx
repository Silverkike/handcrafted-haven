export default function Home() {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F7F1E8', color: '#3B3A36', minHeight: '100vh', margin: 0 }}>

      {/* Header / Navigation */}
      <header style={{ backgroundColor: '#5C4033', color: '#F7F1E8', padding: '1.5rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0, fontFamily: 'Georgia, serif', fontSize: '1.8rem' }}>Handcrafted Haven</h1>
        <nav>
          <a href="#" style={{ color: '#F7F1E8', marginRight: '1.5rem', textDecoration: 'none', fontWeight: 'bold' }}>Home</a>
          <a href="#" style={{ color: '#F7F1E8', marginRight: '1.5rem', textDecoration: 'none', fontWeight: 'bold' }}>Shop</a>
          <a href="#" style={{ color: '#F7F1E8', textDecoration: 'none', fontWeight: 'bold' }}>About</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{ textAlign: 'center', padding: '5rem 2rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontFamily: 'Georgia, serif', color: '#5C4033' }}>Unique Handcrafted Treasures</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem', lineHeight: '1.6' }}>
          Discover a virtual marketplace connecting talented artisans with conscious consumers. Support local creators and sustainable consumption.
        </p>
        <button style={{ backgroundColor: '#A65D3A', color: 'white', padding: '1rem 2.5rem', border: 'none', borderRadius: '5px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}>
          Explore Catalog
        </button>
      </section>

      {/* Featured Products Grid */}
      <section style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h3 style={{ textAlign: 'center', marginBottom: '3rem', fontFamily: 'Georgia, serif', color: '#5C4033', fontSize: '2rem' }}>Featured Categories</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

          {/* Card 1 */}
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <h4 style={{ color: '#A65D3A', marginBottom: '1rem' }}>Pottery & Ceramics</h4>
            <p>Handmade vessels and art pieces crafted with earth and fire.</p>
          </div>

          {/* Card 2 */}
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <h4 style={{ color: '#A65D3A', marginBottom: '1rem' }}>Woodwork</h4>
            <p>Sustainable, carved wooden items for your home and daily life.</p>
          </div>

          {/* Card 3 */}
          <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', textAlign: 'center' }}>
            <h4 style={{ color: '#A65D3A', marginBottom: '1rem' }}>Textiles</h4>
            <p>Woven fabrics and clothing made with traditional techniques.</p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#5C4033', color: '#F7F1E8', textAlign: 'center', padding: '2rem', marginTop: '4rem' }}>
        <p style={{ margin: 0 }}>&copy; 2024 Handcrafted Haven. All rights reserved.</p>
      </footer>

    </main>
  );
}