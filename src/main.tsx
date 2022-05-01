import React from 'react';
import ReactDOM from 'react-dom/client';

//* Context
import { TodoProvider } from 'context';

//* Screens
import { Home } from 'screens';

import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoProvider>
      <Home />
    </TodoProvider>
  </React.StrictMode>,
);
