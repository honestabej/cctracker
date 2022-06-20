import React, { useState } from 'react';
import './Home.scss';
import HomeImg from './../../images/HomeImg.png';
import Header from './../../components/Header/Header';
import InputBox from '../../components/InputBox/InputBox';

function Home() {
  return (
    <div className="home-page-container">
      <Header logo="BlackLogo" fontColor="header-nav black-font"/>
      <div className="home-row">
        <div className="home-text-col">
          <div className="home-main-text">
            Build a budget while building your credit
          </div>
          <div className="home-sub-text">
            Managing a budget with multiple cards and accounts can be tough. 
            Let us do the managing so you can feel responsible doing the spending.
          </div>
          <div className="home-signup-wrapper">
            <form action="#">
              <div className="home-signup-input-container">
                <InputBox icon="fa-solid fa-envelope" type="text" placeholder="E-Mail" placeholderColor="placeholder black-ph" cutType="cut white-bg email" />
              </div>
            </form>
          </div>
        </div>
        <div className="home-pic-col">
          <img class="home-pic" src={HomeImg} />
        </div>
      </div>
    </div>
  )
}

export default Home