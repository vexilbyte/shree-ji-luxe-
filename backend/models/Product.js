const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a product name'],
      trim: true,
      maxlength: [100, 'Product name cannot be more than 100 characters']
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [1000, 'Description cannot be more than 1000 characters']
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      min: [0, 'Price cannot be negative']
    },
    discount: {
      type: Number,
      default: 0,
      min: 0,
      max: 100
    },
    finalPrice: {
      type: Number,
      default: function() {
        return this.price - (this.price * this.discount / 100);
      }
    },
    image: {
      type: String,
      required: [true, 'Please provide product image']
    },
    images: [String],
    category: {
      type: String,
      required: [true, 'Please provide product category'],
      enum: ['Men', 'Women', 'Kids', 'Accessories']
    },
    size: {
      type: [String],
      default: ['S', 'M', 'L', 'XL', 'XXL']
    },
    color: [String],
    stock: {
      type: Number,
      required: [true, 'Please provide stock quantity'],
      default: 0
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    reviews: [
      {
        user: String,
        rating: Number,
        comment: String,
        date: {
          type: Date,
          default: Date.now
        }
      }
    ],
    isFeatured: {
      type: Boolean,
      default: false
    },
    isNew: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

// Calculate final price before saving
productSchema.pre('save', function(next) {
  this.finalPrice = this.price - (this.price * this.discount / 100);
  next();
});

module.exports = mongoose.model('Product', productSchema);