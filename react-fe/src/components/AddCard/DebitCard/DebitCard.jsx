import React, {useEffect, forwardRef, useState} from 'react';
import './DebitCard.scss';
import InputBox from '../../../components/InputBox/InputBox';

const DebitCard = ({ sendDataToParent }) => {

  return (
      <form action="#">
        <div className="add-debit-input-container">
          <InputBox icon="fa-solid fa-credit-card" type="text" placeholder="Card Name" placeholderColor="placeholder black-ph" cutType="cut black-bg card-name" />
        </div>
        <div className="add-debit-input-container">
          <InputBox icon="fa-solid fa-dollar-sign" type="text" placeholder="Current Balance" placeholderColor="placeholder black-ph" cutType="cut black-bg current-balance" />
        </div>
        <div className="add-debit-btn-container">
          <input type="submit" value="Add Card" />
        </div>
      </form>
  );
};

export default DebitCard