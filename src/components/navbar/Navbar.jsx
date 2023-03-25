import React, { useState} from 'react';
import {RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import gogo from '../../assets/gogo.svg';
import './navbar.css';

const Menu = () => (
  <>
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Recipes</a></p>
          <p><a href="#possibility">Diets</a></p>
          <p><a href="#features">Tutorials</a></p>
          <p><a href="#blog">Library</a></p>
  </> 
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='cukoo__navbar'>
      <div className='cukoo__navbar-links'>
        <div className='cukoo__navbar-links_logo'>
          <img src={gogo} alt="logo" />
          {/* <img src="logos.pnj" alt="logo" /> */}
        </div>
        <div className='cukoo__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='cukoo__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='cukoo__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='cukoo__navbar-menu_container scale-up-center'>
            <div className='cukoo__navbar-menu_container-links'>
              <Menu />
              <div className='cukoo__navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
