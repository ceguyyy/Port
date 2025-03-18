import React from 'react';

const EnhancedSecurity = ({ className }) => {
  return (
    <div className={`enhanced-security ${className}`}>
      <div className="icon">
        {/* SVG remains the same */}
      </div>
      <div className="text">
        <h2>Enhanced Security</h2>
        <p>Our state-of-the-art software offers peace of mind through strict security measures.</p>
      </div>
      <button className="learn-more">Learn more</button>
    </div>
  );
};

export default EnhancedSecurity;