import React from 'react';
import './CheckoutProduct.css'

function CheckoutProduct() {
    return (
        <div className="checkout__product">
              <img src="" alt='the product' className="image"/>
            <div className="checkoutProduct__info">
                <p className='checkoutProduct__title'>{}</p>
                <p className="product__price">
                    <smal>$</smal>
                    <strong>pice</strong>
                </p>
                <div className="product__rating">
                    {Array(3)
                    .fill()
                    .map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

          
            <button>Add to Basket</button>
        </div>
    )

}

export default CheckoutProduct;