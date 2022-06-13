import React, { useState } from 'react';
import './SignIn.scss';
import PropTypes from 'prop-types';

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
    <div className="header-bg">
      <div className="test"></div>
      <div className="signin-container">
        <div className="box-container">
          <div className="signin-wrapper">
            <div className="signin-title">
              <span>Welcome Back!</span>
            </div>
            <form action="#">
              <div className="signin-input-container">
                <i className="fas fa-user" />
                <input class="signin-input" type="text" placeholder=" " required />
                <div class="signin-cut signin-email"></div>
                <label class="placeholder">E-Mail</label>
              </div>
              <div class="signin-input-container">
                <i class="fas fa-lock" />
                <input class="signin-input" type="password" placeholder=" " required />
                <div class="signin-cut signin-password"></div>
                <label class="placeholder">Password</label>
              </div>
              <div class="signin-pass"><a href="#">Forgot password?</a></div>
              <div class="signin-button-container signin-button">
                <input type="submit" value="Login" />
              </div>
              <hr />
              <div class="signup-link">
                Not a member? <a href="#"> Signup now </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    // <div className="signin-container">
    //   <div className="signin-wrapper">
    //     <div className="signin-title">
    //       <span>Welcome Back!</span>
    //     </div>
    //     <form action="#">
    //       <div className="signin-input-container">
    //         <i className="fas fa-user" />
    //         <input class="signin-input" type="text" placeholder=" " required />
    //         <div class="signin-cut signin-email"></div>
    //         <label class="placeholder">E-Mail</label>
    //       </div>
    //       <div class="signin-input-container">
    //         <i class="fas fa-lock" />
    //         <input class="signin-input" type="password" placeholder=" " required />
    //         <div class="signin-cut signin-password"></div>
    //         <label class="placeholder">Password</label>
    //       </div>
    //       <div class="signin-pass"><a href="#">Forgot password?</a></div>
    //       <div class="signin-button-container signin-button">
    //         <input type="submit" value="Login" />
    //       </div>
    //       <hr />
    //       <div class="signup-link">
    //         Not a member? <a href="#"> Signup now </a>
    //       </div>
    //     </form>        
    //   </div>
    // </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}