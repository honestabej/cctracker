import React from 'react';
import './Dashboard.scss';
import HeaderLogin from '../../components/Header/HeaderLogin';
import InputBox from './../../components/InputBox/InputBox';
import PurchaseListCell from '../../components/ListCells/PurchaseListCell';
import CreditListCell from '../../components/ListCells/CreditListCell';
import DebitListCell from '../../components/ListCells/DebitListCell';

export default function Dashboard() {
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
              <PurchaseListCell title="Safeway" amt="36.83" date="6/19/2022" />
              <PurchaseListCell title="A really long title for a purchase to test it" amt="1324.82" date="6/18/2022" />
              <PurchaseListCell title="Gas" amt="102.49" date="6/18/2022" />
              <PurchaseListCell title="McDonalds" amt="12.18" date="6/15/2022" />
              <PurchaseListCell title="Target" amt="5.68" date="6/10/2022" />
              <PurchaseListCell title="Safeway" amt="92.63" date="6/10/2022" />
            </ul>
          </div>
        </div>
        <div className="cards-col">
          <div className="cards-title">My Cards: </div>
          <ul>
            <CreditListCell name="Abe's Discover" outstanding="96.24" available="4903.76" />
            <CreditListCell name="Shae's AMEX" outstanding="1024.08" available="3975.92"/>
            <DebitListCell name="Abe's Debit" available="458.97" />
            <DebitListCell name="Abe and Shae Debit" available="1452.98" />
            <DebitListCell name="Shae's Debit" available="398.74" />

            <li id="add-new">
              <i class="fa-solid fa-plus" />
            </li>
          </ul>
        </div>
      </div>
    </div>
         
  );
}