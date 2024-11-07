import React from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

const Productos = () => {
    const location = useLocation();
    const products = location.state?.products || [];
    const navigate = useNavigate();

    const handleDetailsClick = (id) => {
        navigate(`/producto/${id}`);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
                <h1 style={{ margin: '0', fontSize: '2rem', color: '#fff' }}>Productos</h1>
                <br />
                <label htmlFor="">Productos encontrados: {products.length}</label>
            </div>
            {products.map((product) => (
                <div
                    key={product.id}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #e0e0e0',
                        borderRadius: '12px',
                        padding: '16px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        backgroundColor: '#fff',
                    }}
                >
                    <div style={{ marginRight: '16px' }}>
                        <div
                            style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '50%',
                                backgroundColor: '#f0f0f0',
                            }}
                        >
                            <img
                                src={`${product.thumbnail}`} onError={(e) => e.target.src = "src/assets/shop-bag.svg"}
                                alt={product.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                            />
                        </div>
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ margin: '0', fontSize: '1.25rem', color: '#333' }}>{product.title}</h2>
                        <p style={{ margin: '4px 0', fontSize: '0.9rem', color: '#777' }}>{product.description}</p>
                        <div style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                            <p style={{ fontSize: '1.2rem', fontWeight: 'bold', margin: '0', color: '#0070f3' }}>
                                ${product.price.toLocaleString()}
                            </p>
                            <div style={{ display: 'flex', marginLeft: 'auto', gap: '2px' }}>
                                {[...Array(5)].map((_, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            fontSize: '1rem',
                                            color: index < product.rating ? '#ffc107' : '#e0e0e0',
                                        }}
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <button
                        style={{
                            marginLeft: '16px',
                            padding: '8px 12px',
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            color: '#fff',
                            backgroundColor: '#0070f3',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                        }} onClick={() => handleDetailsClick(product.id)}
                    >
                        Ver Detalles
                    </button>
                </div>
            ))}
        </div>
    );
};

Productos.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ),
};

export default Productos;
