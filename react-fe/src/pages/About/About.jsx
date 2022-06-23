import React from 'react';
import './About.scss';
import PurchaseListCell from '../../components/ListCells/PurchaseListCell';
import CreditListCell from '../../components/ListCells/CreditListCell';
import DebitListCell from '../../components/ListCells/DebitListCell';

export default function About() {
  return(
    <div className="about-page-container">
      <h2>About</h2>
      <ul>
        <PurchaseListCell />
        <CreditListCell />
        <DebitListCell />
      </ul>
    </div>
  );
}


