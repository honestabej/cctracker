import React, {useEffect, forwardRef, useState} from 'react';
import './CreditCard.scss';
import InputBox from '../../../components/InputBox/InputBox';

const CreditCard = ({ sendDataToParent }) => {

  return (
      <form action="#">
        <div className="add-credit-input-container">
          <InputBox icon="fa-solid fa-credit-card" type="text" placeholder="Card Name" placeholderColor="placeholder black-ph" cutType="cut black-bg card-name" />
        </div>
        <div className="add-credit-input-container">
          <InputBox icon="fa-solid fa-receipt" type="text" placeholder="Current Outstanding" placeholderColor="placeholder black-ph" cutType="cut black-bg current-outstanding" />
        </div>
        <div className="add-credit-input-container">
          <InputBox icon="fa-solid fa-dollar-sign" type="text" placeholder="Total LOC" placeholderColor="placeholder black-ph" cutType="cut black-bg total-loc" />
        </div>
        <div className="add-credit-btn-container">
          <input type="submit" value="Add Card" />
        </div>
      </form>
  );
};

export default CreditCard