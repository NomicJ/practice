import '../components/Style.css';

import { Route,Routes } from 'react-router-dom';

import BookInfo from '../pages/BookInfo';
import Main from '../pages/Main';
// import { BookProvider, CategoryProvider } from './Context';
import Header from './Header/Header';

export const App = () => {
  return (
    <>
      {/* <BookProvider>
        <CategoryProvider> */}
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book/:id" element={<BookInfo />} />
      </Routes>
      {/* </CategoryProvider>
      </BookProvider> */}
    </>
  );
};
