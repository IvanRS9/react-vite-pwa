import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Ventas = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const sales = location.state?.sales || [];

    // Redirigir a inicio si no hay datos de ventas
    if (!sales.length) {
        return <p>No hay ventas disponibles.</p>;
    }

    const handleHome = () => {
        navigate('/');
    };

    return (
        <div style={{ padding: '20px' }}>
            <div className='container'>
                <img src="/shop-bag.svg" alt="Logo" style={{ cursor: "pointer" }} className="w-24" />
            </div>
            <br />
            <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Ventas Realizadas</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
                {sales.map((sale, index) => (
                    <div
                        key={index}
                        style={{
                            maxWidth: '300px',
                            padding: '16px',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            backgroundColor: '#fff',
                            textAlign: 'center',
                        }}
                    >
                        {/* Imagen del producto vendido */}
                        <div style={{ width: '100px', height: '100px', backgroundColor: '#f0f0f0', margin: '0 auto 16px', borderRadius: '50%' }}>
                            <img
                                src={`${sale.thumbnail}`} onError={(e) => e.target.src = "/shop-bag.svg"}
                                alt={sale.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                            />
                        </div>

                        {/* Información de la venta */}
                        <h2 style={{ fontSize: '1.2rem', color: '#333' }}>{sale.description}</h2>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>Cantidad: {sale.stock}</p>
                        <p style={{ fontSize: '1.2rem', color: '#0070f3', fontWeight: 'bold' }}>
                            Total: ${sale.price}
                        </p>
                        <p style={{ fontSize: '0.8rem', color: '#555' }}>Fecha: {new Date(sale.created_at).toLocaleDateString()}</p>

                        {/* Calificación (si aplica) */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', margin: '10px 0' }}>
                            {[...Array(5)].map((_, i) => (
                                <span
                                    key={i}
                                    style={{
                                        fontSize: '1rem',
                                        color: i < sale.rating ? '#ffc107' : '#e0e0e0',
                                    }}
                                >
                                    ★
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button onClick={handleHome} style={{ padding: '10px 20px', fontSize: '1rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Regresar
                </button>
            </div>
        </div>
    );
};

export default Ventas;
