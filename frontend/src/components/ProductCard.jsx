import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useStore } from '../store/store';
import '../styles/productcard.css';

const ProductCard = ({ product }) => {
  const { addToCart, addToWishlist, wishlist } = useStore();
  const isWished = wishlist.some((item) => item._id === product._id);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        {product.isNew && <span className="new-badge">NEW</span>}
        {product.discount > 0 && (
          <span className="discount-badge">{product.discount}% OFF</span>
        )}
      </div>

      <div className="product-info">
        <Link to={`/product/${product._id}`} className="product-name">
          {product.name}
        </Link>
        
        <div className="product-rating">
          <span>⭐ {product.rating.toFixed(1)}</span>
        </div>

        <div className="product-price">
          {product.discount > 0 ? (
            <>
              <span className="original-price">₹{product.price}</span>
              <span className="final-price">₹{product.finalPrice.toFixed(0)}</span>
            </>
          ) : (
            <span className="final-price">₹{product.price}</span>
          )}
        </div>

        <div className="product-actions">
          <button
            className="btn-cart"
            onClick={() => addToCart(product)}
          >
            <FiShoppingCart /> Add
          </button>
          <button
            className={`btn-wishlist ${isWished ? 'active' : ''}`}
            onClick={() => addToWishlist(product)}
          >
            <FiHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;