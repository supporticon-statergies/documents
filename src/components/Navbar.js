import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  const freshdeskOptions = [
    { name: 'Custom Application Integration', path: '/freshdesk/custom-app-integration' },
    { name: 'Login', path: '/freshdesk/login' },
    { name: 'KB Docs', path: '/freshdesk/kb-docs' },
    { name: 'Internal Article', path: '/freshdesk/internal-article' },
    { name: 'KT Article', path: '/freshdesk/kt-article' },
   
    { name: 'New Response', path: '/freshdesk/new-response' },
    { name: 'Sent QA', path: '/freshdesk/sent-qa' },
    { name: 'Closed Ticket', path: '/freshdesk/closed-ticket' },
    { name: 'Admin', path: '/freshdesk/admin' },
    { name: 'Analytics Dashboard', path: '/freshdesk/analytics' }
  ];

  const zohoOptions = [
    { name: 'Custom Application Integration', path: '/zoho/custom-app-integration' },
    { name: 'Login', path: '/zoho/login' },
    { name: 'KB Docs', path: '/zoho/kb-docs' },
    { name: 'Internal Article', path: '/zoho/internal-article' },
    { name: 'KT Article', path: '/zoho/kt-article' },
    { name: 'QA POC', path: '/zoho/qa-poc' },
    { name: 'DEV POC', path: '/zoho/dev-poc' },
    { name: 'New Response', path: '/zoho/new-response' },
    { name: 'Sent QA', path: '/zoho/sent-qa' },
    { name: 'Closed Ticket', path: '/zoho/closed-ticket' },
    { name: 'Admin', path: '/zoho/admin' }
  ];

  const zendeskOptions = [
    { name: 'Custom Application Integration', path: '/zendesk/custom-app-integration' },
    { name: 'Login', path: '/zendesk/login' },
    { name: 'KB Docs', path: '/zendesk/kb-docs' },
    { name: 'Internal Article', path: '/zendesk/internal-article' },
    { name: 'KT Article', path: '/zendesk/kt-article' },
    { name: 'QA POC', path: '/zendesk/qa-poc' },
    { name: 'DEV POC', path: '/zendesk/dev-poc' },
    { name: 'New Response', path: '/zendesk/new-response' },
    { name: 'Sent QA', path: '/zendesk/sent-qa' },
    { name: 'Closed Ticket', path: '/zendesk/closed-ticket' },
    { name: 'Admin', path: '/zendesk/admin' }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMenu = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar" ref={dropdownRef}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Supporticon Logo" className="logo-image" />
        </Link>

        <button 
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item dropdown">
            <button 
              className={`navbar-link ${activeDropdown === 'freshdesk' ? 'active' : ''}`}
              onClick={() => toggleDropdown('freshdesk')}
            >
              Freshdesk Integration
              <span className="dropdown-arrow">▼</span>
            </button>
            {activeDropdown === 'freshdesk' && (
              <div className="dropdown-menu">
                {freshdeskOptions.map((option, index) => (
                  <Link 
                    key={index} 
                    to={option.path} 
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li className="navbar-item dropdown">
            <button 
              className={`navbar-link ${activeDropdown === 'zoho' ? 'active' : ''}`}
              onClick={() => toggleDropdown('zoho')}
            >
              Zoho Integration
              <span className="dropdown-arrow">▼</span>
            </button>
            {activeDropdown === 'zoho' && (
              <div className="dropdown-menu">
                {zohoOptions.map((option, index) => (
                  <Link 
                    key={index} 
                    to={option.path} 
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            )}
          </li>

          <li className="navbar-item dropdown">
            <button 
              className={`navbar-link ${activeDropdown === 'zendesk' ? 'active' : ''}`}
              onClick={() => toggleDropdown('zendesk')}
            >
              Zendesk Integration
              <span className="dropdown-arrow">▼</span>
            </button>
            {activeDropdown === 'zendesk' && (
              <div className="dropdown-menu">
                {zendeskOptions.map((option, index) => (
                  <Link 
                    key={index} 
                    to={option.path} 
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

