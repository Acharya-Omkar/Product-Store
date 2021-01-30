import React from "react";
import "./CheckoutProduct.css";

const CheckoutProduct = ({ product }) => {
  var random_number = Math.floor(Math.random() * 5);
  
    <div className="checkoutProduct">
      {/* <img src={products.image} className="checkoutProduct__image" /> */}
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{product.name}</p>
        <p className="checkoutProduct__description">{product.description}</p>
        {/* <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{product.price}</strong>
        </p> */}
        <div className="checkoutProduct__rating">
          <p>Rating: {random_number}</p>
        </div>
      </div>
    </div>
  
};

export default CheckoutProduct;
