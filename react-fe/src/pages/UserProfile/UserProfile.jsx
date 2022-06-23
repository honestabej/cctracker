import React, { useState, forwardRef } from 'react';
import './UserProfile.scss';
import HeaderLogin from '../../components/Header/HeaderLogin';
import InputBox from '../../components/InputBox/InputBox';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UserProfile = (prop) => {
  const [startDate, setStartDate] = useState(new Date());
  
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="cycle-calendar-btn" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div className="user-page-container">
      <HeaderLogin currentPage="UserProfile"/>
      <div className="user-page-wrapper">
        <div className="user-settings-container">
          <div className="user-settings">
            <div className="profile-picture-container">
              <div className="profile-picture"></div>
            </div>
            <div className="user-info-container">
              <div className="user-info">
                Email: <a href=""> <span>example@g.com</span> <i class="fa-solid fa-square-arrow-up-right" /></a>
              </div>
              <div className="user-info">
                Password: <a href="">Change <i class="fa-solid fa-square-arrow-up-right" /></a>
              </div>
            </div>
          </div>
          <div className="user-logout-btn">
            <button>Log Out</button>
          </div>
        </div>
        <div className="cycle-settings-container">
          <div className="cycle-title">
            Cycle Settings
          </div>
          <div className="cycle-input-container">
            <div className="cycle-input">
              <InputBox icon="fa-solid fa-dollar-sign" type="text" placeholder="Amount" placeholderColor="placeholder black-ph" cutType="cut black-bg amount" />
            </div>
          </div>
          <div className="cycle-input-container">
            <div className="cycle-input">
              <InputBox icon="fa-solid fa-calendar-days" type="text" placeholder="Length (Days)" placeholderColor="placeholder black-ph" cutType="cut black-bg length" />
            </div>
          </div>
          <div className="cycle-calendar-container">
            <div className="cycle-calendar-text">
              Start Date:
            </div>
            <div className="cycle-datepicker-container">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                customInput={<ExampleCustomInput />}
              />
            </div>
          </div>
          <div className="cycle-save-btn">
            <input type="submit" value="Save" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile