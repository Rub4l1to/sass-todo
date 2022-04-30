import React from 'react';
import ReactDOM from 'react-dom/client';

//* Context
import { ExampleProvider } from 'context';

//* Screens
import { Home } from 'screens';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExampleProvider>
      <Home />
    </ExampleProvider>
  </React.StrictMode>,
);
