'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <>
      <style jsx>{`
        .main-container {
          font-family: Arial, sans-serif;
          background-color: #F7F1E8;
          color: #3B3A36;
          min-height: 100vh;
          margin: 0;
        }

        .header {
          background-color: #5C4033;
          color: #F7F1E8;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .header-title {
          margin: 0;
          font-family: Georgia, serif;
          font-size: 1.8rem;
        }

        .nav-link {
          color: #F7F1E8;
          margin-left: 1.5rem;
          text-decoration: none;
          font-weight: bold;
        }

        .nav-link:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        .hero-section {
          text-align: center;
          padding: 5rem 2rem;
        }

        .hero-title {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-family: Georgia, serif;
          color: #5C4033;
        }

        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .cta-button {
          background-color: #A65D3A;
          color: white;
          padding: 1rem 2.5rem;
          border: none;
          border-radius: 5px;
          font-size: 1.1rem;
          cursor: pointer;
          font-weight: bold;
          display: inline-block;
          text-decoration: none;
        }

        .cta-button:hover {
          background-color: #8B472A;
          opacity: 0.9;
        }

        .featured-section {
          padding: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .featured-title {
          text-align: center;
          margin-bottom: 3rem;
          font-family: Georgia, serif;
          color: #5C4033;
          font-size: 2rem;
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .card {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          text-align: center;
        }

        .card-title {
          color: #A65D3A;
          margin-bottom: 1rem;
        }

        .footer {
          background-color: #5C4033;
          color: #F7F1E8;
          text-align: center;
          padding: 2rem;
          margin-top: 4rem;
        }

        /* MEDIA QUERIES PARA RESPONSIVE */
        @media (max-width: 768px) {
          .header {
            flex-direction: column;
            padding: 1rem;
            text-align: center;
          }

          .nav-link {
            margin-left: 0;
            margin-bottom: 0.5rem;
            display: block;
          }

          .hero-section {
            padding: 3rem 1rem;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-description {
            font-size: 1rem;
          }

          .cta-button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
          }

          .featured-section {
            padding: 1rem;
          }

          .featured-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .grid-container {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .card {
            padding: 1.5rem;
          }

          .footer {
            padding: 1.5rem;
            margin-top: 2rem;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .hero-title {
            font-size: 2.5rem;
          }

          .grid-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <main className="main-container">
        {/* Header / Navigation */}
        <header className="header">
          <h1 className="header-title">Handcrafted Haven</h1>
          <nav aria-label="Main navigation">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/shop" className="nav-link">Shop</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/add-product" className="nav-link">Add Product</Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="hero-section">
          <h2 className="hero-title">Unique Handcrafted Treasures</h2>
          <p className="hero-description">
            Discover a virtual marketplace connecting talented artisans with conscious consumers. Support local creators and sustainable consumption.
          </p>
          <Link href="/shop" className="cta-button" style={{ display: 'inline-block', textDecoration: 'none' }}>
            Explore Catalog
          </Link>
        </section>

        {/* Featured Products Grid */}
        <section className="featured-section">
          <h3 className="featured-title">Featured Categories</h3>
          <div className="grid-container">
            {/* Card 1 */}
            <div className="card">
              <h4 className="card-title">Pottery & Ceramics</h4>
              <p>Handmade vessels and art pieces crafted with earth and fire.</p>
            </div>

            {/* Card 2 */}
            <div className="card">
              <h4 className="card-title">Woodwork</h4>
              <p>Sustainable, carved wooden items for your home and daily life.</p>
            </div>

            {/* Card 3 */}
            <div className="card">
              <h4 className="card-title">Textiles</h4>
              <p>Woven fabrics and clothing made with traditional techniques.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2024 Handcrafted Haven. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}