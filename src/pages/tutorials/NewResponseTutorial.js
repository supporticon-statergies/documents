import React from 'react';

const NewResponseTutorial = () => {
  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>New Response Process</h2>
        <p>
          Learn how to handle cases where existing articles are not sufficient to generate responses, 
          and how to create and validate new response templates for future use.
        </p>
      </div>

      <div className="prerequisites-section">
        <h3>When to Use New Response</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Existing articles are not relevant</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Article doesn't generate adequate response</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Need custom solution for unique issue</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Creating reusable response templates</span>
          </div>
        </div>
      </div>

      <div className="process-flow-section">
        <div className="section-header-modern">
          <h3>🔄 Support Agent Process Flow</h3>
        </div>
        
        <div className="process-card">
          <div className="process-step-number">1</div>
          <div className="process-content">
            <h4>Activate New Response Mode</h4>
            <p>When existing articles don't provide a sufficient response, click the <strong>"New"</strong> checkbox to enable custom response creation.</p>
            <div className="tip-box-modern">
              <div className="tip-icon">💡</div>
              <p><strong>Tip:</strong> The New checkbox appears when the system detects that articles are not relevant or don't generate an adequate response.</p>
            </div>
          </div>
        </div>

        <div className="process-card">
          <div className="process-step-number">2</div>
          <div className="process-content">
            <h4>Enter Issue & Solution</h4>
            <p>In the text fields provided:</p>
            <ul>
              <li><strong>Issue Field:</strong> Describe the customer's problem (e.g., "Printer Not Printing")</li>
              <li><strong>Solution Field:</strong> Provide the solution details (e.g., "Check ink cartridge")</li>
            </ul>
            <p>Type the complete issue description and the corresponding solution that addresses the customer's needs.</p>
          </div>
        </div>

        <div className="process-card">
          <div className="process-step-number">3</div>
          <div className="process-content">
            <h4>Generate Response</h4>
            <p>Press the <strong>"Submit"</strong> button. The system will:</p>
            <ul>
              <li>Process the issue and solution</li>
              <li>Generate a professional response email</li>
              <li>Format the content appropriately</li>
              <li>Present it for your review</li>
            </ul>
            <div className="success-box-modern">
              <div className="success-icon">✅</div>
              <p><strong>Response Generated:</strong> The system creates a well-formatted response based on your input.</p>
            </div>
          </div>
        </div>

        <div className="process-card">
          <div className="process-step-number">4</div>
          <div className="process-content">
            <h4>Review & Send</h4>
            <p>After the response is generated:</p>
            <ul>
              <li>Carefully review the generated response</li>
              <li>Make any necessary edits using the text editor</li>
              <li>Once verified and satisfied, press the <strong>"Send"</strong> button</li>
              <li>The response is sent to the customer and forwarded to the SME (Subject Matter Expert) for validation</li>
            </ul>
          </div>
        </div>

        <div className="process-image-full">
          <img src={`${process.env.PUBLIC_URL}/images/new_response.png`} alt="New Response Interface" />
        </div>
      </div>

      <div className="process-flow-section" style={{ marginTop: '3rem' }}>
        <div className="section-header-modern">
          <h3>✅ SME Validation Process</h3>
        </div>

        <div className="process-card">
          <div className="process-step-number">5</div>
          <div className="process-content">
            <h4>SME Reviews New Response</h4>
            <p>After the support agent sends the response:</p>
            <ul>
              <li>SME navigates to the <strong>"New Response"</strong> section</li>
              <li>The sent response appears in the queue for validation</li>
              <li>SME can review the issue, solution, and generated response</li>
              <li>SME evaluates the accuracy and quality of the response</li>
            </ul>
          </div>
        </div>

        <div className="process-card">
          <div className="process-step-number">6</div>
          <div className="process-content">
            <h4>Validate & Confirm</h4>
            <p>If the response is accurate and appropriate:</p>
            <ul>
              <li>SME clicks <strong>"Yes"</strong> to approve the response</li>
              <li>Confirms the validation</li>
              <li>The response template is saved for future use</li>
            </ul>
            <div className="tip-box-modern">
              <div className="tip-icon">🔄</div>
              <p><strong>Reusability:</strong> Once validated, this response becomes a reusable template.</p>
            </div>
          </div>
        </div>

        <div className="process-card">
          <div className="process-step-number">7</div>
          <div className="process-content">
            <h4>Future Use</h4>
            <p>After SME validation:</p>
            <ul>
              <li>The new response is added to the knowledge base</li>
              <li>When similar issues are found, the system automatically uses this validated response</li>
              <li>Generates responses based on this template</li>
              <li>Continues to use this article until the ticket is closed</li>
            </ul>
            <div className="success-box-modern">
              <div className="success-icon">🎉</div>
              <p><strong>Efficiency Boost:</strong> Validated responses improve response quality and reduce resolution time for similar issues!</p>
            </div>
          </div>
        </div>

        <div className="process-image-full">
          <img src={`${process.env.PUBLIC_URL}/images/new_response2.png`} alt="SME Validation Interface" />
        </div>
      </div>

      <div className="troubleshooting-section-modern">
        <div className="section-header-modern">
          <h3>Troubleshooting & Best Practices</h3>
        </div>
        <div className="troubleshooting-grid-modern">
          <div className="trouble-card">
            <div className="trouble-icon">✍️</div>
            <h4>Clear Descriptions</h4>
            <p>Always provide clear and detailed issue descriptions to help generate better responses.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🎯</div>
            <h4>Accurate Solutions</h4>
            <p>Ensure solutions are complete and accurate before submitting for response generation.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">👀</div>
            <h4>Review Before Sending</h4>
            <p>Always review the generated response carefully before sending to customers.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">✅</div>
            <h4>SME Validation</h4>
            <p>SME approval ensures response quality and builds a reliable knowledge base over time.</p>
          </div>
        </div>
      </div>

      <div className="success-box-modern">
        <div className="success-icon">🎉</div>
        <p><strong>Process Complete!</strong> You now understand how to create, send, and validate new responses in HelpDude. This workflow ensures high-quality, reusable solutions for your support team!</p>
      </div>
    </div>
  );
};

export default NewResponseTutorial;

