import React from 'react';
import InputBox from './../../components/InputBox/InputBox';

export default function Dashboard() {
  return(
    <>
      <h2>Dashboard</h2>
      <div style={{width: '400px'}}>
        <InputBox icon="fa-solid fa-bars" placeholder="E-Mail" placeholderColor="placeholder white-ph" cutType="cut white-bg email" />
      </div>
      
    </>
  );
}