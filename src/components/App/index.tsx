import '../App/style.css';

import ErrorBoundary from '@components/ErrorBoundary';
import { BookInfo } from '@pages/BookInfo';
import { Main } from '@pages/Main';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from '../Header';

const HOME_ROUTE = '/';
const BOOK_ROUTE = '/book/:id';

export const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const routes = new Map([
    [HOME_ROUTE, () => <Main isLoading={isLoading} />],
    [BOOK_ROUTE, () => <BookInfo />],
  ]);

  return (
    <>
      <Header setIsLoading={setIsLoading} />
      <ErrorBoundary>
        <Routes>
          {[...routes].map(([path, elementFactory], index) => (
            <Route key={index} path={path} element={elementFactory()} />
          ))}
        </Routes>
      </ErrorBoundary>
    </>
  );
};
