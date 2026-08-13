'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

interface Product {
    id: string
    name: string
    category: string
    price: number
    description: string
    image: string
}

const categories = ['All', 'Pottery', 'Woodwork', 'Textiles', 'Jewelry']

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

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true)

            try {
                const response = await fetch('/api/products')
                const data = (await response.json()) as Product[]
                setProducts(data)
            } catch (error) {
                console.error('Failed to fetch products:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    const filteredProducts =
        selectedCategory === 'All'
            ? products
            : products.filter((product) => product.category === selectedCategory)

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
                        marginBottom: '2rem',
                    }}
                >
                    Product Catalog
                </h1>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1rem',
                        marginBottom: '3rem',
                        flexWrap: 'wrap',
                    }}
                >
                    {categories.map((category) => {
                        const isActive = category === selectedCategory
                        return (
                            <button
                                key={category}
                                type="button"
                                aria-pressed={isActive}
                                onClick={() => setSelectedCategory(category)}
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
                                {category}
                            </button>
                        )
                    })}
                </div>
                {loading ? (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '200px',
                            color: '#5C4033',
                            fontSize: '1.1rem',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        Loading products...
                    </div>
                ) : (
                    <section
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '2rem',
                            maxWidth: '1200px',
                            margin: '0 auto',
                        }}
                    >
                        {filteredProducts.map((product) => (
                            <article
                                key={product.id}
                                style={{
                                    backgroundColor: 'white',
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                                }}
                            >
                                <div
                                    role="img"
                                    aria-label={product.name + ' product image'}
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        backgroundColor: '#E8DCC8',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#5C4033',
                                        fontSize: '3rem',
                                    }}
                                >
                                    {product.image}
                                </div>
                                <div style={{ padding: '1.5rem' }}>
                                    <h2
                                        style={{
                                            fontFamily: 'Georgia, serif',
                                            color: '#5C4033',
                                            fontSize: '1.3rem',
                                            marginBottom: '0.5rem',
                                        }}
                                    >
                                        {product.name}
                                    </h2>
                                    <p
                                        style={{
                                            color: '#A65D3A',
                                            fontSize: '0.9rem',
                                            marginBottom: '0.5rem',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {product.category}
                                    </p>
                                    <p
                                        style={{
                                            color: '#3B3A36',
                                            fontSize: '0.95rem',
                                            lineHeight: '1.5',
                                            marginBottom: '1rem',
                                        }}
                                    >
                                        {product.description}
                                    </p>
                                    <p
                                        style={{
                                            color: '#5C4033',
                                            fontSize: '1.2rem',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        ${product.price}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </section>
                )}
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
