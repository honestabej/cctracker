import React, {useEffect, useState} from 'react';
import classes from './HeaderLogin.scss';
import WhiteLogo from '../../images/LogoWhite.png';

const HeaderLogin = (prop) => {
  const userIcon = <i class="fa-solid fa-user-gear" onClick={() => userIconLink()} />;
  const dashIcon = <i class="fa-solid fa-chart-pie" onClick={() => dashIconLink()} />

  // Handle links
  const logoLink = () => {
    window.location.href="/";
  };

  const userIconLink = () => {
    window.location.href="/user";
  };

  const dashIconLink = () => {
    window.location.href="/dashboard";
  };

  return (
    <div className="headerlogin-container">
      <div className="headerlogin-content">
        <div className="headerlogin-logo">
          <img src={WhiteLogo} alt="" onClick={logoLink}></img>
        </div>
        <div className="headerlogin-to-page">
          {prop.currentPage == "Dashboard" ? userIcon : dashIcon}
        </div>
      </div>
    </div>
  );
};

export default HeaderLogin