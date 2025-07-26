import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { policyAPI } from '../services/api';
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
      const result = await policyAPI.createPolicy(formData);
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
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11.03L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11.03C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
              </svg>
            </div>
            <div className="admin-title-section">
              <h1>Admin Dashboard</h1>
              <p className="admin-subtitle">Policy Management System</p>
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
