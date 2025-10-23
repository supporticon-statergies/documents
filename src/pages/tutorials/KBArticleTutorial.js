import React from 'react';

const KBArticleTutorial = () => {
  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>Knowledge Base Article Integration</h2>
        <p>
          Learn how to connect and scrape Knowledge Base articles from external sources like Microsoft Support, 
          Freshdesk Help Center, or any other documentation site.
        </p>
      </div>

      <div className="prerequisites-section">
        <h3>Prerequisites</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Access to HelpDude application</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Valid Knowledge Base URL</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Stable internet connection</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Patience for scraping process</span>
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">1</div>
          <div className="step-header-content">
            <h3>Access Knowledge Base Integration</h3>
            <p className="step-subtitle">Navigate to the KB Article section</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>Open HelpDude and navigate to the Knowledge Base section from the main menu.</p>
            <div className="tip-box-modern">
              <div className="tip-icon">💡</div>
              <p><strong>Tip:</strong> The KB Article integration allows you to scrape and import articles from external knowledge bases.</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/KB_1.png`} alt="Knowledge Base Interface" />
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">2</div>
          <div className="step-header-content">
            <h3>Enter Knowledge Base URL</h3>
            <p className="step-subtitle">Paste the full article link</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>In the "Connect Knowledge Base" section, paste the full URL of the knowledge base article you want to scrape.</p>
            <p><strong>Example URLs:</strong></p>
            <ul>
              <li>https://support.microsoft.com/en-us/office/...</li>
              <li>https://help.freshdesk.com/support/solutions/...</li>
              <li>https://docs.zendesk.com/hc/en-us/articles/...</li>
            </ul>
            <div className="tip-box-modern">
              <div className="tip-icon">⚠️</div>
              <p><strong>Important:</strong> Make sure to use the full URL including the complete path to the specific article.</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/KB.png`} alt="URL Input Field" />
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">3</div>
          <div className="step-header-content">
            <h3>Load Articles</h3>
            <p className="step-subtitle">Start the scraping process</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>Click the "Load Articles" button to start the scraping process.</p>
            <p>The system will:</p>
            <ul>
              <li>Connect to the provided URL</li>
              <li>Analyze the page structure</li>
              <li>Extract article content</li>
              <li>Parse and format the data</li>
            </ul>
            <div className="tip-box-modern">
              <div className="tip-icon">⏱️</div>
              <p><strong>Note:</strong> The scraping process may take time depending on the size and complexity of the knowledge base.</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/KB.png`} alt="Load Articles Button" />
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">4</div>
          <div className="step-header-content">
            <h3>Monitor Progress</h3>
            <p className="step-subtitle">Wait for completion</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>During the scraping process, you'll see:</p>
            <ul>
              <li>Progress indicators</li>
              <li>Number of articles found</li>
              <li>Current processing status</li>
              <li>Estimated time remaining</li>
            </ul>
            <div className="success-box-modern">
              <div className="success-icon">✅</div>
              <p><strong>Success:</strong> Once complete, all articles will be imported and available in your HelpDude knowledge base.</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/KB_4.png`} alt="Progress Monitoring" />
          </div>
        </div>
      </div>

      <div className="troubleshooting-section-modern">
        <div className="section-header-modern">
          <h3>Troubleshooting & Common Issues</h3>
        </div>
        <div className="troubleshooting-grid-modern">
          <div className="trouble-card">
            <div className="trouble-icon">🔍</div>
            <h4>URL Not Found</h4>
            <p>Ensure the URL is accessible and the article exists. Check for typos in the URL.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">⏱️</div>
            <h4>Slow Scraping</h4>
            <p>Large knowledge bases may take longer. Be patient and avoid interrupting the process.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🚫</div>
            <h4>Access Denied</h4>
            <p>Some sites may block scraping. Try with publicly accessible knowledge bases.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">📄</div>
            <h4>Incomplete Content</h4>
            <p>Some articles may have complex formatting. Check the imported content for completeness.</p>
          </div>
        </div>
      </div>

      <div className="success-box-modern">
        <div className="success-icon">🎉</div>
        <p><strong>Congratulations!</strong> You've successfully integrated Knowledge Base articles into HelpDude. The articles are now available for your support team to reference and use.</p>
      </div>
    </div>
  );
};

export default KBArticleTutorial;
