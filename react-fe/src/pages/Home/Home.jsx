import React, { useState } from 'react';
import './Home.scss';
import WorldVid from './../../images/home-globe.mp4';

function Home() {
  return (
    <div className="home-container">
      <div className="main-container">
        <div className="row">
          <div className="col-lg-5 text-view">
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
          <div className="col-lg-7 pic-view">
            <div className="night-container">
              <div class="night">
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
                <div class="shooting_star"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-container">
        Down here
        <br />
        <br />
      </div>
    </div>
  )
}

export default Home