import React from 'react';
import iboy from '../iboy.jpg';

import './Header.css';

const Header = () => {
  return (
    <header >
      <div className="header-container">
      <img src={iboy} alt="Logo" className="logo" />
        <div className="text-container">
      <h1>Hello! My name is Ifeoluwa Duro-Bello</h1>
      <p className="description">Young Web Developer with a solid foundation in HTML, CSS, JavaScript, React and Redux, eager to expand my skills and tackle new challenges in web development.</p>
      </div>
      </div>
    </header>
  );
};

export default Header;
