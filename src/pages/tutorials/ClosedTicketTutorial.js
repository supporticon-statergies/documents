import React from 'react';

const ClosedTicketTutorial = () => {
  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>Closed Ticket Integration</h2>
        <p>
          Learn how to connect and fetch closed ticket data from Freshdesk to build an intelligent knowledge base. 
          The system automatically uses closed ticket resolutions to generate better responses for new, similar issues.
        </p>
      </div>

      <div className="prerequisites-section">
        <h3>Prerequisites</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Logged in to HelpDude</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Admin access permissions</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Freshdesk credentials configured</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Stable internet connection</span>
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">1</div>
          <div className="step-header-content">
            <h3>Connect and Fetch Closed Tickets</h3>
            <p className="step-subtitle">Automatic retrieval from Freshdesk</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p><strong>Access Admin Section:</strong></p>
            <ul>
              <li>Navigate to the <strong>Admin</strong> section in the top navigation bar</li>
              <li>You'll see the number of users and management options</li>
              <li>Look for the <strong>"Closed Ticket"</strong> button in the top right corner</li>
            </ul>

            <div className="tip-box-modern">
              <div className="tip-icon">🔐</div>
              <p><strong>Automatic Configuration:</strong> All necessary configuration data is retrieved from your login credentials. No manual setup required!</p>
            </div>

            <p><strong>Connect to Freshdesk:</strong></p>
            <ul>
              <li>Click on the <strong>"Closed Ticket"</strong> button</li>
              <li>The page will display your connection status</li>
              <li>Click the <strong>"CONNECT"</strong> button to initiate the fetch process</li>
              <li>The system will automatically connect to Freshdesk using your stored credentials</li>
            </ul>

            <div className="success-box-modern">
              <div className="success-icon">⚡</div>
              <p><strong>Automatic Fetching:</strong> Once connected, the system automatically retrieves all closed ticket data from Freshdesk.</p>
            </div>

            <p><strong>Knowledge Building Process:</strong></p>
            <p>After fetching closed tickets, the system performs intelligent analysis:</p>
            <ul>
              <li><strong>Data Extraction:</strong> Retrieves ticket details including issue descriptions, solutions, and resolutions</li>
              <li><strong>Pattern Recognition:</strong> Identifies common issues and their successful resolutions</li>
              <li><strong>Knowledge Base Update:</strong> Adds validated solutions to the knowledge repository</li>
              <li><strong>Response Generation:</strong> Uses closed ticket knowledge to generate responses for new, similar tickets</li>
            </ul>

            <div className="tip-box-modern">
              <div className="tip-icon">🧠</div>
              <p><strong>Smart Learning:</strong> The system continuously learns from closed tickets to improve response accuracy and reduce resolution time.</p>
            </div>

            <p><strong>How It Helps:</strong></p>
            <ul>
              <li>When a new ticket arrives with a similar issue, the system references closed ticket resolutions</li>
              <li>Generates accurate responses based on proven solutions</li>
              <li>Reduces manual effort by providing pre-validated answers</li>
              <li>Improves consistency across support responses</li>
              <li>Speeds up ticket resolution for recurring issues</li>
            </ul>

            <div className="success-box-modern">
              <div className="success-icon">🎉</div>
              <p><strong>Knowledge Base Active:</strong> Your closed ticket data is now part of the intelligent knowledge base, helping you resolve new tickets faster!</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/closed_ticket.png`} alt="Closed Ticket Connection" />
          </div>
        </div>
      </div>

      <div className="troubleshooting-section-modern">
        <div className="section-header-modern">
          <h3>Troubleshooting & Best Practices</h3>
        </div>
        <div className="troubleshooting-grid-modern">
          <div className="trouble-card">
            <div className="trouble-icon">🔑</div>
            <h4>Connection Failed</h4>
            <p>Ensure you're logged in with valid Freshdesk credentials. Try logging out and back in to refresh your session.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">⏱️</div>
            <h4>Slow Fetching</h4>
            <p>Large numbers of closed tickets may take time to fetch. Be patient and don't interrupt the process.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">📊</div>
            <h4>No Tickets Found</h4>
            <p>Verify that your Freshdesk account has closed tickets. Check account permissions and access rights.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🔄</div>
            <h4>Update Knowledge Base</h4>
            <p>Regularly connect to fetch new closed tickets and keep your knowledge base up-to-date.</p>
          </div>
        </div>
      </div>

      <div className="success-box-modern">
        <div className="success-icon">🎉</div>
        <p><strong>Integration Complete!</strong> Your closed ticket data is now actively improving response generation. The system will automatically reference this knowledge when handling similar new tickets!</p>
      </div>
    </div>
  );
};

export default ClosedTicketTutorial;

