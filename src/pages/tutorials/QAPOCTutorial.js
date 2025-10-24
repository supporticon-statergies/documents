import React from 'react';

const QAPOCTutorial = () => {
  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>Send QA - POC Flow</h2>
        <p>
          Learn how to manage and send tickets to QA POC or DEV POC for validation and testing. 
          This workflow ensures proper communication between support agents, QA, and development teams.
        </p>
      </div>

      <div className="prerequisites-section">
        <h3>Prerequisites</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>QA POC and DEV POC registered</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Access to HelpDude application</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Testing feature details</span>
          </div>
          <div className="checklist-item">
            <div className="check-icon">✓</div>
            <span>Clear issue description</span>
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">1</div>
          <div className="step-header-content">
            <h3>Setup QA and DEV POC</h3>
            <p className="step-subtitle">Add QA POC and DEV POC Details</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>Before sending tickets, you need to register the Point of Contacts (POCs):</p>
            <ul>
              <li>Navigate to the <strong>"QA POCs"</strong> section</li>
              <li>Click <strong>"Create"</strong> or <strong>"Show"</strong> to manage POCs</li>
              <li>SME will help you find the appropriate QA POC and DEV POC for your project</li>
            </ul>
            <div className="tip-box-modern">
              <div className="tip-icon">💡</div>
              <p><strong>Required Information:</strong></p>
              <ul>
                <li><strong>QA POC NAME:</strong> Enter the QA point of contact name</li>
                <li><strong>TESTING FEATURE:</strong> Specify what feature needs testing</li>
                <li><strong>EMAIL ADDRESS:</strong> Valid email for the POC</li>
              </ul>
            </div>
            <p>Click <strong>"SAVE QA POC"</strong> to register the contact details.</p>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/poc_1.png`} alt="Add QA POC Details" />
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">2</div>
          <div className="step-header-content">
            <h3>Draft Mail and Select Issue</h3>
            <p className="step-subtitle">Create Mail Draft with Issue Details</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>When you need to send a ticket to QA or DEV POC:</p>
            <ul>
              <li>In the mail draft page, check the <strong>"New"</strong> checkbox</li>
              <li>Type the issue description in the issue field</li>
              <li>Select the issue category from the dropdown (e.g., "Did not find")</li>
              <li>Click <strong>"More Details"</strong> button to provide additional information</li>
            </ul>
            <div className="tip-box-modern">
              <div className="tip-icon">📝</div>
              <p><strong>Tip:</strong> Checking "New" indicates this is a new issue that requires POC attention.</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/poc_2.png`} alt="Mail Draft Page" />
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">3</div>
          <div className="step-header-content">
            <h3>Configure POC and Generate Response</h3>
            <p className="step-subtitle">Select POC and provide problem details</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p>In the "More Details" modal, configure the POC assignment:</p>
            <p><strong>Feature Selection:</strong></p>
            <ul>
              <li>Choose the testing feature from the dropdown</li>
              <li>The AI automatically selects the appropriate QA POC and DEV POC based on the feature</li>
              <li>If the AI selection is wrong, you can manually select the correct POC</li>
            </ul>
            <div className="tip-box-modern">
              <div className="tip-icon">🤖</div>
              <p><strong>AI Auto-Selection:</strong> The system intelligently matches POCs based on feature type and availability.</p>
            </div>
            <p><strong>Provide Problem Details:</strong></p>
            <ul>
              <li><strong>Where are you stuck?</strong> Describe the exact problem (e.g., "Payment gateway not working properly")</li>
              <li><strong>Current status:</strong> Explain what's happening now (e.g., "now dev team currently working")</li>
              <li>Review both QA POC and DEV POC assignments</li>
              <li>Click <strong>"Generate Mail"</strong> to create the communication</li>
            </ul>
            <div className="success-box-modern">
              <div className="success-icon">✅</div>
              <p><strong>Ready to Generate:</strong> The system will create a professional email with all the context!</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/poc_3.png`} alt="More Details Modal" />
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">4</div>
          <div className="step-header-content">
            <h3>Send and Forward Ticket</h3>
            <p className="step-subtitle">Validate response and assign to POC</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p><strong>Validate and Send Response:</strong></p>
            <ul>
              <li>Review the generated response carefully</li>
              <li>Ensure all details are accurate and complete</li>
              <li>Click <strong>"Send"</strong> to send the response and notify POCs</li>
            </ul>
            <p><strong>Assign Ticket to POC:</strong></p>
            <p>Once you click Send, a popup appears with forwarding options:</p>
            <ul>
              <li><strong>"Forward QA POC"</strong> - Assigns the ticket to QA for testing and validation</li>
              <li><strong>"Forward DEV POC"</strong> - Assigns the ticket to Development team for fixing</li>
              <li><strong>"Close"</strong> - Cancel the forwarding action</li>
            </ul>
            <div className="tip-box-modern">
              <div className="tip-icon">🎯</div>
              <p><strong>Choose Wisely:</strong> Forward to QA if testing is needed, or to DEV if code changes are required.</p>
            </div>
            <p>Select the appropriate POC to forward the ticket, and it will be assigned to their queue.</p>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/poc_4.png`} alt="Forward Ticket Popup" />
          </div>
        </div>
      </div>

      <div className="modern-step">
        <div className="step-header">
          <div className="step-number-modern">5</div>
          <div className="step-header-content">
            <h3>SME Validation and Confirmation</h3>
            <p className="step-subtitle">Review and validate POC flow data</p>
          </div>
        </div>
        <div className="step-body">
          <div className="step-content-modern">
            <p><strong>SME Reviews POC Flow Data:</strong></p>
            <p>The ticket appears in the SME's "Send QA - POC Flow Data" section:</p>
            <ul>
              <li>SME can see all ticket details in a comprehensive table</li>
              <li>View <strong>DEV POC DETAILS</strong> (name, email, feature)</li>
              <li>Check <strong>"WHERE STUCK"</strong> problem description</li>
              <li>Review <strong>"CURRENT STATUS"</strong> of the issue</li>
              <li>See the <strong>"LLM RESPONSE"</strong> generated by AI</li>
              <li>Check <strong>"GENERATED TIME"</strong> timestamp</li>
            </ul>
            <p><strong>Validate and Confirm:</strong></p>
            <ul>
              <li>Review the <strong>"VALIDATE"</strong> dropdown (shows "No" initially)</li>
              <li>Check if all information is accurate and complete</li>
              <li>Verify the <strong>"TICKET STATUS"</strong> is correct (Open/Closed)</li>
              <li>If everything is correct, click the <strong>"Confirm"</strong> button</li>
            </ul>
            <div className="success-box-modern">
              <div className="success-icon">🎉</div>
              <p><strong>Validation Complete:</strong> Once confirmed, the ticket is officially assigned to the POC!</p>
            </div>
            <p><strong>Future Reference for Similar Issues:</strong></p>
            <ul>
              <li>When the same issue is found again, the system references this validated response</li>
              <li>Articles are created based on confirmed POC flows</li>
              <li>Similar to the New Response flow, validated tickets become reusable templates</li>
            </ul>
            <div className="tip-box-modern">
              <div className="tip-icon">📚</div>
              <p><strong>Knowledge Base Growth:</strong> Each validated POC flow enriches the system's knowledge base!</p>
            </div>
          </div>
          <div className="step-image-modern">
            <img src={`${process.env.PUBLIC_URL}/images/poc_5.png`} alt="SME Validation Dashboard" />
          </div>
        </div>
      </div>

      <div className="troubleshooting-section-modern">
        <div className="section-header-modern">
          <h3>Troubleshooting & Best Practices</h3>
        </div>
        <div className="troubleshooting-grid-modern">
          <div className="trouble-card">
            <div className="trouble-icon">👥</div>
            <h4>Wrong POC Selected</h4>
            <p>If AI selects the wrong POC, manually override the selection in the More Details modal before generating the mail.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">📧</div>
            <h4>POC Not Receiving Emails</h4>
            <p>Verify the email address is correct in the QA POC setup. Check spam folders and email deliverability.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🔄</div>
            <h4>Ticket Status Not Updating</h4>
            <p>Ensure SME clicks "Confirm" after validation. Check network connection and refresh the page.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">✍️</div>
            <h4>Incomplete Information</h4>
            <p>Always fill "Where are you stuck?" and "Current status" completely for better AI response generation.</p>
          </div>
        </div>
      </div>

      <div className="success-box-modern">
        <div className="success-icon">🎉</div>
        <p><strong>Process Complete!</strong> You now understand the complete QA-POC flow from setup to SME validation. This workflow ensures efficient communication and knowledge building across your support, QA, and development teams!</p>
      </div>
    </div>
  );
};

export default QAPOCTutorial;

