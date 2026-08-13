'use client'

import Link from 'next/link'
import React, { useState } from 'react'

const sellers = [
    {
        id: 1,
        name: 'María González',
        specialty: 'Pottery',
        location: 'Oaxaca, Mexico',
        bio: 'María combines ancient pottery techniques with modern design, creating pieces that celebrate her cultural heritage. Her pottery workshop is a warm space where every bowl and vase is made by hand.',
        avatar: '👩‍🎨',
        products: ['Glazed Clay Vases', 'Ceramic Bowls'],
    },
    {
        id: 2,
        name: 'James Chen',
        specialty: 'Woodwork',
        location: 'Portland, Oregon',
        bio: 'James crafts heirloom wooden furniture with clean lines and tactile finishes. His work reflects sustainable sourcing and a deep respect for natural materials.',
        avatar: '👨‍🔧',
        products: ['Live-Edge Tables', 'Serving Boards'],
    },
    {
        id: 3,
        name: 'Anika Patel',
        specialty: 'Textiles',
        location: 'Jaipur, India',
        bio: 'Anika creates hand-dyed textiles using traditional block printing passed down through generations. Her scarves and home linens are rich in color and story.',
        avatar: '👩‍🧵',
        products: ['Block-Printed Scarves', 'Embroidered Pillows'],
    },
    {
        id: 4,
        name: 'Lena Park',
        specialty: 'Jewelry',
        location: 'Seoul, South Korea',
        bio: 'Lena designs minimalist jewelry that blends delicate metals with subtle gemstones. Each piece is made to be worn every day as a quiet expression of personal style.',
        avatar: '💍',
        products: ['Silver Pendants', 'Chain Bracelets'],
    },
    {
        id: 5,
        name: 'Noah Thompson',
        specialty: 'Woodwork',
        location: 'Asheville, North Carolina',
        bio: 'Noah builds custom wooden pieces with a focus on craftsmanship and utility. His work features smooth finishes and thoughtful joinery for lasting beauty.',
        avatar: '🪓',
        products: ['Cutting Boards', 'Shelving Units'],
    },
    {
        id: 6,
        name: 'Sofia Rossi',
        specialty: 'Textiles',
        location: 'Florence, Italy',
        bio: 'Sofia handcrafts luxurious linens and tapestries inspired by Italian textile traditions. Her pieces bring warmth and texture to both classic and contemporary interiors.',
        avatar: '🧶',
        products: ['Linen Throws', 'Woven Wall Art'],
    },
]

const specialties = ['All', 'Pottery', 'Woodwork', 'Textiles', 'Jewelry']

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
    )
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
    )
}

export default function SellersPage() {
    const [selectedSpecialty, setSelectedSpecialty] = useState('All')

    const filteredSellers =
        selectedSpecialty === 'All'
            ? sellers
            : sellers.filter((seller) => seller.specialty === selectedSpecialty)

    return (
        <>
            <Header />
            <main style={{ backgroundColor: '#F7F1E8', minHeight: '100vh', padding: '2rem' }}>
                <h1
                    style={{
                        fontFamily: 'Georgia, serif',
                        color: '#5C4033',
                        fontSize: '2.5rem',
                        textAlign: 'center',
                        marginBottom: '1rem',
                    }}
                >
                    Meet Our Artisans
                </h1>
                <p
                    style={{
                        color: '#3B3A36',
                        fontSize: '1.1rem',
                        textAlign: 'center',
                        marginBottom: '2rem',
                    }}
                >
                    Discover the talented creators behind Handcrafted Haven
                </p>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginBottom: '3rem',
                        flexWrap: 'wrap',
                    }}
                >
                    {specialties.map((specialty) => {
                        const isActive = specialty === selectedSpecialty
                        return (
                            <button
                                key={specialty}
                                type="button"
                                onClick={() => setSelectedSpecialty(specialty)}
                                style={{
                                    padding: '0.75rem 1.5rem',
                                    border: 'none',
                                    borderRadius: '5px',
                                    backgroundColor: isActive ? '#A65D3A' : '#5C4033',
                                    color: 'white',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                }}
                            >
                                {specialty}
                            </button>
                        )
                    })}
                </div>
                <section
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '2rem',
                        maxWidth: '1200px',
                        margin: '0 auto',
                    }}
                >
                    {filteredSellers.map((seller) => (
                        <article
                            key={seller.id}
                            style={{
                                backgroundColor: 'white',
                                borderRadius: '10px',
                                overflow: 'hidden',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                padding: '2rem',
                            }}
                        >
                            <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>
                                {seller.avatar}
                            </div>
                            <h2
                                style={{
                                    fontFamily: 'Georgia, serif',
                                    color: '#5C4033',
                                    fontSize: '1.5rem',
                                    textAlign: 'center',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                {seller.name}
                            </h2>
                            <span
                                style={{
                                    display: 'inline-block',
                                    backgroundColor: '#A65D3A',
                                    color: 'white',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '15px',
                                    fontSize: '0.85rem',
                                    fontWeight: 'bold',
                                    margin: '0 auto 1rem',
                                    width: 'fit-content',
                                }}
                            >
                                {seller.specialty}
                            </span>
                            <p
                                style={{
                                    color: '#3B3A36',
                                    fontSize: '0.9rem',
                                    textAlign: 'center',
                                    marginBottom: '1rem',
                                    fontStyle: 'italic',
                                }}
                            >
                                {seller.location}
                            </p>
                            <p
                                style={{
                                    color: '#3B3A36',
                                    fontSize: '0.95rem',
                                    lineHeight: '1.6',
                                    textAlign: 'center',
                                    marginBottom: '1.5rem',
                                }}
                            >
                                {seller.bio}
                            </p>
                            <div>
                                <p
                                    style={{
                                        color: '#5C4033',
                                        fontSize: '1rem',
                                        fontWeight: 'bold',
                                        marginBottom: '0.5rem',
                                    }}
                                >
                                    Featured Products
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, color: '#3B3A36', fontSize: '0.9rem' }}>
                                    {seller.products.map((product, index) => (
                                        <li
                                            key={product}
                                            style={{
                                                padding: '0.25rem 0',
                                                borderBottom: index < seller.products.length - 1 ? '1px solid #E8DCC8' : 'none',
                                            }}
                                        >
                                            {product}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </section>
                <style jsx>{`
        button:focus, input:focus, select:focus, textarea:focus {
          outline: 2px solid #A65D3A;
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          main {
            padding: 1rem;
          }

          h1 {
            font-size: 2rem;
          }

          section {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          section {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
      `}</style>
            </main>
            <Footer />
        </>
    )
}
