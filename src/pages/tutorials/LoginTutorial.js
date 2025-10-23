import React from 'react';

const LoginTutorial = () => {
  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>HelpDude First-Time Login & Setup</h2>
        <p className="intro-text">
          Complete these steps to set up your HelpDude account and connect it with your Freshdesk domain.
        </p>
      </div>

      <div className="prerequisites-section">
        <h3>📋 Prerequisites</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Freshdesk account with active domain</span>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Access to Freshdesk profile settings</span>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Valid email address for HelpDude account</span>
          </div>
        </div>
      </div>

      <div className="steps-container">
        {/* Step 1 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">01</div>
            <div className="step-header-content">
              <h3 className="step-title">Enter Your Freshdesk Domain</h3>
              <p className="step-subtitle">Connect HelpDude to your Freshdesk account</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>Open the HelpDude login page</li>
                <li>In the <strong>Domain Name</strong> field, enter only your Freshdesk subdomain</li>
                <li><strong>Important:</strong> Do NOT include "https://" or ".com"
                  <ul>
                    <li>✅ Correct: <strong>your-company</strong></li>
                    <li>✅ Correct: <strong>sargurui66murugan-support</strong></li>
                    <li>❌ Wrong: https://your-company.freshdesk.com</li>
                  </ul>
                </li>
                <li>You can find your domain in the address bar when logged into Freshdesk</li>
              </ol>
              <div className="tip-box-modern">
                <span className="tip-icon">💡</span>
                <span><strong>Tip:</strong> Your domain is the part before ".freshdesk.com" in your Freshdesk URL</span>
              </div>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/images/setup_1.png`} alt="Enter Freshdesk Domain" />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">02</div>
            <div className="step-header-content">
              <h3 className="step-title">Get Your Freshdesk API Key</h3>
              <p className="step-subtitle">Access your API credentials from profile settings</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>In Freshdesk, click on your <strong>profile icon</strong> in the top-right corner (shows your initial or avatar)</li>
                <li>From the dropdown menu, select <strong>Profile Settings</strong></li>
                <li>On the Profile Settings page, look for the <strong>View API Key</strong> button on the right side</li>
                <li>Click <strong>View API Key</strong> to reveal your API key</li>
                <li><strong>Copy</strong> the API key to your clipboard</li>
                <li>Paste it into the <strong>API Key</strong> field in the HelpDude login form</li>
              </ol>
              <div className="tip-box-modern">
                <span className="tip-icon">🔑</span>
                <span><strong>Security:</strong> Keep your API key private. Never share it publicly or commit it to version control.</span>
              </div>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/images/setup_2.png`} alt="Profile Menu" />
              <img src={`${process.env.PUBLIC_URL}/images/setup_3.png`} alt="View API Key" style={{marginTop: '1rem'}} />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">03</div>
            <div className="step-header-content">
              <h3 className="step-title">Validate & Continue</h3>
              <p className="step-subtitle">Verify your Freshdesk connection</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>After entering both your <strong>Domain Name</strong> and <strong>API Key</strong></li>
                <li>Click the <strong>Next</strong> button</li>
                <li>HelpDude will validate your credentials with Freshdesk</li>
                <li>If successful, you'll be taken to the account setup page</li>
                <li>If validation fails:
                  <ul>
                    <li>Double-check your domain name (no https:// or .com)</li>
                    <li>Verify your API key is correct</li>
                    <li>Ensure you have API access permissions in Freshdesk</li>
                  </ul>
                </li>
              </ol>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/images/setup_5.png`} alt="Validate Connection" />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">04</div>
            <div className="step-header-content">
              <h3 className="step-title">Complete Your Account Setup</h3>
              <p className="step-subtitle">Create your HelpDude user account</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>Fill in the required fields:
                  <ul>
                    <li><strong>Full Name:</strong> Your complete name</li>
                    <li><strong>Username:</strong> Choose a unique username</li>
                    <li><strong>Email:</strong> Your valid email address</li>
                    <li><strong>Password:</strong> Create a secure password</li>
                  </ul>
                </li>
                <li>Review all information for accuracy</li>
                <li>Click <strong>Complete Setup</strong> button</li>
                <li>You'll be redirected to the HelpDude login page</li>
              </ol>
              <div className="success-box-modern">
                <span className="success-icon">👑</span>
                <span><strong>Admin Rights:</strong> The first user who completes this setup becomes the HelpDude Administrator for this Freshdesk domain!</span>
              </div>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/images/login.png`} alt="Complete Setup Form" />
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">05</div>
            <div className="step-header-content">
              <h3 className="step-title">Login to HelpDude</h3>
              <p className="step-subtitle">Access your newly created account</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>You'll be automatically redirected to the <strong>Login</strong> page</li>
                <li>Enter your <strong>Domain Name</strong> And <strong>Username</strong></li>
                <li>Enter your <strong>Password</strong></li>
                <li>Click <strong>submit</strong></li>
                <li>You're now logged into HelpDude! 🎉</li>
                <li>As the first user, you have <strong>full administrator access</strong></li>
              </ol>
              <div className="success-box-modern">
                <span className="success-icon">🎉</span>
                <span><strong>Success!</strong> Your HelpDude account is ready. You can now start using all features!</span>
              </div>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/images/login.png`} alt="Login Page" />
            </div>
          </div>
        </div>
      </div>

      {/* Troubleshooting Section */}
      <div className="troubleshooting-section-modern">
        <div className="section-header-modern">
          <h3>🔧 Troubleshooting & Common Issues</h3>
          <p>Quick solutions to common login and setup problems</p>
        </div>
        <div className="troubleshooting-grid-modern">
          <div className="trouble-card">
            <div className="trouble-icon">⚠️</div>
            <h4>Invalid Domain Error</h4>
            <p>Make sure you entered only the subdomain without "https://" or ".freshdesk.com". Example: use "your-company" not "https://your-company.freshdesk.com"</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🔑</div>
            <h4>API Key Not Working</h4>
            <p>Copy the API key directly from Freshdesk Profile Settings. Ensure no extra spaces. If the key was recently regenerated, use the new one.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🚫</div>
            <h4>Cannot Access Profile Settings</h4>
            <p>You need appropriate permissions in Freshdesk to view your API key. Contact your Freshdesk administrator if you don't see the "View API Key" option.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">📧</div>
            <h4>Email Already Registered</h4>
            <p>If the email is already in use, try logging in instead of signing up, or use a different email address.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🔒</div>
            <h4>Password Requirements</h4>
            <p>Password must be strong enough. Include uppercase, lowercase, numbers, and special characters for better security.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">👑</div>
            <h4>Who Gets Admin Access?</h4>
            <p>The first user who completes the setup for a Freshdesk domain automatically becomes the administrator with full access rights.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTutorial;

