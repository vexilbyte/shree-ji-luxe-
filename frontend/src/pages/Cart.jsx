import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import { useStore } from '../store/store';
import '../styles/cart.css';

const Cart = () => {
  const { cart, removeFromCart, isAuthenticated } = useStore();
  const navigate = useNavigate();
  const [shippingCost] = useState(50);

  const subtotal = cart.reduce((acc, item) => acc + (item.finalPrice || item.price) * item.quantity, 0);
  const tax = subtotal * 0.18;
  const shippingFinal = subtotal > 1000 ? 0 : shippingCost;
  const total = subtotal + tax + shippingFinal;

  const handleCheckout = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    navigate('/checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <div className="empty-content">
          <h2>Your Cart is Empty</h2>
          <p>Let's add some amazing clothing to your cart!</p>
          <Link to="/products" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      
      <div className="cart-container">
        <div className="cart-items">
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id}>
                  <td className="product-cell">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p className="product-title">{item.name}</p>
                      {item.size && <p className="product-meta">Size: {item.size}</p>}
                      {item.color && <p className="product-meta">Color: {item.color}</p>}
                    </div>
                  </td>
                  <td>₹{(item.finalPrice || item.price).toFixed(0)}</td>
                  <td>
                    <input type="number" min="1" defaultValue={item.quantity} className="quantity-input" />
                  </td>
                  <td>₹{((item.finalPrice || item.price) * item.quantity).toFixed(0)}</td>
                  <td>
                    <button
                      className="btn-remove"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <FiTrash2 />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>₹{subtotal.toFixed(0)}</span>
          </div>
          <div className="summary-row">
            <span>Tax (18%):</span>
            <span>₹{tax.toFixed(0)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping:</span>
            <span>{shippingFinal === 0 ? 'FREE' : `₹${shippingFinal.toFixed(0)}`}</span>
          </div>
          {subtotal > 1000 && <p className="free-shipping-note">Free shipping on this order!</p>}
          <div className="summary-total">
            <strong>Total: ₹{total.toFixed(0)}</strong>
          </div>
          <button className="btn-checkout" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
          <Link to="/products" className="continue-shopping-link">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;