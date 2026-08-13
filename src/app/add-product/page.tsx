'use client'

import Link from 'next/link'
import React, { useState } from 'react'

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

export default function AddProductPage() {
    const [productName, setProductName] = useState('')
    const [category, setCategory] = useState('Pottery')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const payload = {
            name: productName,
            category,
            price: Number(price),
            description,
            image: '/placeholder-new.jpg',
        }

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            })

            if (!response.ok) {
                throw new Error('Failed to submit product')
            }

            setIsSubmitted(true)
        } catch (error) {
            console.error('Error submitting product:', error)
        }
    }

    const handleReset = () => {
        setProductName('')
        setCategory('Pottery')
        setPrice('')
        setDescription('')
        setIsSubmitted(false)
    }

    return (
        <>
            <Header />
            <main
                style={{
                    backgroundColor: '#F7F1E8',
                    minHeight: '100vh',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <h1
                    style={{
                        fontFamily: 'Georgia, serif',
                        color: '#5C4033',
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                    }}
                >
                    Add New Product
                </h1>
                <p style={{ color: '#3B3A36', fontSize: '1.1rem', marginBottom: '2rem' }}>
                    Share your handcrafted items with the world
                </p>
                <div
                    style={{
                        backgroundColor: 'white',
                        padding: '2rem',
                        borderRadius: '10px',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        width: '100%',
                        maxWidth: '600px',
                    }}
                >
                    {isSubmitted && (
                        <div
                            aria-live="polite"
                            style={{
                                backgroundColor: '#D4EDDA',
                                color: '#155724',
                                padding: '1rem',
                                borderRadius: '5px',
                                marginBottom: '1.5rem',
                                textAlign: 'center',
                            }}
                        >
                            Product listing submitted successfully.
                        </div>
                    )}
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label
                                htmlFor="productName"
                                style={{
                                    display: 'block',
                                    color: '#5C4033',
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                Product Name
                            </label>
                            <input
                                id="productName"
                                type="text"
                                required
                                aria-required="true"
                                value={productName}
                                onChange={(event) => setProductName(event.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #E8DCC8',
                                    borderRadius: '5px',
                                    fontSize: '1rem',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label
                                htmlFor="category"
                                style={{
                                    display: 'block',
                                    color: '#5C4033',
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                Category
                            </label>
                            <select
                                id="category"
                                required
                                aria-required="true"
                                value={category}
                                onChange={(event) => setCategory(event.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #E8DCC8',
                                    borderRadius: '5px',
                                    fontSize: '1rem',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            >
                                <option value="Pottery">Pottery</option>
                                <option value="Woodwork">Woodwork</option>
                                <option value="Textiles">Textiles</option>
                                <option value="Jewelry">Jewelry</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label
                                htmlFor="price"
                                style={{
                                    display: 'block',
                                    color: '#5C4033',
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                Price
                            </label>
                            <input
                                id="price"
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                required
                                aria-required="true"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #E8DCC8',
                                    borderRadius: '5px',
                                    fontSize: '1rem',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label
                                htmlFor="description"
                                style={{
                                    display: 'block',
                                    color: '#5C4033',
                                    fontWeight: 'bold',
                                    marginBottom: '0.5rem',
                                }}
                            >
                                Description
                            </label>
                            <textarea
                                id="description"
                                rows={4}
                                required
                                aria-required="true"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.75rem',
                                    border: '1px solid #E8DCC8',
                                    borderRadius: '5px',
                                    fontSize: '1rem',
                                    fontFamily: 'Arial, sans-serif',
                                }}
                            />
                        </div>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            <button
                                type="button"
                                onClick={handleReset}
                                style={{
                                    backgroundColor: 'transparent',
                                    color: '#5C4033',
                                    padding: '0.75rem 1.5rem',
                                    border: '1px solid #5C4033',
                                    borderRadius: '5px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                            >
                                Reset
                            </button>
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: '#A65D3A',
                                    color: 'white',
                                    padding: '0.75rem 1.5rem',
                                    border: 'none',
                                    borderRadius: '5px',
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
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

          div[style] > form > div:last-of-type {
            flex-direction: column;
          }

          div[style] > form > div:last-of-type button {
            width: 100%;
          }
        }
      `}</style>
            </main>
            <Footer />
        </>
    )
}
