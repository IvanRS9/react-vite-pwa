import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Item = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await fetch(`https://exous.wsmprastreo.com.mx/api/v1/product/${id}`);

                if (!response.ok) {
                    throw new Error('Error fetching product details');
                }

                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProductDetails();
    }, [id]);

    const handlePurchase = async () => {
        try {
            const response = await fetch('https://exous.wsmprastreo.com.mx/api/v1/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    productId: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    discountPercentage: product.discountPercentage,
                    rating: product.rating,
                    stock: product.stock,
                    brand: product.brand,
                    category: product.category,
                    thumbnail: product.thumbnail,
                }),
            });

            if (!response.ok) {
                throw new Error('Error al realizar la compra');
            }

            const result = await response.json();
            console.log(result);
            // navigate('/');
        } catch (error) {
            console.error("Error en la compra:", error);
            alert("Hubo un problema al realizar la compra. Por favor, intenta de nuevo.");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div
            style={{
                maxWidth: '400px',
                margin: '0 auto',
                padding: '24px',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                backgroundColor: '#fff',
                textAlign: 'center',
            }}
        >

            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#f0f0f0' }}>
                    <img
                        src={`${product.thumbnail}`} onError={(e) => e.target.src = "src/assets/shop-bag.svg"}
                        alt={product.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    />
                </div>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#f0f0f0' }}>
                    <img
                        src={`${product.thumbnail}`} onError={(e) => e.target.src = "src/assets/shop-bag.svg"}
                        alt={product.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    />
                </div>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#f0f0f0' }}>
                    <img
                        src={`${product.thumbnail}`} onError={(e) => e.target.src = "src/assets/shop-bag.svg"}
                        alt={product.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                    />
                </div>
            </div>

            <h2 style={{ fontSize: '1.5rem', color: '#333', margin: '8px 0' }}>{product.title}</h2>
            <p style={{ fontSize: '0.9rem', color: '#555', margin: '4px 0' }}>{product.category}</p>
            <p style={{ fontSize: '1rem', color: '#777', margin: '8px 0' }}>{product.description}</p>
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#0070f3', margin: '16px 0' }}>
                ${product.price}
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '16px' }}>
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        style={{
                            fontSize: '1.2rem',
                            color: index < product.rating ? '#ffc107' : '#e0e0e0',
                        }}
                    >
                        ★
                    </span>
                ))}
            </div>
            <button style={{
                display: 'inline-block',
                padding: '10px 20px',
                fontSize: '1rem',
                fontWeight: 'bold',
                color: '#0070f3',
                backgroundColor: 'transparent',
                border: '2px solid #0070f3',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'background-color 0.3s, color 0.3s',
            }} className="btn" onClick={handlePurchase}>Comprar</button>
        </div>
    );
};

export default Item;
