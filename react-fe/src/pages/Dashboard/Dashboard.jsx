import React from 'react';
import './Dashboard.scss';
import InputBox from './../../components/InputBox/InputBox';

export default function Dashboard() {
  return(
    <div className="dashboard-page-container">
      <h2>Dashboard</h2>
      <div className="d-container">
        <div className="d-input-wrapper">
          <InputBox icon="fa-solid fa-envelope" type="text" placeholder="E-Mail" placeholderColor="placeholder black-ph" cutType="cut black-bg email" />
        </div>
        <div className="d-btn-wrapper">
          <button>Test</button>
        </div>
      </div>
    </div>
         
  );
}