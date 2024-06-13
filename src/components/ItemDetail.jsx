import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ItemDetail = ( { product } ) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext);

    const handleAgregar = () => {
        agregarAlCarrito([product]);
    }

    return (
        <div className='item-detail'>
            <img className='item-image' src={product.imagen} />
            <div className='item-info'>
                <p className='item-title'>{product.titulo}</p>
                <p className='item-price'>Starting at ${product.precio}</p>
                <p className='item-price'>
                    Pay with Apple Wallet and get a discount!
                </p>
                <button onClick={handleAgregar} className='add-product'>Add to cart</button>
            </div>
        </div>
    );
};

export default ItemDetail;
