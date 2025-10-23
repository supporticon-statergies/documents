import React from 'react';

const ComingSoon = ({ featureName }) => {
  return (
    <div className="coming-soon-container">
      <div className="coming-soon-icon">🚀</div>
      <h2 className="coming-soon-title">Coming Soon</h2>
      <p className="coming-soon-text">
        This feature is currently under development and will be available soon.
      </p>
      <div className="coming-soon-description">
        <p>We're working hard to bring you <strong>{featureName}</strong> for Freshdesk integration.</p>
        <p>Stay tuned for updates!</p>
      </div>
    </div>
  );
};

export default ComingSoon;

