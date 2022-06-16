import React, { useState } from 'react';
import './SignUp.scss';
import PropTypes from 'prop-types';
import HeaderDark from '../../components/Header/HeaderDark';

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
    <div>
      <HeaderDark />
      <div className="signup-header-bg"></div>
      <div className="signup-page-container">
        <div className="signup-box-container">
          <div className="signup-box-wrapper">
            <div className="signup-title">
              <span>Create An Account</span>
            </div>
            <form action="#">
              <div className="signup-input-container">
                <i className="fas fa-user" />
                <input class="signup-input" type="text" placeholder=" " required />
                <div class="signup-cut signup-cut-email"></div>
                <label class="signup-placeholder">E-Mail</label>
              </div>
              <div class="signup-input-container">
                <i class="fas fa-lock" />
                <input class="signup-input" type="password" placeholder=" " required />
                <div class="signup-cut signup-cut-password"></div>
                <label class="signup-placeholder">Password</label>
              </div>
              <div class="signup-input-container">
                <i class="fas fa-lock" />
                <input class="signup-input" type="password" placeholder=" " required />
                <div class="signup-cut signup-cut-reenter-password"></div>
                <label class="signup-placeholder">Re-Enter Password</label>
              </div>
              <div class="signup-btn-container signup-btn">
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