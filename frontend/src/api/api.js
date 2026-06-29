import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const registerUser = (data) => API.post('/auth/register', data);
export const loginUser = (data) => API.post('/auth/login', data);
export const adminLogin = (data) => API.post('/auth/admin-login', data);

// Product APIs
export const getProducts = (params) => API.get('/products', { params });
export const getProductById = (id) => API.get(`/products/${id}`);
export const createProduct = (data) => API.post('/products', data);
export const updateProduct = (id, data) => API.put(`/products/${id}`, data);
export const deleteProduct = (id) => API.delete(`/products/${id}`);

// Order APIs
export const createOrder = (data) => API.post('/orders', data);
export const getMyOrders = () => API.get('/orders/my-orders');
export const getAllOrders = () => API.get('/orders');
export const updateOrder = (id, data) => API.put(`/orders/${id}`, data);

// Payment APIs
export const initializeUPI = (data) => API.post('/payment/upi/initialize', data);
export const verifyPayment = (data) => API.post('/payment/verify', data);
export const getPaymentMethods = () => API.get('/payment/methods');

// Business Info
export const getBusinessInfo = () => API.get('/business');

export default API;