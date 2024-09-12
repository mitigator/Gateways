import React from 'react';
import '../css/card.css';

const CardFlip = () => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <p>Front Side</p>
        </div>
        <div className="card-back">
          <p>Back Side</p>
        </div>
      </div>
    </div>
  );
};

export default CardFlip;
