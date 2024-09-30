import React, { useContext, useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        {image && !imageError ? (
          <img
            className="food-item-image"
            src={`${url}/images/${image}`}
            alt={name}
            onError={handleImageError}
          />
        ) : (
          <div className="no-image-placeholder">
            <p>No Image Available</p>
          </div>
        )}
        {!cartItems[id] ? (
          <button className="add-button" onClick={() => addToCart(id)}>
            <img src={assets.add_icon_white} alt="Add to cart" />
          </button>
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add more"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
          <img className="rating-stars" src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">₹{price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default FoodItem;