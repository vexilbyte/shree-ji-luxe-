import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../api/api';
import '../styles/home.css';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [newProducts, setNewProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await getProducts({ limit: 12 });
      setFeaturedProducts(response.data.data.filter((p) => p.isFeatured));
      setNewProducts(response.data.data.filter((p) => p.isNew));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Shree Ji Luxe</h1>
          <p>Premium Clothing for Every Occasion</p>
          <Link to="/products" className="hero-btn">
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <Link to="/products?category=Men" className="category-card men">
            <h3>Men's Collection</h3>
          </Link>
          <Link to="/products?category=Women" className="category-card women">
            <h3>Women's Collection</h3>
          </Link>
          <Link to="/products?category=Kids" className="category-card kids">
            <h3>Kids' Collection</h3>
          </Link>
          <Link to="/products?category=Accessories" className="category-card accessories">
            <h3>Accessories</h3>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="featured">
          <h2>Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* New Products */}
      {newProducts.length > 0 && (
        <section className="new-arrivals">
          <h2>New Arrivals</h2>
          <div className="products-grid">
            {newProducts.slice(0, 8).map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          <Link to="/products" className="view-all-btn">
            View All Products
          </Link>
        </section>
      )}

      {/* Features */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>On orders above ₹1000</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💯</div>
          <h3>100% Authentic</h3>
          <p>Genuine products guaranteed</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💳</div>
          <h3>Secure Payment</h3>
          <p>Multiple UPI payment options</p>
        </div>
        <div className="feature">
          <div className="feature-icon">↩️</div>
          <h3>Easy Returns</h3>
          <p>30-day return policy</p>
        </div>
      </section>
    </div>
  );
};

export default Home;