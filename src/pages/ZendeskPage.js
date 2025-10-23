import React from 'react';
import { useParams } from 'react-router-dom';
import './IntegrationPage.css';

const ZendeskPage = () => {
  const { option } = useParams();
  
  const getTitle = () => {
    return option.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Coming Soon Content
  const renderComingSoon = () => (
    <div className="coming-soon-container">
      <div className="coming-soon-icon">🚀</div>
      <h2 className="coming-soon-title">Coming Soon</h2>
      <p className="coming-soon-text">
        This feature is currently under development and will be available soon.
      </p>
      <div className="coming-soon-description">
        <p>We're working hard to bring you <strong>{getTitle()}</strong> for Zendesk integration.</p>
        <p>Stay tuned for updates!</p>
      </div>
    </div>
  );

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
          {renderComingSoon()}
        </div>
      </div>
    </div>
  );
};

export default ZendeskPage;
