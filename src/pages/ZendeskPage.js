import React from 'react';
import { useParams } from 'react-router-dom';
import './IntegrationPage.css';
import ComingSoon from './tutorials/ComingSoon';

const ZendeskPage = () => {
  const { option } = useParams();
  
  const getTitle = () => {
    return option.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Render content based on the selected option
  const renderContent = () => {
    // Add your Zendesk-specific tutorials here
    // Example:
    // case 'custom-app-integration':
    //   return <ZendeskCustomAppIntegration />;
    // case 'login':
    //   return <ZendeskLoginTutorial />;
    
    return <ComingSoon featureName={getTitle()} />;
  };

  return (
    <div className="integration-page">
      <div className="container">
        <div className="page-header zendesk-header">
          <div className="header-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className="page-title">Zendesk - {getTitle()}</h1>
          <p className="page-subtitle">Feature documentation and setup guide</p>
        </div>

        <div className="content-card">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ZendeskPage;
