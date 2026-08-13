'use client';

import Link from 'next/link';

function Header() {
    return (
        <header
            style={{
                backgroundColor: '#5C4033',
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
        >
            <h1
                style={{
                    margin: 0,
                    fontFamily: 'Georgia, serif',
                    color: '#F7F1E8',
                    fontSize: '1.8rem',
                }}
            >
                Handcrafted Haven
            </h1>
            <nav style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }} aria-label="Main navigation">
                <Link href="/" style={{ color: '#F7F1E8', textDecoration: 'none', marginLeft: '1.5rem', fontWeight: 'bold' }}>
                    Home
                </Link>
                <Link href="/shop" style={{ color: '#F7F1E8', textDecoration: 'none', marginLeft: '1.5rem', fontWeight: 'bold' }}>
                    Shop
                </Link>
                <Link href="/about" style={{ color: '#F7F1E8', textDecoration: 'none', marginLeft: '1.5rem', fontWeight: 'bold' }}>
                    About
                </Link>
                <Link href="/add-product" style={{ color: '#F7F1E8', textDecoration: 'none', marginLeft: '1.5rem', fontWeight: 'bold' }}>
                    Add Product
                </Link>
            </nav>
        </header>
    );
}

function Footer() {
    return (
        <footer
            style={{
                backgroundColor: '#5C4033',
                color: '#F7F1E8',
                textAlign: 'center',
                padding: '2rem',
            }}
        >
            <p>© 2024 Handcrafted Haven. All rights reserved.</p>
        </footer>
    );
}

export default function AboutPage() {
    return (
        <>
            <Header />
            <style jsx>{`
        .page-container {
          font-family: Arial, sans-serif;
          background-color: #F7F1E8;
          color: #3B3A36;
          min-height: 100vh;
          margin: 0;
        }

        .nav-link {
          color: #F7F1E8;
          text-decoration: none;
          margin-left: 1.5rem;
          font-weight: bold;
        }

        .nav-link:hover {
          opacity: 0.8;
          text-decoration: underline;
        }

        .main-content {
          background-color: #F7F1E8;
          min-height: 100vh;
          padding: 4rem 2rem;
        }

        .page-title {
          font-family: Georgia, serif;
          color: #5C4033;
          font-size: 3rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        .mission-section {
          max-width: 800px;
          margin: 0 auto 3rem;
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .mission-title {
          color: #A65D3A;
          font-size: 1.8rem;
          margin-bottom: 1rem;
        }

        .mission-text {
          color: #3B3A36;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .value-card {
          background-color: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.05);
          text-align: center;
        }

        .value-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .value-title {
          color: #5C4033;
          font-size: 1.4rem;
          font-family: Georgia, serif;
          margin-bottom: 0.75rem;
        }

        .value-description {
          color: #3B3A36;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .main-content {
            padding: 3rem 1rem;
          }

          .page-title {
            font-size: 2rem;
          }

          .mission-section {
            padding: 1.5rem;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .values-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>

            <div className="page-container">
                <main className="main-content">
                    <h2 className="page-title">About Handcrafted Haven</h2>

                    <section className="mission-section">
                        <h3 className="mission-title">Our Mission</h3>
                        <p className="mission-text">
                            Handcrafted Haven is a virtual marketplace connecting talented artisans with conscious consumers. We believe in supporting local creators, sustainable consumption, and preserving traditional craftsmanship for future generations.
                        </p>
                    </section>

                    <section className="values-grid">
                        <div className="value-card">
                            <div className="value-icon" aria-hidden="true">🤝</div>
                            <h3 className="value-title">Support Artisans</h3>
                            <p className="value-description">
                                We help local makers reach a wider audience and turn their craftsmanship into meaningful livelihoods.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon" aria-hidden="true">🌿</div>
                            <h3 className="value-title">Sustainable Future</h3>
                            <p className="value-description">
                                Our marketplace promotes thoughtful buying, eco-friendly production, and a more responsible way to shop.
                            </p>
                        </div>

                        <div className="value-card">
                            <div className="value-icon" aria-hidden="true">✨</div>
                            <h3 className="value-title">Quality Craftsmanship</h3>
                            <p className="value-description">
                                We celebrate hand-made quality, timeless design, and the traditions that give each piece its character.
                            </p>
                        </div>
                    </section>
                </main>
            </div>
            <Footer />
        </>
    );
}
