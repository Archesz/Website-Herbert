import React, { useState } from 'react';

function Card({ title, content, number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCard = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`card-container ${isExpanded ? 'expanded' : ''}`} onClick={toggleCard}>
      <div className="card-header">
        <span className="card-number">{number}</span>
        <span className="card-title">{title}</span>
        <button className="toggle-button">{isExpanded ? '−' : '+'}</button>
      </div>
      {isExpanded && (
        <div className="card-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

export default Card;
