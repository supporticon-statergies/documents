import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import FreshdeskPage from './pages/FreshdeskPage';
import ZohoPage from './pages/ZohoPage';
import ZendeskPage from './pages/ZendeskPage';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/freshdesk/:option" element={<FreshdeskPage />} />
          <Route path="/zoho/:option" element={<ZohoPage />} />
          <Route path="/zendesk/:option" element={<ZendeskPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

