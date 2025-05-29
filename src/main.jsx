import React, { lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Suspense } from './utils';
import { initialState, reducer } from './context/reducer';
import { ContextProvider } from './context';

const App = lazy(() => import('./App'));

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Suspense>
      <ContextProvider initialState={initialState} reducer={reducer}>
        <App />
      </ContextProvider>
    </Suspense>
  </BrowserRouter>
);
