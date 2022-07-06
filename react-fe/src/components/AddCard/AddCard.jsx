import React, {useEffect, forwardRef, useState} from 'react';
import './AddCard.scss';
import InputBox from '../../components/InputBox/InputBox';
import Debit from './DebitCard/DebitCard';
import Credit from './CreditCard/CreditCard';

const AddCard = ({ sendDataToParent }) => {
  const [isDebit, setDebit] = useState(true);

  return (
    <div className="add-card-container">
      <div className="add-card-wrapper">
        <div className="add-card-box-container">
          <div className="add-card-box-wrapper">
            <div className="add-card-close">
              <i class="fa-solid fa-xmark" onClick={() => { sendDataToParent(false); }} />
            </div>
            <div className="add-card-title">
              <span>Add {isDebit ? "Debit" : "Credit"} Card</span>
            </div>
            <input type="checkbox" id="toggle" class="toggleCheckbox" onClick={() => setDebit(!isDebit)}/>
            <label for="toggle" class="toggleContainer">
              <div>Debit Card</div> 
              <div>Credit Card</div>
            </label>
            {isDebit ? <Debit /> : <Credit />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCard