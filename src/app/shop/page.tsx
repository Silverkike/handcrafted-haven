'use client'

import React, { useState } from 'react'

const products = [
    {
        id: 1,
        name: 'Handwoven Basket',
        category: 'Textiles',
        price: 45,
        description: 'A beautifully woven basket made from natural fibers, perfect for storing linens or displaying fresh flowers.',
        image: '/placeholder-1.jpg',
    },
    {
        id: 2,
        name: 'Ceramic Vase',
        category: 'Pottery',
        price: 65,
        description: 'A hand-thrown ceramic vase with a soft glaze finish, designed to highlight seasonal blooms.',
        image: '/placeholder-2.jpg',
    },
    {
        id: 3,
        name: 'Carved Wooden Tray',
        category: 'Woodwork',
        price: 80,
        description: 'An artisan tray carved from sustainably sourced hardwood, ideal for serving or display.',
        image: '/placeholder-3.jpg',
    },
    {
        id: 4,
        name: 'Textured Jewelry Dish',
        category: 'Jewelry',
        price: 30,
        description: 'A handcrafted dish with delicate texture, perfect for holding rings and small treasures.',
        image: '/placeholder-4.jpg',
    },
    {
        id: 5,
        name: 'Porcelain Teacup Set',
        category: 'Pottery',
        price: 120,
        description: 'A set of elegant porcelain teacups with a subtle hand-painted motif for refined tea rituals.',
        image: '/placeholder-5.jpg',
    },
    {
        id: 6,
        name: 'Embroidered Throw Pillow',
        category: 'Textiles',
        price: 55,
        description: 'A luxe throw pillow featuring artisan embroidery and soft natural fabrics for cozy interiors.',
        image: '/placeholder-6.jpg',
    },
    {
        id: 7,
        name: 'Silver Pendant Necklace',
        category: 'Jewelry',
        price: 95,
        description: 'A handmade silver pendant necklace with a minimalist design that complements everyday style.',
        image: '/placeholder-7.jpg',
    },
    {
        id: 8,
        name: 'Live-Edge Serving Board',
        category: 'Woodwork',
        price: 140,
        description: 'A stunning live-edge serving board crafted from hardwood, ideal for entertaining with rustic charm.',
        image: '/placeholder-8.jpg',
    },
    {
        id: 9,
        name: 'Hand-Dyed Scarf',
        category: 'Textiles',
        price: 35,
        description: 'A soft scarf hand-dyed in rich tones, designed to add artisan elegance to any outfit.',
        image: '/placeholder-9.jpg',
    },
]

const categories = ['All', 'Pottery', 'Woodwork', 'Textiles', 'Jewelry']

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState('All')

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
