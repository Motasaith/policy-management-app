const mongoose = require('mongoose');

const policySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  CNIC: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  policyNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  planType: {
    type: String,
    required: true,
    trim: true
  },
  contactNumber: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  issueDate: {
    type: Date,
    required: true,
    default: Date.now
  }
}, {
  timestamps: true
});

// Add indexes for search functionality
policySchema.index({ CNIC: 1 });
policySchema.index({ policyNumber: 1 });

module.exports = mongoose.model('Policy', policySchema);
