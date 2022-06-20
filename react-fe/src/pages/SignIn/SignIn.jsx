import React, { useState } from 'react';
import './SignIn.scss';
import PropTypes from 'prop-types';
import Header from './../../components/Header/Header';
import InputBox from '../../components/InputBox/InputBox';

async function loginUser(credentials) {
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
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="signin-page-container">
      <Header fontColor="header-nav white-font" />
      <div className="signin-header-bg"></div>
      <div className="signin-page-wrapper">
        <div className="signin-box-container">
          <div className="signin-box-wrapper">
            <div className="signin-title">
              <span>Welcome Back!</span>
            </div>
            <form action="#">
              <div className="signin-input-container">
                <InputBox icon="fa-solid fa-envelope" type="text" placeholder="E-Mail" placeholderColor="placeholder black-ph" cutType="cut white-bg email" />
              </div>
              <div className="signin-input-container">
                <InputBox icon="fa-solid fa-lock" type="password" placeholder="Password" placeholderColor="placeholder black-ph" cutType="cut black-bg password" />
              </div>
              <div className="signin-forgot-pwd">
                <a href="#">Forgot password?</a>
              </div>
              <div className="signin-btn-container">
                <input type="submit" value="Login" />
              </div>
              <hr />
              <div className="signin-signup-link">
                Not a member? <a href="#">Signup now</a>
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