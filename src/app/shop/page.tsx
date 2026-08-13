'use client'

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
    )
}
