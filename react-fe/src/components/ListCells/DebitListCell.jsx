import React from 'react';
import './DebitListCell.scss';

const DebitListCell = (prop) => {
  return (
    <li id="debit-cell">
      <div className="debit-name-container">
        <div className="debit-name-title">Debit Card</div>
        <div className="debit-name">{prop.name}</div>
      </div>
      <div className="debit-available-container">
        <div className="debit-available-title">Available</div>
        <div className="debit-available">${prop.available}</div>
      </div>
    </li>
  )
  }
  
  export default DebitListCell