import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { policyAPI } from '../services/api';
import StateLifeLogo from './StateLifeLogo';
import './AdminForm.css';

const AdminForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    CNIC: '',
    policyNumber: '',
    planType: '',
    contactNumber: '',
    address: '',
    issueDate: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'

  const planTypes = [
    'Life Insurance',
    'Health Insurance',
    'Auto Insurance',
    'Home Insurance',
    'Travel Insurance',
    'Disability Insurance'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      await policyAPI.createPolicy(formData);
      setMessage('Policy created successfully!');
      setMessageType('success');
      
      // Reset form
      setFormData({
        name: '',
        CNIC: '',
        policyNumber: '',
        planType: '',
        contactNumber: '',
        address: '',
        issueDate: ''
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'Failed to create policy');
      setMessageType('error');
    } finally {
      setLoading(false);
    }
  };

  const generatePolicyNumber = () => {
    const timestamp = Date.now().toString().slice(-6);
    const random = Math.random().toString(36).substring(2, 5).toUpperCase();
    const policyNumber = `POL-${timestamp}-${random}`;
    setFormData(prev => ({
      ...prev,
      policyNumber
    }));
  };

  const handleLogout = () => {
    // Remove tokens from localStorage
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    
    // Redirect to sign in page
    navigate('/admin-signin');
  };

  return (
    <div className="admin-form">
      <div className="admin-header">
        <div className="admin-brand">
          <div className="admin-brand-content">
            <div className="admin-icon">
              <StateLifeLogo width={60} height={45} />
            </div>
            <div className="admin-title-section">
              <h1>Azhar's SLIC Admin Dashboard</h1>
              <p className="admin-subtitle">State Life Insurance Corporation Policy Management</p>
            </div>
          </div>
        </div>
        <button 
          onClick={handleLogout}
          className="logout-btn"
          type="button"
          title="Logout"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{width: '20px', height: '20px'}}>
            <path d="M10,17V14H3V10H10V7L15,12L10,17M10,2H19A2,2 0 0,1 21,4V20A2,2 0 0,1 19,22H10A2,2 0 0,1 8,20V18H10V20H19V4H10V6H8V4A2,2 0 0,1 10,2Z"/>
          </svg>
          Logout
        </button>
      </div>
      
      <div className="form-container">

        {message && (
          <div className={`message ${messageType}`}>
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="policy-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Policy Holder Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="CNIC">CNIC *</label>
              <input
                type="text"
                id="CNIC"
                name="CNIC"
                value={formData.CNIC}
                onChange={handleChange}
                required
                placeholder="12345-1234567-1"
                pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="policyNumber">Policy Number *</label>
              <div className="input-with-button">
                <input
                  type="text"
                  id="policyNumber"
                  name="policyNumber"
                  value={formData.policyNumber}
                  onChange={handleChange}
                  required
                  placeholder="POL-123456-ABC"
                />
                <button
                  type="button"
                  onClick={generatePolicyNumber}
                  className="generate-btn"
                >
                  Generate
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="planType">Plan Type *</label>
              <select
                id="planType"
                name="planType"
                value={formData.planType}
                onChange={handleChange}
                required
              >
                <option value="">Select a plan type</option>
                {planTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="contactNumber">Contact Number *</label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
                placeholder="03XX-XXXXXXX"
              />
            </div>

            <div className="form-group">
              <label htmlFor="issueDate">Issue Date *</label>
              <input
                type="date"
                id="issueDate"
                name="issueDate"
                value={formData.issueDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group full-width">
            <label htmlFor="address">Address *</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Enter complete address"
              rows="3"
            />
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? 'Creating Policy...' : 'Create Policy'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
