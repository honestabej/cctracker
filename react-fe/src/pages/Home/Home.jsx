import React, { useState } from 'react';
import './Home.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="home-container">
      <div className="main-container">
        <div className="row">
          <div className="col-lg-6 uno">
            UNO
          </div>
          <div className="col-lg-6 dos">
            DOS
          </div>
        </div>
      </div>
      <div className="about-container">
        
      </div>
    </div>
  )
}

export default Home