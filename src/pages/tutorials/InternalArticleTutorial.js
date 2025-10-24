import React, { useState } from 'react';

const InternalArticleTutorial = () => {
  const [activeTab, setActiveTab] = useState('confluence');

  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>Internal Article Integration</h2>
        <p>
          Connect your internal documentation from Confluence or Freshdesk to streamline your support workflow.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="integration-tabs">
        <button 
          className={`tab-button ${activeTab === 'confluence' ? 'active' : ''}`}
          onClick={() => setActiveTab('confluence')}
        >
          <span className="tab-icon">📘</span>
          Confluence
        </button>
        <button 
          className={`tab-button ${activeTab === 'freshdesk' ? 'active' : ''}`}
          onClick={() => setActiveTab('freshdesk')}
        >
          <span className="tab-icon">📗</span>
          Freshdesk
        </button>
      </div>

      {/* Confluence Content */}
      {activeTab === 'confluence' && (
        <>
          <div className="prerequisites-section">
            <h3>Prerequisites for Confluence</h3>
            <div className="checklist-grid">
              <div className="checklist-item">
                <div className="check-icon">✓</div>
                <span>Active Confluence account</span>
              </div>
              <div className="checklist-item">
                <div className="check-icon">✓</div>
                <span>Access to Confluence workspace</span>
              </div>
              <div className="checklist-item">
                <div className="check-icon">✓</div>
                <span>Atlassian account credentials</span>
              </div>
              <div className="checklist-item">
                <div className="check-icon">✓</div>
                <span>Permission to create API tokens</span>
              </div>
            </div>
          </div>

          <div className="modern-step">
            <div className="step-header">
              <div className="step-number-modern">1</div>
              <div className="step-header-content">
                <h3>Find Confluence Base URL & Space Key</h3>
                <p className="step-subtitle">Extract from your Confluence article URL</p>
              </div>
            </div>
            <div className="step-body">
              <div className="step-content-modern step-content-centered">
                <p>Open any Confluence article page and look at the address bar to find:</p>
                <ul>
                  <li><strong>Confluence Base URL:</strong> The main domain (e.g., https://your-domain.atlassian.net)</li>
                  <li><strong>Space Key:</strong> Found in the URL path (e.g., /wiki/spaces/<strong>SPACE</strong>/...)</li>
                </ul>
                <div className="tip-box-modern">
                 
                  <ul style={{ marginTop: '0.5rem' }}>
                    <li><strong>Base URL:</strong> https://shanmugasudhan123.atlassian.net</li>
                    <li><strong>Space Key:</strong> ~7120252f63d3c55047f7929d15684a3c2cd</li>
                  </ul>
                </div>
              </div>
              <div className="step-image-modern">
                <img src={`${process.env.PUBLIC_URL}/images/internal_2.png`} alt="Configuration Form" />
                
              </div>
            </div>
          </div>

          <div className="modern-step">
            <div className="step-header">
              <div className="step-number-modern">2</div>
              <div className="step-header-content">
                <h3>Enter Username (Email ID)</h3>
                <p className="step-subtitle">Use your Confluence registered email</p>
              </div>
            </div>
            <div className="step-body">
              <div className="step-content-modern step-content-centered">
                <p>In the Username field, enter the email address you use to log in to Confluence.</p>
                <p><strong>Example:</strong> user@company.com</p>
                <div className="tip-box-modern">
                  <div className="tip-icon">⚠️</div>
                  <p><strong>Important:</strong> Use the exact email address registered with your Atlassian/Confluence account.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="modern-step">
            <div className="step-header">
              <div className="step-number-modern">3</div>
              <div className="step-header-content">
                <h3>Create API Token</h3>
                <p className="step-subtitle">Generate your Atlassian API token</p>
              </div>
            </div>
            <div className="step-body">
              <div className="step-content-modern">
                <p>Follow these steps to create your API token:</p>
                <ol>
                  <li>Visit <a href="https://id.atlassian.com/manage-profile/security/api-tokens" target="_blank" rel="noopener noreferrer">Atlassian API Tokens</a></li>
                  <li>Click <strong>"Create API token"</strong> button</li>
                  <li>Enter a name for your token (e.g., "HelpDude Integration")</li>
                  <li>Set an expiration date (tokens can last up to 1 year)</li>
                  <li>Click <strong>Create</strong></li>
                  <li>Copy the generated token immediately (you won't be able to see it again)</li>
                </ol>
                <div className="tip-box-modern">
                  <div className="tip-icon">🔒</div>
                  <p><strong>Security:</strong> Store your API token securely. You can only create a maximum of 25 tokens at a time.</p>
                </div>
              </div>
              <div className="step-image-modern">
                <img src={`${process.env.PUBLIC_URL}/images/internal_3.png`} alt="Create API Token" />
                <img src={`${process.env.PUBLIC_URL}/images/internal_4.png`} alt="API Token Form" />
              </div>
            </div>
          </div>

          <div className="modern-step">
            <div className="step-header">
              <div className="step-number-modern">4</div>
              <div className="step-header-content">
                <h3>Configure & Test Connection</h3>
                <p className="step-subtitle">Complete setup in HelpDude</p>
              </div>
            </div>
            <div className="step-body">
              <div className="step-content-modern">
                <p>In the HelpDude application:</p>
                <ol>
                  <li>Paste all four required fields:
                    <ul>
                      <li>Confluence Base URL</li>
                      <li>Space Key</li>
                      <li>Username (Email)</li>
                      <li>API Token</li>
                    </ul>
                  </li>
                  <li>Click the <strong>"Test"</strong> button to validate your connection</li>
                  <li>Once validated, click <strong>"Fetch Articles"</strong> to import your documentation</li>
                </ol>
                <div className="success-box-modern">
                  <div className="success-icon">✅</div>
                  <p><strong>Success:</strong> Your Confluence articles will be imported and ready to use in HelpDude!</p>
                </div>
              </div>
              <div className="step-image-modern">
              
                <img src={`${process.env.PUBLIC_URL}/images/internal_1.png`} alt="Test and Fetch Articles" />
              </div>
            </div>
          </div>

          <div className="troubleshooting-section-modern">
            <div className="section-header-modern">
              <h3>Troubleshooting & Common Issues</h3>
            </div>
            <div className="troubleshooting-grid-modern">
              <div className="trouble-card">
                <div className="trouble-icon">🔑</div>
                <h4>Invalid API Token</h4>
                <p>Ensure you copied the token correctly. API tokens expire, so create a new one if needed.</p>
              </div>
              <div className="trouble-card">
                <div className="trouble-icon">🌐</div>
                <h4>Incorrect Base URL</h4>
                <p>Use only the domain (e.g., https://your-domain.atlassian.net) without additional paths.</p>
              </div>
              <div className="trouble-card">
                <div className="trouble-icon">📋</div>
                <h4>Wrong Space Key</h4>
                <p>Space keys are case-sensitive. Copy exactly as shown in your Confluence URL.</p>
              </div>
              <div className="trouble-card">
                <div className="trouble-icon">👤</div>
                <h4>Username Error</h4>
                <p>Ensure you're using the email address registered with Atlassian, not a display name.</p>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Freshdesk Content */}
      {activeTab === 'freshdesk' && (
        <>
          <div className="prerequisites-section">
            <h3>Prerequisites for Freshdesk</h3>
            <div className="checklist-grid">
              <div className="checklist-item">
                <div className="check-icon">✓</div>
                <span>Already logged in to HelpDude</span>
              </div>
              <div className="checklist-item">
                <div className="check-icon">✓</div>
                <span>Freshdesk credentials configured</span>
              </div>
              <div className="checklist-item">
                <div className="check-icon">✓</div>
                <span>Access to Freshdesk articles</span>
              </div>
              <div className="checklist-item">
                <div className="check-icon">✓</div>
                <span>Active internet connection</span>
              </div>
            </div>
          </div>

          <div className="modern-step">
            <div className="step-header">
              <div className="step-number-modern">1</div>
              <div className="step-header-content">
                <h3>Freshdesk Internal Articles</h3>
                <p className="step-subtitle">Complete setup and fetch articles</p>
              </div>
            </div>
            <div className="step-body">
              <div className="step-content-modern step-content-centered">
                <p>Since you've already logged in to HelpDude with your Freshdesk credentials, all necessary details are automatically configured.</p>
                
                <div className="tip-box-modern">
                  <div className="tip-icon">💡</div>
                  <p><strong>Automatic Configuration:</strong> The following information is already available from your login:</p>
                  <ul>
                    <li><strong>Freshdesk Domain:</strong> From your login</li>
                    <li><strong>API Key:</strong> Stored securely</li>
                    <li><strong>User Permissions:</strong> Based on your Freshdesk account</li>
                  </ul>
                </div>

                <p><strong>Next Steps:</strong></p>
                <ol>
                  <li>Click the <strong>"Test"</strong> button to verify your connection to Freshdesk</li>
                  <li>The test will check API key validity, domain accessibility, permission levels, and article access rights</li>
                  <li>Once validated, click <strong>"Fetch Articles"</strong> to import your internal articles from Freshdesk</li>
                  <li>The system will connect to your Freshdesk knowledge base, retrieve all accessible articles, import content and formatting, and organize articles by categories</li>
                </ol>

                <div className="success-box-modern">
                  <div className="success-icon">✅</div>
                  <p><strong>Success:</strong> Your Freshdesk internal articles will be imported and ready to use in HelpDude for quick reference!</p>
                </div>

                <div className="tip-box-modern">
                  <div className="tip-icon">⏱️</div>
                  <p><strong>Processing Time:</strong> Depending on the number of articles, this may take a few moments. Please be patient and avoid interrupting the process.</p>
                </div>
              </div>
              <div className="step-image-modern">
                <img src={`${process.env.PUBLIC_URL}/images/internal_5.png`} alt="Configuration Form" />
                
              </div>
            </div>
            
          </div>

          

          <div className="troubleshooting-section-modern">
            <div className="section-header-modern">
              <h3>Troubleshooting & Common Issues</h3>
            </div>
            <div className="troubleshooting-grid-modern">
              <div className="trouble-card">
                <div className="trouble-icon">🔑</div>
                <h4>Authentication Failed</h4>
                <p>Your session may have expired. Try logging out and logging back in to refresh your credentials.</p>
              </div>
              <div className="trouble-card">
                <div className="trouble-icon">📄</div>
                <h4>No Articles Found</h4>
                <p>Ensure your Freshdesk account has access to internal articles. Check permissions with your admin.</p>
              </div>
              <div className="trouble-card">
                <div className="trouble-icon">⏱️</div>
                <h4>Slow Loading</h4>
                <p>Large knowledge bases take longer to fetch. Avoid interrupting the process.</p>
              </div>
              <div className="trouble-card">
                <div className="trouble-icon">🔄</div>
                <h4>Sync Issues</h4>
                <p>If articles aren't updating, try refreshing the connection or re-fetching the articles.</p>
              </div>
            </div>
          </div>
        </>
      )}

      <div className="success-box-modern">
        <div className="success-icon">🎉</div>
        <p><strong>Congratulations!</strong> You've successfully configured internal article integration. Your team now has quick access to all documentation!</p>
      </div>
    </div>
  );
};

export default InternalArticleTutorial;

