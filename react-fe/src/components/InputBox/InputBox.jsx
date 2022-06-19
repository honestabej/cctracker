import React from 'react';
import './InputBox.scss';

const InputBox = (prop) => {
  return (
    <div className="input-container">
      <div className="icon-wrapper">
        <i className={prop.icon} />
      </div>
      <div className="input-wrapper">
        <input class="input" type={prop.type} placeholder=" " required />
        <div class={prop.cutType}></div>
        <label class={prop.placeholderColor}>{prop.placeholder}</label>
      </div>
    </div>
  )
}

export default InputBox