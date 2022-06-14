import React, {useEffect, useState} from 'react';
import classes from './Header.module.scss';
import Logo from '../../images/LogoBlack.png'
import {BiMenuAltRight} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import { Link, useHistory } from "react-router-dom";

const Header = () => {
    const history = useHistory();
    const [menuOpen, setMenuOpen] = useState(false);
    const [size, setSize] = useState({
      width: undefined,
      height: undefined,
    });

    useEffect(() => {
      const handleResize = () => {
        setSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
      if (size.width > 768 && menuOpen) {
        setMenuOpen(false);
      }
    }, [size.width, menuOpen]);

    const menuToggleHandler = () => {
      setMenuOpen((p) => !p);
    };

    const ctaClickHandler = () => {
      menuToggleHandler();
      history.push("/signup");
    };

    return (
      <header className={classes.header}>
        <div className={classes.header__content}>
          <Link to="/" className={classes.header__content__logo}>
            <img src={Logo} alt=""></img>
          </Link>
          <nav className={`${classes.header__content__nav} ${menuOpen && size.width < 651 ? classes.isMenu : ""}`}>
            <div className={classes.header__content__nav__link}>
              <a href="/signin">Sign In</a>
            </div>
            <button onClick={ctaClickHandler}>Sign Up</button>
          </nav>
          <div className={classes.header__content__toggle}>
              {!menuOpen ? (
                <BiMenuAltRight onClick={menuToggleHandler} />
              ) : (
                <AiOutlineClose onClick={menuToggleHandler} />
              )}
          </div>
        </div>
      </header>
    );
};

export default Header;