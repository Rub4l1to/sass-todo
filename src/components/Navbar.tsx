import React, { useContext } from 'react';

// Assets
import logo from 'assets/icon.png';

// Icons
import { FaClipboardList } from 'react-icons/fa';

//* Context
import { TodoContext } from 'context/Todo/TodoContext';

const Navbar = () => {
  const { list } = useContext(TodoContext);

  return (
    <header className="navbar u-padding-grid">
      <figure className="navbar__logo-container">
        <img className="navbar__logo" src={logo} alt="logo" />
        <h1 className="heading heading--logo">To Do List</h1>
      </figure>
      <div className="navbar__counter">
        <FaClipboardList /> <span>{list.length}</span>
      </div>
    </header>
  );
};

export default Navbar;
