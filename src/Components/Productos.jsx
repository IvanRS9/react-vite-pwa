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
        <div>
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id} className="card">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <button className="btn" onClick={() => handleDetailsClick(product.id)}>Detalles</button>
                    </div>
                ))
            ) : (
                <p>No se encontraron productos.</p>
            )}
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
