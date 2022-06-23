import React from 'react';
import './PurchaseListCell.scss';

const PurchaseListCell = (prop) => {
  return (
    <li id="purchase-cell">
      <div className="title-amt">
        <div className="title">TITLE <br /> CONTINUED</div>
        <div className="amt">$XXXX.XX</div>
      </div>
      <div className="date">
        <span>XX/XX/XXXX</span>
      </div>
    </li>
  )
  }
  
  export default PurchaseListCell