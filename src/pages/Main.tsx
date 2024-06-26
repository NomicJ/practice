import React, { useContext, useState } from 'react';

import Card from '../components/Card/Card';
import { BookContext, CategoryContext } from '../components/Context';

const Main: React.FC = () => {
  const [bookData] = useContext(BookContext);
  const [selectedCategory] = useContext(CategoryContext);
  const [displayedBooks, setDisplayedBooks] = useState(0);
  return (
    <div className="container">
      <p>Получено книг: {displayedBooks}</p>
      <div className="cards__container">
        <Card
          book={bookData}
          selectedCategory={selectedCategory}
          setDisplayedBooks={setDisplayedBooks}
        />
      </div>
    </div>
  );
};

export default Main;
