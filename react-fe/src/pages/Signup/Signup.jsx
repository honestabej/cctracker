import React, { useState } from 'react';
import './SignUp.scss';
import PropTypes from 'prop-types';
import Header from '../../components/Header/Header';
import InputBox from '../../components/InputBox/InputBox';

async function signupUser(credentials) {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await signupUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="signup-page-container">
      <Header logo="WhiteLogo" fontColor="header-nav white-font"/>
      <div className="signup-header-bg"></div>
      <div className="signup-page-wrapper">
        <div className="signup-box-container">
          <div className="signup-box-wrapper">
            <div className="signup-title">
              <span>Create An Account</span>
            </div>
            <form action="#">
              <div className="signup-input-container">
                <InputBox icon="fa-solid fa-envelope" type="text" placeholder="E-Mail" placeholderColor="placeholder black-ph" cutType="cut black-bg email" />
              </div>
              <div class="signup-input-container">
                <InputBox icon="fa-solid fa-lock" type="password" placeholder="Password" placeholderColor="placeholder black-ph" cutType="cut black-bg password" />
              </div>
              <div class="signup-input-container">
                <InputBox icon="fa-solid fa-lock" type="password" placeholder="Re-Enter Password" placeholderColor="placeholder black-ph" cutType="cut black-bg re-enter-password" />
              </div>
              <div class="signup-btn">
                <input type="submit" value="Sign Up" />
              </div>
              <hr />
              <div class="signin-link">
                 Already a member? <a href="#"> Sign In </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}