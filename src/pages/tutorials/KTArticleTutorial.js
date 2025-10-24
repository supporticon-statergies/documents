import React from 'react';

const KTArticleTutorial = () => {
  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>KT Article Integration - Jira</h2>
        <p>
          Connect your Jira knowledge base to HelpDude for seamless knowledge transfer and documentation management.
        </p>
      </div>

      <div className="prerequisites-section">
        <h3>Prerequisites</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Active Jira account</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Access to Jira workspace</span>
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
            <h3>Find Jira Base URL & Project Key</h3>
            <p className="step-subtitle">Extract from your Jira article page</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>Open any Jira article page and look at the address bar to find:</p>
            <ul>
              <li><strong>Jira Base URL:</strong> The main domain (e.g., https://your-domain.atlassian.net)</li>
              <li><strong>Project Key:</strong> Found in the URL path (e.g., /browse/<strong>KAN</strong>-14)</li>
            </ul>
            <div className="tip-box-modern">
             
              <ul style={{ marginTop: '0.5rem' }}>
                <li><strong>Jira Base URL:</strong> https://shanmugasudhan123.atlassian.net</li>
                <li><strong>Project Key:</strong> KAN</li>
              </ul>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/KT_1.png`} alt="Jira URL Structure" />
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">2</div>
          <div className="step-header-content">
            <h3>Enter Username (Email ID)</h3>
            <p className="step-subtitle">Use your Jira registered email</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern step-content-centered">
            <p>In the Username field, enter the email address you use to log in to Jira.</p>
            <p><strong>Example:</strong> user@company.com</p>
            <div className="tip-box-modern">
              <div className="tip-icon">⚠️</div>
              <p><strong>Important:</strong> Use the exact email address registered with your Atlassian/Jira account.</p>
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
              <li>Enter a name for your token (e.g., "HelpDude KT Integration")</li>
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
                  <li>Jira Base URL</li>
                  <li>Project Key</li>
                  <li>Username (Email)</li>
                  <li>API Token</li>
                </ul>
              </li>
              <li>Click the <strong>"Test Connection"</strong> button to validate your setup</li>
              <li>Once validated, click <strong>"Fetch KT Documents"</strong> to import your knowledge transfer articles</li>
            </ol>
            <div className="success-box-modern">
              <div className="success-icon">✅</div>
              <p><strong>Success:</strong> Your Jira KT articles will be imported and ready to use in HelpDude!</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/KT_2.png`} alt="Test and Fetch KT Documents" />
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
            <h4>Wrong Project Key</h4>
            <p>Project keys are case-sensitive and usually 2-5 letters. Copy exactly as shown in your Jira URL.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">👤</div>
            <h4>Username Error</h4>
            <p>Ensure you're using the email address registered with Atlassian, not a display name.</p>
          </div>
        </div>
      </div>

      <div className="success-box-modern">
        <div className="success-icon">🎉</div>
        <p><strong>Congratulations!</strong> You've successfully configured KT Article integration with Jira. Your team now has quick access to all knowledge transfer documentation!</p>
      </div>
    </div>
  );
};

export default KTArticleTutorial;

