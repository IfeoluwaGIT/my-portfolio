import React from 'react';
import iboy from '../iboy.jpg';

import './Header.css';

const Header = () => {
  return (
    <header >
      <img src={iboy} alt="Logo" className="logo" />
      <div className="header-container">
        <div className='middle-container'>
        <div className="text-container">
      <h1>Hello! My name is Ifeoluwa Duro-Bello</h1>
      <p>Young Web Developer with a solid foundation in HTML, CSS, JavaScript, and React,<br></br> eager to expand my skills and tackle new challenges in <br></br>web development. </p>
      </div>
      </div>
      </div>
    </header>
  );
};

export default Header;
