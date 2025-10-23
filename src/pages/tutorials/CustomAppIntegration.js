import React from 'react';

const CustomAppIntegration = () => {
  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>Install Freshdesk Custom App (HelpDude)</h2>
        <p className="intro-text">
          Follow these step-by-step instructions to install and configure the HelpDude app in your Freshdesk account.
        </p>
      </div>

      <div className="prerequisites-section">
        <h3>📋 Prerequisites</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Freshdesk account with admin/developer permissions</span>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>App ZIP file ready</span>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Freshdesk subdomain (example: yourcompany.freshdesk.com)</span>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Freshdesk API key (from your profile)</span>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Support email for app metadata</span>
          </div>
        </div>
      </div>

      <div className="steps-container">
        {/* Step 1 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">01</div>
            <div className="step-header-content">
              <h3 className="step-title">Open Freshdesk Developer Portal</h3>
              <p className="step-subtitle">Access the app development environment</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>Sign in to Freshdesk with an admin account</li>
                <li>From the left sidebar go to <strong>Apps → Developer Portal</strong></li>
                <li>Sometimes called Apps → Manage then a link to the Developer Portal</li>
              </ol>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/image_1.png`} alt="Freshdesk Developer Portal" />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">02</div>
            <div className="step-header-content">
              <h3 className="step-title">Create a New Custom App</h3>
              <p className="step-subtitle">Upload and configure your application</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>In the Developer Portal, click <strong>New → Custom App</strong> (or Create app)</li>
                <li>Upload the app <strong>.zip file</strong></li>
                <li>Give the app a Name (e.g., <strong>HelpDude</strong>)</li>
                <li>Click <strong>Save and Continue</strong></li>
              </ol>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/image_2.png`} alt="Create Custom App" />
              <img src={`${process.env.PUBLIC_URL}/image_3.png`} alt="Upload App" style={{marginTop: '1rem'}} />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">03</div>
            <div className="step-header-content">
              <h3 className="step-title">Fill Required App Metadata</h3>
              <p className="step-subtitle">Complete essential information and publish</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>Fill the mandatory fields:
                  <ul>
                    <li>Overview (long description)</li>
                    <li>Short description</li>
                    <li>Support email</li>
                  </ul>
                </li>
                <li>Click <strong>Save and Continue</strong></li>
                <li>Complete any other required fields</li>
                <li>Then <strong>Publish</strong> (or submit) the app from the portal</li>
              </ol>
              <div className="tip-box-modern">
                <span className="tip-icon">💡</span>
                <span><strong>Tip:</strong> Ensure the support email is valid so Freshdesk users can contact you about app problems.</span>
              </div>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/image_4.png`} alt="Fill App Metadata" />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">04</div>
            <div className="step-header-content">
              <h3 className="step-title">Install and Activate the App</h3>
              <p className="step-subtitle">Deploy your application in Freshdesk</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>Return to Freshdesk (main UI) → <strong>Apps → Manage Apps</strong></li>
                <li>If HelpDude was already installed from the Marketplace, <strong>disable that Marketplace version first</strong> (to avoid conflicts)</li>
                <li>Choose <strong>Custom Apps</strong> and find the HelpDude app you published</li>
                <li>Click <strong>Install</strong></li>
                <li>After installation, <strong>refresh the browser</strong></li>
                <li>You should now see HelpDude in the Freshdesk side panel</li>
              </ol>
              <div className="success-box-modern">
                <span className="success-icon">🎉</span>
                <span><strong>Success!</strong> Your HelpDude app is now ready to use in Freshdesk.</span>
              </div>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/image_6.png`} alt="Install App" />
              <img src={`${process.env.PUBLIC_URL}/image_7.png`} alt="App Installed" style={{marginTop: '1rem'}} />
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting Section */}
      <div className="troubleshooting-section-modern">
        <div className="section-header-modern">
          <h3>🔧 Troubleshooting & Common Mistakes</h3>
          <p>Quick solutions to common installation issues</p>
        </div>
        <div className="troubleshooting-grid-modern">
          <div className="trouble-card">
            <div className="trouble-icon">⚠️</div>
            <h4>App not visible after install</h4>
            <p>Refresh the page, ensure you installed the custom app (not only published in Developer Portal), and that the app scope/placement matches where you expect it.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🔑</div>
            <h4>API key invalid</h4>
            <p>Double-check you copied the API key from your profile (top right avatar → Profile settings). If you regenerated your key, use the new one.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🚫</div>
            <h4>Permission errors</h4>
            <p>Make sure the Freshdesk account used has required permissions (admin/developer).</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">⚡</div>
            <h4>Marketplace version conflict</h4>
            <p>If you installed HelpDude from Marketplace earlier, disable that copy before installing the custom app to avoid duplicates.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">📝</div>
            <h4>Logs & debug</h4>
            <p>Open Developer Portal → App Logs / App Installation details to see errors if the app fails to install or connects incorrectly.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomAppIntegration;

