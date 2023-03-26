import React from 'react';
import './header.css';
// import people from '../../assets/people.png';
// import aiii from '../../assets/aiii.png';



const Header = () => {
  return (
    <div className='cukoo__header section__padding' id='home'>
      <div className='cukoo__header-content'>
      {/* <img src={logs} alt="logo" /> */}
        <h1 className='gradient__text'>Add ingredients to the pantry and get started.</h1>
        <p>Every ingredient you add unlocks more recipes</p>
        <div className='cukoo__header-content__input'>
          <input type="text" placeholder='Add, remove, paste ingredients' />
          <button type='button'>Get Started</button>
        </div>
        <div className='cukoo__header-content__people'>
          {/* <img src={people} alt="people" />
          <p>1600 people requested access in last 24 hours.</p> */}
        </div>
      </div>
        <div className='cukoo__header-image'>
          {/* <img src={aiii} alt="ai" /> */}
        </div>
      
    </div>
  )
}

export default Header
