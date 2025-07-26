const express = require('express');
const router = express.Router();
const Policy = require('../models/Policy');
const authMiddleware = require('../middleware/auth');

// POST /api/policies - Add new policy (admin only)
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, CNIC, policyNumber, planType, contactNumber, address, issueDate } = req.body;

    // Validate required fields
    if (!name || !CNIC || !policyNumber || !planType || !contactNumber || !address) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    const policy = new Policy({
      name,
      CNIC,
      policyNumber,
      planType,
      contactNumber,
      address,
      issueDate: issueDate ? new Date(issueDate) : new Date()
    });

    await policy.save();
    
    res.status(201).json({
      success: true,
      message: 'Policy created successfully',
      data: policy
    });
  } catch (error) {
    if (error.code === 11000) {
      const field = Object.keys(error.keyValue)[0];
      return res.status(400).json({
        success: false,
        message: `${field} already exists`
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// GET /api/policies - List all policies (admin only)
router.get('/', authMiddleware, async (req, res) => {
  try {
    const policies = await Policy.find().sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: policies.length,
      data: policies
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// GET /api/policies/search - Search by CNIC or policy number
router.get('/search', async (req, res) => {
  try {
    const { cnic, policyNumber } = req.query;

    if (!cnic && !policyNumber) {
      return res.status(400).json({
        success: false,
        message: 'Please provide either CNIC or policy number'
      });
    }

    let query = {};
    if (cnic) {
      query.CNIC = cnic;
    } else if (policyNumber) {
      query.policyNumber = policyNumber;
    }

    const policy = await Policy.findOne(query);

    if (!policy) {
      return res.status(404).json({
        success: false,
        message: 'Policy not found'
      });
    }

    res.json({
      success: true,
      data: policy
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;
