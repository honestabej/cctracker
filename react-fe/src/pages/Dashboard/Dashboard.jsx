import React, {useEffect, forwardRef, useState} from 'react';
import './Dashboard.scss';
import HeaderLogin from '../../components/Header/HeaderLogin';
import PurchaseListCell from '../../components/ListCells/PurchaseListCell';
import CreditListCell from '../../components/ListCells/CreditListCell';
import DebitListCell from '../../components/ListCells/DebitListCell';
import AddPurchase from '../../components/AddPurchase/AddPurchase';
import AddCard from '../../components/AddCard/AddCard';

export default function Dashboard() {
  const [purchaseIsOpen, purchaseSetOpen] = useState(false);
  const [cardIsOpen, cardSetOpen] = useState(false); 

  const sendDataToParent = (index) => { // the callback. Use a better name
    purchaseSetOpen(index);
    cardSetOpen(index);
  };

  return(
    <div className="dashboard-page-container">
      <HeaderLogin currentPage="Dashboard"/>
      <div className="dashboard-page-wrapper">
        <div className="purchases-col">
          <div className="graph">

          </div>
          <div className="under-graph-text">
            <div className="amt-left"><span>$XXX.XX</span> remaining</div>
            <div className="days-left"><span>XX</span> days left</div>
          </div>
          <div className="purchase-list">
            <div className="purchase-title"> Cycle Purchases </div>
            <ul>
              {/* <PurchaseListCell title="Safeway" amt="36.83" date="6/19/2022" /> */}
            </ul>
          </div>
        </div>
        <div className="cards-col">
          <div className="cards-title">My Cards: </div>
          <ul>
            {/* <CreditListCell name="Abe's Discover" outstanding="96.24" available="4903.76" /> */}
            <li id="add-new" onClick={() => cardSetOpen(true)}>
              <i class="fa-solid fa-plus" />
            </li>
          </ul>
        </div>
        <button className="add-purchase-btn" onClick={() => {purchaseSetOpen(true)}}>
          <i class="fa-solid fa-plus" /> Purchase
        </button>
      </div>
      {purchaseIsOpen ? <AddPurchase sendDataToParent={sendDataToParent}/> : ""}
      {cardIsOpen ? <AddCard sendDataToParent={sendDataToParent}/> : ""}
    </div>
  );
}