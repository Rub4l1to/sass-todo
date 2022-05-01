import React from 'react';

// Assets
import logo from 'assets/icon.png';

// Icons
import { FaClipboardList } from 'react-icons/fa';

const Navbar = () => {
  const list: any = [];

  return (
    <header className="navbar u-padding-grid">
      <figure className="navbar__logo-container">
        <img className="navbar__logo" src={logo} alt="logo" />
        <h1 className="heading heading--logo">To Do List</h1>
      </figure>
      <div className="navbar__counter">
        <FaClipboardList /> <span>0</span>
      </div>
    </header>
  );
};

export default Navbar;
