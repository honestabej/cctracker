import React, { useState } from 'react';
import './Home.scss';
import HomeImg from './../../images/HomeImg.png';
import Header from './../../components/Header/Header';

function Home() {
  return (
    <div className="home-container">
      <Header />
      <div className="home-row">
        <div className="text-col">
          <div className="main-text">
            Build a budget while building your credit
          </div>
          <div className="sub-text">
            Managing a budget with multiple cards and accounts can be tough. 
            Let us do the managing so you can feel responsible doing the spending.
          </div>
          <div className="signup-wrapper">
            <input class="signup-input" type="text" placeholder=" " required />
            <div class="signup-cut"></div>
            <label class="placeholder">E-Mail</label>
            <input class="signup-btn" type="submit" value="Signup" />
          </div>
        </div>
        <div className="pic-col">
          <img class="pic" src={HomeImg} />
        </div>
      </div>
    </div>
  )
}

export default Home