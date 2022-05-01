import React, { Fragment } from 'react';

// Components
import { TodoList, Navbar, WindowEvent, Modal } from 'components';

export const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <TodoList />
      <WindowEvent />
      <Modal />
    </Fragment>
  );
};
