import '../Card/Card.css';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    categories?: string[];
    imageLinks?: {
      smallThumbnail: string;
    };
  };
}

interface CardProps {
  book: Book[];
  selectedCategory: string;
  setDisplayedBooks: (count: number) => void;
}

const Card: React.FC<CardProps> = ({
  book,
  selectedCategory,
  setDisplayedBooks,
}) => {
  // console.log(book);

  const navigate = useNavigate();
  const filteredBooks = book.filter(
    item =>
      selectedCategory === 'all' ||
      item.volumeInfo.categories?.includes(selectedCategory),
  );

  useEffect(() => {
    setDisplayedBooks(filteredBooks.length);
  }, [filteredBooks, setDisplayedBooks]);

  return (
    <>
      {filteredBooks.map(item => {
        const thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;

        if (thumbnail !== undefined) {
          return (
            <div
              className="card"
              key={item.id}
              onClick={() => navigate(`/book/${item.id}`)}
            >
              <img className="image" src={thumbnail} alt="book" />
              <div className="bottom">
                <p className="categories">{item.volumeInfo.categories}</p>
                <p className="title">{item.volumeInfo.title}</p>
                <p className="authors">{item.volumeInfo.authors}</p>
              </div>
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default Card;
