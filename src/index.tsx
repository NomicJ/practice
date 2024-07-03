import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { App } from './components/App';
import { BookProvider } from './context/BookContext';
import { CategoryProvider } from './context/CategoryContext';

const domNode = document.getElementById('root') as HTMLElement;
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BookProvider>
        <CategoryProvider>
          <App />
        </CategoryProvider>
      </BookProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
