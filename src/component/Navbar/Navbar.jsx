import React, { useState } from 'react'
import logo from '../../assets/logo.png';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div className="navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
      <div className="navbar-sign">
        <p><Link to="Home"  >الرئيسية</Link></p>
        <p><Link to="About">عن تخزين</Link></p>
        <p> <a href="mailto:duhaishtayah@gmail.com">تواصل معنا</a></p>
        <p><Link to="Login">تسجيل دخول</Link></p>
      </div>
      <div className="navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#000" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#000" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="navbar-menu_container scale-up-center ">
            <div className="navbar-menu_container-links ">
              <p><Link to="Home" >الرئيسية</Link></p>
              <p><Link to="About">عن تخزين</Link></p>
              <p> <a href="mailto:duhaishtayah@gmail.com">تواصل معنا</a></p>
              <p><Link to="Login">تسجيل دخول</Link></p> 
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar