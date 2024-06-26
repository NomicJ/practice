import React from 'react';
// import ReactDOM from 'react-dom'
import ReactDOM, { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { BookProvider, CategoryProvider } from '../src/components/Context';
import { App } from './components/App';
// ReactDOM.render(<App />, document.getElementById("root"));

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
