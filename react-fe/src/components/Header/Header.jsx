import React, {useEffect, useState} from 'react';
import classes from './Header.scss';
import Logo from '../../images/LogoBlack.png'
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import { Link, useHistory } from "react-router-dom";

const Header = (prop) => {
  const menuIcon = <i class="fa-solid fa-bars" onClick={() => setOpen(!isOpen)} />;
  const closeIcon = <i class="fa-solid fa-xmark" onClick={() => setOpen(!isOpen)} />

  const whiteFont = "header-nav white-font";
  const blackFont = "header-nav black-font";
  const showNav = "header-menu-nav show";
  const hideNav = "header-menu-nav hide";
  const whiteIcon = "header-menu-toggle white-icon";
  const blackIcon = "header-menu-toggle black-icon";

  // Variables for determining if header-menu-nav should be shown
  const [isOpen, setOpen] = useState(false);
  const [size, setSize] = useState({width: undefined});

  // Get width of window on resize
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dont show the header-menu-nav if window is wider than 576px
  useEffect(() => {
    if (size.width > 576) {
      setOpen(false);
    }
  }, [size.width]);

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-logo">
          <img src={Logo} alt=""></img>
        </div>
        <div className={prop.fontColor}>
          <a href="">About</a>
          <a href="">Sign In</a>
          <button>Sign Up</button>
        </div>
        <div className={isOpen ? showNav : hideNav}>
          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Sign In</a></li>
            <li><a href="">Sign Up</a></li>
          </ul>
        </div>
        <div className={isOpen ? whiteIcon : blackIcon}>
          {isOpen ? closeIcon : menuIcon}
        </div>
      </div>
    </header>
  );
};

export default Header;