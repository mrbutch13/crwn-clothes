import React from 'react'

import './cart-item.styles.scss';

export default function CartItem ({ item: {imageUrl, price, name, quantity }}) {

    return (
        <div className="cart-item">
            <img src={imageUrl} alt="cart item image" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price">
                    {quantity} x ${price}
                </span>
            </div>
        </div>
    )   
}