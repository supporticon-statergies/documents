import React from 'react';
import { useParams } from 'react-router-dom';
import './IntegrationPage.css';
import ComingSoon from './tutorials/ComingSoon';

const ZohoPage = () => {
  const { option } = useParams();
  
  const getTitle = () => {
    return option.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Render content based on the selected option
  const renderContent = () => {
    // Add your Zoho-specific tutorials here
    // Example:
    // case 'custom-app-integration':
    //   return <ZohoCustomAppIntegration />;
    // case 'login':
    //   return <ZohoLoginTutorial />;
    
    return <ComingSoon featureName={getTitle()} />;
  };

  return (
    <div className="integration-page">
      <div className="container">
        <div className="page-header zoho-header">
          <div className="header-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 14H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M11 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="page-title">Zoho - {getTitle()}</h1>
          <p className="page-subtitle">Feature documentation and setup guide</p>
        </div>

        <div className="content-card">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ZohoPage;
