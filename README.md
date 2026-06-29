# Shree Ji Luxe - E-Commerce Platform

A modern, Flipkart-style e-commerce website for Shree Ji Luxe clothing brand, featuring a clean UI, admin panel, and full UPI payment integration.

## 🚀 Features

### Customer Features
- **Product Browsing**: Browse clothing items by category (Men, Women, Kids, Accessories)
- **Shopping Cart**: Add/remove products with real-time cart updates
- **Wishlist**: Save favorite items for later
- **User Authentication**: Register and login for personalized experience
- **Order Management**: Track your orders
- **Multiple Payment Options**:
  - UPI (All major apps: Google Pay, PhonePe, PayTM, BHIM, WhatsApp Pay)
  - Credit/Debit Card
  - Cash on Delivery
- **Clean, Responsive UI**: Works seamlessly on desktop, tablet, and mobile devices

### Admin Features
- **Admin Dashboard**: Overview of business metrics
- **Product Management**: Add, edit, delete products
- **Order Management**: Monitor and update order statuses
- **Revenue Tracking**: View total revenue and payment status
- **Analytics**: Real-time business insights

## 📋 Admin Credentials

- **Username**: `vyom`
- **Password**: `vyom@#123`

## 📱 Business Contact

- **Phone**: 9511400847
- **Address**: Navadiya Kanpur Road, Fathegarh
- **Brand**: Shree Ji Luxe

## 🛠️ Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** for database
- **JWT** for authentication
- **Bcryptjs** for password hashing
- **Multer** for file uploads

### Frontend
- **React** with React Router
- **Zustand** for state management
- **Axios** for API calls
- **React Icons** for UI icons
- **CSS3** for styling

### Payment Integration
- **Razorpay** UPI Gateway (compatible with all UPI apps)

## 📦 Installation

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm/yarn

### Backend Setup

```bash
# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Configure environment variables
# Update MongoDB URI, JWT secret, admin credentials, and payment gateway keys

# Start the server
npm start

# Or for development with auto-reload
npm run dev
```

### Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Create .env file
REACT_APP_API_URL=http://localhost:5000/api

# Start the development server
npm start

# Build for production
npm run build
```

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/admin-login` - Admin login

### Products
- `GET /api/products` - Get all products with filtering
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin only)
- `PUT /api/products/:id` - Update product (Admin only)
- `DELETE /api/products/:id` - Delete product (Admin only)

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/my-orders` - Get user's orders
- `GET /api/orders` - Get all orders (Admin only)
- `PUT /api/orders/:id` - Update order status (Admin only)

### Payment
- `POST /api/payment/upi/initialize` - Initialize UPI payment
- `POST /api/payment/verify` - Verify payment
- `GET /api/payment/methods` - Get available payment methods

### Business
- `GET /api/business` - Get business information

## 🎨 UI Features

- **Modern Gradient Design**: Primary color (#ff6b6b) and secondary color (#ffa726)
- **Responsive Grid Layout**: Products displayed in adaptive grid
- **Smooth Animations**: Hover effects and transitions
- **Clean Typography**: Professional font styling
- **Icon Integration**: React Icons for intuitive interface
- **Color-coded Status**: Order statuses with visual indicators

## 📱 Payment Integration

The platform supports multiple UPI payment options:
- Google Pay
- PhonePe
- PayTM
- BHIM
- WhatsApp Pay
- Traditional Card payments
- Cash on Delivery

## 🚀 Deployment

### Backend (Heroku/AWS)
```bash
# Set environment variables on the hosting platform
# Deploy using git or platform's CLI
```

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy the build folder
```

## 📞 Support

For support inquiries:
- **Phone**: 9511400847
- **Email**: info@shreejiluxe.com
- **Address**: Navadiya Kanpur Road, Fathegarh

## 📄 License

This project is licensed under the ISC License.

## 🎯 Future Enhancements

- Product reviews and ratings system
- Inventory management automation
- SMS/Email notifications
- Advanced analytics dashboard
- Coupon and discount management
- Multiple language support
- AI-based product recommendations
- Social media integration
- Live chat support

---

Made with ❤️ for Shree Ji Luxe