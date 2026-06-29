const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const { protect } = require('../middleware/auth');

// Initialize UPI payment (using Razorpay UPI integration)
router.post('/upi/initialize', protect, async (req, res) => {
  try {
    const { orderId } = req.body;
    
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (order.user.toString() !== req.user.id) {
      return res.status(403).json({ success: false, message: 'Not authorized' });
    }

    // In production, integrate with Razorpay or PayU UPI gateway
    const upiDeepLink = `upi://pay?pa=business@upi&pn=ShreeJiLuxe&am=${order.total}&tr=${orderId}&tn=ShreeJiLuxePayment`;

    res.status(200).json({
      success: true,
      data: {
        orderId: order._id,
        amount: order.total,
        upiDeepLink,
        message: 'UPI initialized. Scan or click to pay.'
      }
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Verify payment
router.post('/verify', protect, async (req, res) => {
  try {
    const { orderId, transactionId, status } = req.body;

    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    if (status === 'success') {
      order.paymentStatus = 'Completed';
      order.upiTransactionId = transactionId;
      order.orderStatus = 'Processing';
      await order.save();

      res.status(200).json({
        success: true,
        data: order,
        message: 'Payment verified successfully'
      });
    } else {
      order.paymentStatus = 'Failed';
      await order.save();

      res.status(400).json({
        success: false,
        message: 'Payment failed'
      });
    }
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// Get payment methods info
router.get('/methods', async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: {
        methods: [
          { name: 'UPI', supported: true, description: 'All major UPI apps supported' },
          { name: 'Google Pay', supported: true },
          { name: 'PhonePe', supported: true },
          { name: 'PayTM', supported: true },
          { name: 'BHIM', supported: true },
          { name: 'WhatsApp Pay', supported: true },
          { name: 'Credit/Debit Card', supported: true },
          { name: 'Cash on Delivery', supported: true }
        ]
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;