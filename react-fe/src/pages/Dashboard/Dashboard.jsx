import React from 'react';
import './Dashboard.scss';
import HeaderLogin from '../../components/Header/HeaderLogin';
import InputBox from './../../components/InputBox/InputBox';

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
              <li>
                <div className="title-amt">
                  <div className="title">TITLE <br /> CONTINUED</div>
                  <div className="amt">$XXXX.XX</div>
                </div>
                <div className="date">
                  <span>XX/XX/XXXX</span>
                </div>
              </li>
              <li>
                <div className="title-amt">
                  <div className="title">TITLE <br /> CONTINUED</div>
                  <div className="amt">$XXXX.XX</div>
                </div>
                <div className="date">
                  <span>XX/XX/XXXX</span>
                </div>
              </li>
              <li>
                <div className="title-amt">
                  <div className="title">TITLE <br /> CONTINUED</div>
                  <div className="amt">$XXXX.XX</div>
                </div>
                <div className="date">
                  <span>XX/XX/XXXX</span>
                </div>
              </li>
              <li>
                <div className="title-amt">
                  <div className="title">TITLE <br /> CONTINUED</div>
                  <div className="amt">$XXXX.XX</div>
                </div>
                <div className="date">
                  <span>XX/XX/XXXX</span>
                </div>
              </li>
              <li>
                <div className="title-amt">
                  <div className="title">TITLE <br /> CONTINUED</div>
                  <div className="amt">$XXXX.XX</div>
                </div>
                <div className="date">
                  <span>XX/XX/XXXX</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="cards-col">
          <div className="cards-title">My Cards: </div>
          <ul>
            <li id="credit">
              
            </li>

            <li id="add-new">
              <i class="fa-solid fa-plus" />
            </li>
          </ul>
        </div>
      </div>
    </div>
         
  );
}