# Tutorial Components

This directory contains modular tutorial components for each integration platform (Freshdesk, Zoho, Zendesk).

## 📁 Structure

```
tutorials/
├── README.md                    # This file
├── ComingSoon.js               # Default component for features under development
├── CustomAppIntegration.js     # Freshdesk custom app installation tutorial
├── LoginTutorial.js            # Freshdesk login and setup tutorial
└── (Add more tutorial files here)
```

## ✨ How to Add a New Feature/Tutorial

### Step 1: Create a New Tutorial Component

Create a new file in this directory (e.g., `KBDocsTutorial.js`):

```javascript
import React from 'react';

const KBDocsTutorial = () => {
  return (
    <div className="tutorial-content">
      <div className="tutorial-intro">
        <h2>Your Tutorial Title</h2>
        <p className="intro-text">
          Brief description of what this tutorial covers.
        </p>
      </div>

      <div className="prerequisites-section">
        <h3>📋 Prerequisites</h3>
        <div className="checklist-grid">
          <div className="checklist-item">
            <span className="check-icon">✓</span>
            <span>Prerequisite 1</span>
          </div>
          {/* Add more prerequisites */}
        </div>
      </div>

      <div className="steps-container">
        {/* Add your steps here */}
        <div className="tutorial-step modern-step">
          <div className="step-header">
            <div className="step-number-modern">01</div>
            <div className="step-header-content">
              <h3 className="step-title">Step Title</h3>
              <p className="step-subtitle">Step subtitle</p>
            </div>
          </div>
          <div className="step-body">
            <div className="step-content-modern">
              <ol>
                <li>Instruction 1</li>
                <li>Instruction 2</li>
              </ol>
            </div>
            <div className="step-image-modern">
              <img src={`${process.env.PUBLIC_URL}/images/your-image.png`} alt="Description" />
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Troubleshooting Section */}
      <div className="troubleshooting-section-modern">
        <div className="section-header-modern">
          <h3>🔧 Troubleshooting</h3>
          <p>Quick solutions to common problems</p>
        </div>
        <div className="troubleshooting-grid-modern">
          <div className="trouble-card">
            <div className="trouble-icon">⚠️</div>
            <h4>Problem Title</h4>
            <p>Solution description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KBDocsTutorial;
```

### Step 2: Import the Component

Open the appropriate page file (`FreshdeskPage.js`, `ZohoPage.js`, or `ZendeskPage.js`) and import your new component:

```javascript
import KBDocsTutorial from './tutorials/KBDocsTutorial';
```

### Step 3: Add to Switch/Case

In the `renderContent()` function, add a new case for your feature:

**For FreshdeskPage.js:**
```javascript
const renderContent = () => {
  switch(option) {
    case 'custom-app-integration':
      return <CustomAppIntegration />;
    case 'login':
      return <LoginTutorial />;
    case 'kb-docs':  // Add this
      return <KBDocsTutorial />;  // Add this
    default:
      return <ComingSoon featureName={getTitle()} />;
  }
};
```

### Step 4: (Optional) Remove Header for Clean Look

If you want your tutorial to display without the page header (like Custom App Integration and Login), update the `shouldShowHeader()` function:

```javascript
const shouldShowHeader = () => {
  return option !== 'custom-app-integration' 
      && option !== 'login' 
      && option !== 'kb-docs';  // Add your feature here
};
```

## 🎨 Available CSS Classes

### Layout Components
- `.tutorial-content` - Main container
- `.tutorial-intro` - Introduction section
- `.prerequisites-section` - Prerequisites box
- `.steps-container` - Steps wrapper
- `.troubleshooting-section-modern` - Troubleshooting section

### Step Components
- `.tutorial-step.modern-step` - Individual step container
- `.step-header` - Step header area
- `.step-number-modern` - Large gradient step number (01, 02, etc.)
- `.step-title` - Step title text
- `.step-subtitle` - Step subtitle text
- `.step-body` - Step content area (split-screen layout)
- `.step-content-modern` - Left side content
- `.step-image-modern` - Right side images

### Alert Boxes
- `.tip-box-modern` - Yellow tip box with icon
- `.success-box-modern` - Green success box with icon

### Checklist
- `.checklist-grid` - Grid layout for prerequisites
- `.checklist-item` - Individual checklist item
- `.check-icon` - Checkmark icon

### Troubleshooting
- `.troubleshooting-grid-modern` - Grid for trouble cards
- `.trouble-card` - Individual trouble card
- `.trouble-icon` - Emoji icon for trouble card

## 📸 Image Best Practices

1. **Store images** in `public/images/` folder
2. **Reference images** using: `${process.env.PUBLIC_URL}/images/your-image.png`
3. **Name images descriptively**: e.g., `setup_1.png`, `login_form.png`
4. **Optimize images** before adding (compress for web)

## 🚀 Quick Example

See `CustomAppIntegration.js` or `LoginTutorial.js` for complete working examples with all features:
- Prerequisites section
- Multiple steps with images
- Tip boxes and success boxes
- Troubleshooting cards
- Responsive layout

## 📝 Notes

- All tutorial components automatically get the modern split-screen layout
- Images on the right are sticky on desktop (scroll with content)
- Everything is fully responsive for mobile devices
- Use consistent step numbering format (01, 02, 03, etc.)
- Keep step titles concise and actionable
- Add troubleshooting for common issues

## 🎯 Feature Status Tracking

| Feature | Freshdesk | Zoho | Zendesk |
|---------|-----------|------|---------|
| Custom App Integration | ✅ Done | 🚧 Coming Soon | 🚧 Coming Soon |
| Login | ✅ Done | 🚧 Coming Soon | 🚧 Coming Soon |
| KB Docs | 🚧 Coming Soon | 🚧 Coming Soon | 🚧 Coming Soon |
| Internal Article | 🚧 Coming Soon | 🚧 Coming Soon | 🚧 Coming Soon |
| KT Article | 🚧 Coming Soon | 🚧 Coming Soon | 🚧 Coming Soon |
| QA POC | 🚧 Coming Soon | 🚧 Coming Soon | 🚧 Coming Soon |
| DEV POC | 🚧 Coming Soon | 🚧 Coming Soon | 🚧 Coming Soon |
| New Response | 🚧 Coming Soon | 🚧 Coming Soon | 🚧 Coming Soon |
| Sent QA | 🚧 Coming Soon | 🚧 Coming Soon | 🚧 Coming Soon |
| Closed Ticket | 🚧 Coming Soon | 🚧 Coming Soon | 🚧 Coming Soon |
| Admin | 🚧 Coming Soon | 🚧 Coming Soon | 🚧 Coming Soon |

Update this table as you add new features!

