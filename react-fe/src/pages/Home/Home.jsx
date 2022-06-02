import React, { useState } from 'react';
import './Home.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <>
      <div className="bg">
        <div className="home-text-area">
          <div className="home-text-main">
            Start letting your credit build itself
          </div>
          <div className="home-text-sub">
            Budget your money while you build your credit
          </div>
          <div className="home-btn">
            <button className="btn-style">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
      <div className="about">

      </div>
    </>
  )
}

export default Home