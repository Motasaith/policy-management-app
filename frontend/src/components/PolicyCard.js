import React from 'react';
import './PolicyCard.css';

const PolicyCard = ({ policy }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="policy-card">
      <div className="policy-header">
        <h3 className="policy-holder-name">{policy.name}</h3>
        <div className="policy-number">Policy #{policy.policyNumber}</div>
      </div>
      
      <div className="policy-details">
        <div className="detail-row">
          <span className="detail-label">CNIC:</span>
          <span className="detail-value">{policy.CNIC}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Plan Type:</span>
          <span className="detail-value plan-type">{policy.planType}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Contact Number:</span>
          <span className="detail-value">{policy.contactNumber}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Address:</span>
          <span className="detail-value address">{policy.address}</span>
        </div>
        
        <div className="detail-row">
          <span className="detail-label">Issue Date:</span>
          <span className="detail-value">{formatDate(policy.issueDate)}</span>
        </div>
      </div>
      
      <div className="policy-footer">
        <div className="policy-status">
          <span className="status-badge active">Active</span>
        </div>
      </div>
    </div>
  );
};

export default PolicyCard;
