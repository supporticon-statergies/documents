import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <img src={`${process.env.PUBLIC_URL}/help_dude.png`} alt="HelpDude" className="hero-logo-image" />
          <p className="hero-subtitle">Catalyst for Excellence</p>
          <p className="hero-description">
            Streamline your customer support workflow with powerful integrations
            for Freshdesk, Zoho, and Zendesk platforms.
          </p>
        </div>
      </div>

      <div className="features-section container">
        <h2 className="section-title">Choose Your Integration Platform</h2>
        
        <div className="features-grid">
          <div className="feature-card freshdesk-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Freshdesk Integration</h3>
            <p className="feature-description">
              Comprehensive Freshdesk integration with custom applications, KB management, 
              ticket handling, and admin controls.
            </p>
            <ul className="feature-list">
              <li>Custom Application Integration</li>
              <li>Knowledge Base Management</li>
              <li>Ticket Workflow Automation</li>
              <li>QA & DEV POC Support</li>
              <li>Admin Dashboard</li>
            </ul>
            <button className="feature-button freshdesk-button">
              Explore Freshdesk
            </button>
          </div>

          <div className="feature-card zoho-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 10H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 14H7.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M11 14H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Zoho Integration</h3>
            <p className="feature-description">
              Seamless Zoho Desk integration with powerful tools for support teams, 
              documentation, and quality assurance workflows.
            </p>
            <ul className="feature-list">
              <li>Custom Application Integration</li>
              <li>Article Management System</li>
              <li>Response Templates</li>
              <li>Quality Assurance Tools</li>
              <li>Team Collaboration</li>
            </ul>
            <button className="feature-button zoho-button">
              Coming Soon
            </button>
          </div>

          <div className="feature-card zendesk-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="feature-title">Zendesk Integration</h3>
            <p className="feature-description">
              Complete Zendesk integration suite with advanced features for enterprise 
              support operations and knowledge management.
            </p>
            <ul className="feature-list">
              <li>Enterprise Integration</li>
              <li>Advanced KB Documentation</li>
              <li>Automated Workflows</li>
              <li>Multi-channel Support</li>
              <li>Analytics & Reporting</li>
            </ul>
            <button className="feature-button zendesk-button">
              Coming Soon
            </button>
          </div>
        </div>
      </div>

      <div className="info-section container">
        <div className="info-card">
          <h2 className="info-title">Why Choose Help Dude Application?</h2>
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Optimized performance for seamless user experience</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🔒</div>
              <h3>Secure</h3>
              <p>Enterprise-grade security for your data</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🎯</div>
              <h3>Intuitive</h3>
              <p>User-friendly interface designed for efficiency</p>
            </div>
            <div className="info-item">
              <div className="info-icon">🚀</div>
              <h3>Scalable</h3>
              <p>Grows with your business needs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

