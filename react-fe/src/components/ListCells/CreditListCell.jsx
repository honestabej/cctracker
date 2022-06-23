import React from 'react';
import './CreditListCell.scss';

const CreditListCell = (prop) => {
  return (
    <li id="credit-cell">
      <div className="credit-name-container">
        <div className="credit-name-title">Credit Card</div>
        <div className="credit-name">{prop.name}</div>
      </div>
      <div className="credit-outstanding-container">
        <div className="credit-outstanding-title">Outstanding</div>
        <div className="credit-outstanding">${prop.outstanding}</div>
      </div>
      <div className="credit-available-container">
        <div className="credit-available-title">Available</div>
        <div className="credit-available">${prop.available}</div>
      </div>
    </li>
  )
  }
  
  export default CreditListCell