import React from 'react';
import ReactDOM from 'react-dom/client';

//* Context
import { TodoProvider, ModalProvider } from 'context';

//* Screens
import { Home } from 'screens';

import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
      <ModalProvider>
        <Home />
      </ModalProvider>
    </TodoProvider>
  </React.StrictMode>,
);
