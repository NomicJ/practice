import '../Main/style.css';

import { Card } from '@components/Card';
import { BookContext } from '@context/BookContext';
import { CategoryContext } from '@context/CategoryContext';
import React, { useContext, useState } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

export const Main: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const paginationStep = 30;
  const [bookData] = useContext(BookContext);
  const [selectedCategory] = useContext(CategoryContext);
  const [displayedBooks, setDisplayedBooks] = useState(0);

  const [visible, setVisible] = useState(paginationStep);

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + paginationStep);
  };

  return (
    <main className="container">
      <p className="book-count__paragraph">Found {displayedBooks} results</p>
      <div className="cards__container">
        {isLoading ? (
          <ClipLoader />
        ) : (
          <Card
            book={bookData}
            selectedCategory={selectedCategory}
            setDisplayedBooks={setDisplayedBooks}
            visible={visible}
          />
        )}
      </div>
      {displayedBooks > 0 && (
        <button className="loadMore__btn" onClick={showMoreItems}>
          Load more
        </button>
      )}
    </main>
  );
};
