import React from 'react';
import './PurchaseListCell.scss';

const PurchaseListCell = (prop) => {
  return (
    <li id="purchase-cell">
      <div className="title-amt">
        <div className="title">{prop.title}</div>
        <div className="amt">${prop.amt}</div>
      </div>
      <div className="date">
        <span>{prop.date}</span>
      </div>
    </li>
  )
  }
  
  export default PurchaseListCell