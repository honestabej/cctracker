import React, {useEffect, forwardRef, useState} from 'react';
import './AddPurchase.scss';
import InputBox from '../../components/InputBox/InputBox';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddPurchase = ({ sendDataToParent }) => {
  // Variables for the calendar
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="purchase-calendar-btn" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div className="add-purchase-container">
      <div className="add-purchase-page-wrapper">
        <div className="add-purchase-box-container">
          <div className="add-purchase-box-wrapper">
            <div className="add-purchase-close">
              <i class="fa-solid fa-xmark" onClick={() => { sendDataToParent(false); }} />
            </div>
            <div className="add-purchase-title">
              <span>Add Purchase</span>
            </div>
            <form action="#">
              <div className="add-purchase-input-container">
                <InputBox icon="fa-solid fa-credit-card" type="text" placeholder="Purchase" placeholderColor="placeholder black-ph" cutType="cut black-bg purchase" />
              </div>
              <div className="add-purchase-input-container">
                <InputBox icon="fa-solid fa-dollar-sign" type="text" placeholder="Amount" placeholderColor="placeholder black-ph" cutType="cut black-bg amount" />
              </div>
              <div className="purchase-calendar-container">
                <div className="purchase-calendar-text">
                  Date:
                </div>
                <div className="purchase-datepicker-container">
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} customInput={<ExampleCustomInput />} />
                </div>
              </div>
              <div className="add-purchase-btn-container">
                <input type="submit" value="Add Purchase" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPurchase