import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import {Link} from 'react-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef()

  const openMenu = () => {
    menuRef.current.style.right = '0'
  }

  const closeMenu = () => {
    menuRef.current.style.right = '-350px'
  }

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <img src={menu_open} alt="" className="nav-open" onClick={openMenu}/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} alt="" className="nav-close" onClick={closeMenu} />
        <li  className={menu === 'home' ? "is--active" : ""}>
          {" "}
          <Link onClick={() => setMenu('home')} to="hero" smooth={true}>Home</Link>
        </li>
        <li  className={menu === 'about' ? "is--active" : ""}>
          {" "}
          <Link onClick={() => setMenu('about')} to="about" smooth={true} offset={-10}>About me</Link>{" "}
        </li>
        <li  className={menu === 'services' ? "is--active" : ""}>
          {" "}
          <Link onClick={() => setMenu('services')} to="services" smooth={true} offset={-20}>Services</Link>{" "}
        </li>
        <li  className={menu === 'work' ? "is--active" : ""}>
          {" "}
          <Link onClick={() => setMenu('work')} to="work" smooth ={true} offset={-30}>Portfolio</Link>{" "}
        </li>
        <li  className={menu === 'contact' ? "is--active" : ""}>
          {" "}
          <Link onClick={() => setMenu('contact')} to="contact" smooth={true} offset={-50}>Contact</Link>{" "}
        </li>
        <p></p>
      </ul>
      <div className="nav-connect">connect with me</div>
    </div>
  );
};

export default Navbar;
