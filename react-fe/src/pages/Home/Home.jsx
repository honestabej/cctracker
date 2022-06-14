import React, { useState } from 'react';
import './Home.scss';
import Test from './../../images/HomeImg.png';

function Home() {
  return (
    <div className="home-container">
      <div className="main-container">
        <div className="home-row">
          <div className="text-view">
            <div className="main">
              This will be the main title text area
            </div>
            
            <div className="sub">
              This will be the sub text area
            </div>
            <div className="signup">
              <form action="#">
                <div className="home-input-container">
                  <input class="home-input" type="text" placeholder=" " required />
                  <div class="home-cut home-email"></div>
                  <label class="placeholder">E-Mail</label>
                  <input class="home-signin-btn" type="submit" value="Login" />
                </div>
              </form>
            </div>
          </div>
          <div className="pic-view">
            <img class="pic" src={Test} />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Home