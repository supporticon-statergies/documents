import React from 'react';
import { useParams } from 'react-router-dom';
import './IntegrationPage.css';
import CustomAppIntegration from './tutorials/CustomAppIntegration';
import LoginTutorial from './tutorials/LoginTutorial';
import KBArticleTutorial from './tutorials/KBArticleTutorial';
import ComingSoon from './tutorials/ComingSoon';

const FreshdeskPage = () => {
  const { option } = useParams();
  
  const getTitle = () => {
    return option.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  // Render content based on the selected option
  const renderContent = () => {
    switch(option) {
      case 'custom-app-integration':
        return <CustomAppIntegration />;
      case 'login':
        return <LoginTutorial />;
      case 'kb-docs':
        return <KBArticleTutorial />;
      default:
        return <ComingSoon featureName={getTitle()} />;
    }
  };

  // Check if the option should show header
  const shouldShowHeader = () => {
    return option !== 'custom-app-integration' && option !== 'login' && option !== 'kb-docs';
  };

  return (
    <div className="integration-page">
      <div className="container">
        {shouldShowHeader() ? (
          <>
            <div className="page-header freshdesk-header">
              <div className="header-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h1 className="page-title">Freshdesk - {getTitle()}</h1>
              <p className="page-subtitle">Feature documentation and setup guide</p>
            </div>
            <div className="content-card">
              {renderContent()}
            </div>
          </>
        ) : (
          <div className="content-card-no-header">
            {renderContent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default FreshdeskPage;
