# Help Dude Application - Supporticon

A modern, responsive React web application for configuring Help Desk integrations with Freshdesk, Zoho, and Zendesk platforms.

## Features

- 🎨 Modern UI with vibrant theme colors from Supporticon branding
- 📱 Fully responsive design for mobile, tablet, and desktop
- 🚀 Built with React 18 and React Router
- 🎯 Interactive navigation with dropdown menus
- ⚡ Fast and optimized performance
- 🌐 GitHub Pages deployment ready

## Integration Options

### Freshdesk Integration
- Custom Application Integration
- Login
- KB Docs
- Internal Article
- KT Article
- QA POC
- DEV POC
- New Response
- Sent QA
- Closed Ticket
- Admin

### Zoho Integration
- Custom Application Integration
- Login
- KB Docs
- Internal Article
- KT Article
- QA POC
- DEV POC
- New Response
- Sent QA
- Closed Ticket
- Admin

### Zendesk Integration
- Custom Application Integration
- Login
- KB Docs
- Internal Article
- KT Article
- QA POC
- DEV POC
- New Response
- Sent QA
- Closed Ticket
- Admin

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- Git

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/help-dude-application.git
cd help-dude-application
```

2. Install dependencies:
```bash
npm install
```

## Running Locally

To run the application in development mode:

```bash
npm start
```

This will start the development server at `http://localhost:3000`. The page will reload automatically when you make changes.

## Building for Production

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Deploying to GitHub Pages

### Step 1: Update package.json

Open `package.json` and update the `homepage` field with your GitHub username and repository name:

```json
"homepage": "https://yourusername.github.io/help-dude-application"
```

### Step 2: Create GitHub Repository

1. Go to GitHub and create a new repository named `help-dude-application`
2. Don't initialize it with README, .gitignore, or license

### Step 3: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit"

# Add remote repository
git remote add origin https://github.com/yourusername/help-dude-application.git

# Push to main branch
git branch -M main
git push -u origin main
```

### Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build the production version
2. Create/update the `gh-pages` branch
3. Deploy the build folder to GitHub Pages

### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings"
3. Scroll down to "Pages" section
4. Under "Source", select `gh-pages` branch
5. Click "Save"

Your site will be published at: `https://yourusername.github.io/help-dude-application`

## Project Structure

```
help-dude-application/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Home.css
│   │   ├── FreshdeskPage.js
│   │   ├── ZohoPage.js
│   │   ├── ZendeskPage.js
│   │   └── IntegrationPage.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md
```

## Customization

### Changing Colors

The theme colors are defined in `src/index.css` using CSS variables:

```css
:root {
  --primary-yellow: #FFD700;
  --primary-cyan: #00D4FF;
  --primary-green: #7FFF00;
  --primary-red: #FF3333;
  --primary-orange: #FF8C00;
}
```

### Adding New Integration Options

To add new options to any integration dropdown:

1. Open `src/components/Navbar.js`
2. Find the appropriate options array (e.g., `freshdeskOptions`)
3. Add your new option:

```javascript
{ name: 'Your New Option', path: '/freshdesk/your-new-option' }
```

## Technologies Used

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **CSS3** - Styling with modern features
- **Google Fonts (Inter)** - Typography

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Deployment Issues

If you encounter issues during deployment:

1. Make sure you've updated the `homepage` field in `package.json`
2. Ensure you have `gh-pages` installed: `npm install --save-dev gh-pages`
3. Check that you have push access to the repository
4. Try clearing npm cache: `npm cache clean --force`

### Build Errors

If you get build errors:

1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Try `npm run build` again

### Routing Issues on GitHub Pages

If routes don't work after deployment:

1. Make sure you're using `HashRouter` instead of `BrowserRouter` in `App.js`, or
2. Add a 404.html file that redirects to index.html

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Support

For support, email support@supporticon.com or open an issue in the GitHub repository.

## Acknowledgments

- Design inspired by Supporticon branding
- Built with modern web development best practices
- Icons from custom SVG designs

---

Made with ❤️ by Supporticon Team

