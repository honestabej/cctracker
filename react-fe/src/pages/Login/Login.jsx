import React, { useState } from 'react';
import './Login.scss';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
    <div className="container">
      <div className="wrapper">
        <div className="title">
          <span>Welcome Back!</span>
        </div>
        <form action="#">
          <div className="row">
            <i className="fas fa-user" />
            <input type="text" placeholder="Email" required />
          </div>
          <div class="row">
            <i class="fas fa-lock" />
            <input type="password" placeholder="Password" required />
          </div>
          <div class="pass"><a href="#">Forgot password?</a></div>
          <div class="row button">
            <input type="submit" value="Login" />
          </div>
          <div class="signup-link">
            Not a member? <a href="#"> Signup now </a>
          </div>
        </form>
      </div>
    </div>
    // <div className="login-wrapper">
    //   <div className="login-box">
    //     <div className="img-div">
    //       <img className="logo-img" src="/images/cctracker-logo.png" alt=""></img>
    //     </div>
    //     <div class="input-container">
    //       <FontAwesomeIcon icon={faUser} swapOpacity className="user-icon" />
    //       <input id="firstname" class="input" type="text" placeholder=" " />
    //       <label for="firstname" class="placeholder">First name</label>
    //     </div>
    //     <button type="text" class="submit">submit</button>
    //   </div>
    // </div>
    
    // <div class="form">
    //   <div class="title">Welcome Back!</div>
    //   <div class="input-container ic1">
    //     <input id="firstname" class="input" type="text" placeholder=" " />
    //     <div class="cut"></div>
    //     <label for="firstname" class="placeholder">First name</label>
    //   </div>
    //   <div class="input-container ic2">
    //     <input id="lastname" class="input" type="text" placeholder=" " />
    //     <div class="cut"></div>
    //     <label for="lastname" class="placeholder">Last name</label>
    //   </div>
    //   <div class="input-container ic2">
    //     <input id="email" class="input" type="text" placeholder=" " />
    //     <div class="cut cut-short"></div>
    //     <label for="email" class="placeholder">Email</label>
    //   </div>
    //   <button type="text" class="submit">submit</button>
    // </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}