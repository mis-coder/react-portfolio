import React from "react";
import logoAV from "../logoAV.svg";
import "../styles/Menu.css";
import { Link } from "react-scroll";
const Menu = () => {
  return (
    <div className='sidebar'>
      <div className='logo'>
        <h1>
          <a href='/'>
            <img src={logoAV} alt='' />
          </a>
        </h1>
        <p>Antra Verma</p>
      </div>
      <div className='menu'>
        <div className='menu-middle'>
          <div className='menu-container'>
            <ul>
              <li className='menu-item'>
                <Link
                  activeClass='active'
                  to='about'
                  spy={true}
                  smooth={true}
                  duration={800}
                  className='menu-link'
                >
                  <span className='circle'></span>
                  <span className='line'></span>
                  About
                </Link>
              </li>
              <li className='menu-item'>
                <Link
                  activeClass='active'
                  spy={true}
                  to='skills'
                  smooth={true}
                  duration={800}
                  className='menu-link'
                >
                  <span className='circle'></span>
                  <span className='line'></span>
                  Skills
                </Link>
              </li>
              <li className='menu-item'>
                <Link
                  activeClass='active'
                  spy={true}
                  to='projects'
                  smooth={true}
                  duration={800}
                  className='menu-link'
                >
                  <span className='circle'></span>
                  <span className='line'></span>
                  Projects
                </Link>
              </li>
              <li className='menu-item'>
                <Link
                  activeClass='active'
                  spy={true}
                  to='contact'
                  smooth={true}
                  duration={800}
                  className='menu-link'
                >
                  <span className='circle'></span>
                  <span className='line'></span>
                  Contact
                </Link>
              </li>
            </ul>
            <div className='border'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
