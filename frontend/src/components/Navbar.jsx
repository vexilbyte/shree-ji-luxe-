import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { useStore } from '../store/store';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart, wishlist, isAuthenticated, user } = useStore();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h1>Shree Ji Luxe</h1>
        </Link>

        <div className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Shop</Link>
          <Link to="/products?category=Men" className="nav-link">Men</Link>
          <Link to="/products?category=Women" className="nav-link">Women</Link>
          <Link to="/products?category=Kids" className="nav-link">Kids</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="nav-icons">
          <Link to="/wishlist" className="nav-icon">
            <FiHeart /> <span className="badge">{wishlist.length}</span>
          </Link>
          <Link to="/cart" className="nav-icon">
            <FiShoppingCart /> <span className="badge">{cart.length}</span>
          </Link>
          {isAuthenticated ? (
            <Link to="/profile" className="nav-icon">
              <FiUser />
            </Link>
          ) : (
            <Link to="/login" className="nav-icon">
              <FiUser />
            </Link>
          )}
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;