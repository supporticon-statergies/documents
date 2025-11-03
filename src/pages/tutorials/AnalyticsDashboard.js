import React from 'react';

const AnalyticsDashboard = () => {
  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>Analytics Dashboard - Track HelpDude Performance</h2>
        <p className="intro-text">
          The Analytics Dashboard provides comprehensive insights into how agents are using HelpDude, 
          response efficiency, and overall performance metrics. Monitor agent productivity and optimize 
          your support workflow with detailed analytics and reporting.
        </p>
      </div>

      <div className="prerequisites-section">
        <h3>📋 Key Metrics Tracked</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Total agent responses from Freshdesk API</span>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Direct HelpDude usage (without "New")</span>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>HelpDude-assisted responses (with "New")</span>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Average response time analysis</span>
          </div>
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Detailed response breakdown by ticket</span>
          </div>
        </div>
      </div>

      <div className="steps-container">
        {/* Step 1 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">01</div>
            <div className="step-header-content">
              <h3 className="step-title">Select Date Range for Analysis</h3>
              <p className="step-subtitle">Filter analytics data by custom time period</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                
                <li>Set your <strong>From Date</strong> to define the start of your analysis period</li>
                <li>Set your <strong>To Date</strong> to define the end of your analysis period</li>
                <li>Click <strong>Apply Filter</strong> to update the dashboard</li>
                <li>The dashboard will refresh with data for your selected period</li>
              </ol>
              <div className="tip-box-modern">
                <span className="tip-icon">💡</span>
                <span><strong>Tip:</strong> Use different date ranges to compare performance across weeks, months, or quarters.</span>
              </div>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/images/analytic_1.png`} alt="Date Range Selection" />
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">02</div>
            <div className="step-header-content">
              <h3 className="step-title">Analyze Visual Insights</h3>
              <p className="step-subtitle">Understand usage trends with interactive charts</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <p>The Visual Insights chart displays two key trend lines:</p>
              <ul>
                <li><strong style={{color: '#60a5fa'}}>Direct Usage (Blue Line):</strong> Responses where agents used HelpDude drafts WITHOUT clicking "New" checkbox</li>
                <li><strong style={{color: '#34d399'}}>With "New" Checkbox (Green Line):</strong> Responses where agents used HelpDude WITH the "New" checkbox enabled</li>
              </ul>
              <p><strong>How to Interpret:</strong></p>
              <ul>
                <li>Higher blue line = Agents trust and use generated responses directly</li>
                <li>Higher green line = Agents prefer to generate new responses</li>
                <li>Track daily trends to identify patterns and training opportunities</li>
              </ul>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/images/analytic_2.png`} alt="Visual Insights Chart" />
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">03</div>
            <div className="step-header-content">
              <h3 className="step-title">Review Performance Metrics</h3>
              <p className="step-subtitle">Monitor key performance indicators at a glance</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <h4>📊 Total Responses (Freshdesk)</h4>
              <p>Shows the total number of agent responses retrieved from Freshdesk API during the selected period. This includes all agent replies, regardless of HelpDude usage.</p>
              
              <h4>📄 Direct HelpDude Response %</h4>
              <p><strong>Formula:</strong> <code>(HelpDude-Assisted ÷ Total Responses) × 100</code></p>
              <p>Measures how often agents use HelpDude-generated drafts directly without clicking "New". Higher percentage indicates strong confidence in automated responses.</p>
              
              <h4>🚀 HelpDude Touchpoint %</h4>
              <p><strong>Formula:</strong> <code>(HelpDude-Used + HelpDude-Assisted) ÷ Total Responses × 100</code></p>
              <p>Shows overall HelpDude engagement. This includes all interactions whether agents used "New" or not. Can exceed 100% if agents generate multiple drafts per response.</p>
              
              <h4>⏰ Average Response Time</h4>
              <p>Compares the average time agents spend on responses:</p>
              <ul>
                <li><strong>Direct Draft:</strong> Time taken when using HelpDude directly</li>
                <li><strong>"New" Flow:</strong> Time taken when regenerating responses</li>
              </ul>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/images/analytic_3.png`} alt="Performance Metrics" />
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">04</div>
            <div className="step-header-content">
              <h3 className="step-title">Explore Response Details</h3>
              <p className="step-subtitle">Drill down into individual response data</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>Scroll to the <strong>Response Details</strong> section at the bottom</li>
                <li>Use the <strong>Search Bar</strong> to find specific tickets by ID or description</li>
                <li>Review the table columns:
                  <ul>
                    <li><strong>Ticket ID:</strong> Freshdesk ticket identifier</li>
                    <li><strong>Description:</strong> Brief summary of the ticket</li>
                    <li><strong>Response Type:</strong> Shows if agent used "NEW CHECKBOX" or "DIRECT (NO 'NEW')"</li>
                    <li><strong>Solution:</strong> Preview of the response provided</li>
                    <li><strong>Time Spent:</strong> Duration in MM:SS format</li>
                    <li><strong>Timestamp:</strong> When the response was created (IST timezone)</li>
                  </ul>
                </li>
                <li>Click <strong>Export CSV</strong> to download the full report for external analysis</li>
                <li>Use the sortable columns to organize data by any field</li>
              </ol>
              <div className="tip-box-modern">
                <span className="tip-icon">💡</span>
                <span><strong>Tip:</strong> Export CSV data for deeper analysis in Excel or integrate with your BI tools.</span>
              </div>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/images/analytic_4.png`} alt="Response Details Table" />
            </div>
          </div>
        </div>
      </div>

      {/* Understanding Formulas Section */}
      <div className="troubleshooting-section-modern">
        <div className="section-header-modern">
          <h3>🧮 Understanding the Formulas</h3>
          <p>Learn how metrics are calculated</p>
        </div>
        <div className="troubleshooting-grid-modern">
          <div className="trouble-card">
            <div className="trouble-icon">📊</div>
            <h4>Direct HelpDude Response %</h4>
            <p><strong>Formula:</strong> (HelpDude-Assisted ÷ Total Responses) × 100</p>
            <p><strong>Example:</strong> If 50 responses used HelpDude directly out of 200 total: (50 ÷ 200) × 100 = <strong>25%</strong></p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🎯</div>
            <h4>HelpDude Touchpoint %</h4>
            <p><strong>Formula:</strong> (HelpDude-Used + HelpDude-Assisted) ÷ Total Responses × 100</p>
            <p><strong>Example:</strong> If 30 used "New" + 50 used directly out of 200 total: (30 + 50) ÷ 200 × 100 = <strong>40%</strong></p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">📈</div>
            <h4>Why Touchpoint % Can Exceed 100%</h4>
            <p>If agents generate multiple HelpDude drafts for a single response (e.g., trying different approaches), the touchpoint count can exceed the total response count, resulting in >100%.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">⏱️</div>
            <h4>Response Time Calculation</h4>
            <p>Tracks the time from when HelpDude generates a draft to when the agent submits the response. Excludes time spent reading tickets or researching.</p>
          </div>
        </div>
      </div>

      {/* Best Practices Section */}
      <div className="troubleshooting-section-modern">
        <div className="section-header-modern">
          <h3>💡 Best Practices & Insights</h3>
          <p>Maximize the value of your analytics</p>
        </div>
        <div className="troubleshooting-grid-modern">
          <div className="trouble-card">
            <div className="trouble-icon">📅</div>
            <h4>Regular Monitoring</h4>
            <p>Check analytics weekly to identify trends early. Compare week-over-week performance to measure improvement.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🎓</div>
            <h4>Training Opportunities</h4>
            <p>Low Direct Response % may indicate agents need training on trusting HelpDude suggestions or that response quality needs improvement.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">⚡</div>
            <h4>Efficiency Gains</h4>
            <p>Compare Average Response Time between direct and "New" flows. Lower times with direct usage demonstrate HelpDude's efficiency benefits.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">📊</div>
            <h4>Data-Driven Decisions</h4>
            <p>Use CSV exports to combine with other business metrics. Share reports with stakeholders to demonstrate ROI and adoption rates.</p>
          </div>
          <div className="trouble-card">
            <div className="trouble-icon">🔍</div>
            <h4>Identify Patterns</h4>
            <p>Look for spikes or dips in the Visual Insights chart. These may correlate with training sessions, product updates, or seasonal support trends.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;

