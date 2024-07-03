import '../BookInfo/style.css';

import { fetchBookData } from '@api/bookInfoApi';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { BookData } from '../../types/index';

export const BookInfo: React.FC = () => {
  const [book, setBook] = useState<BookData | null>(null);

  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      fetchBookData(id)
        .then(data => {
          setBook(data);
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div className="clip__container">
          <ClipLoader className="clipLoader" />
        </div>
      ) : (
        <div className="bookInfo">
          <div className="image__container">
            {book?.volumeInfo?.imageLinks?.medium && (
              <img
                className="book__image"
                src={book.volumeInfo.imageLinks.medium}
                alt="book"
              />
            )}
          </div>
          <div className="information__container">
            <h3 className="book__categories">
              {book?.volumeInfo?.categories || 'Категория отсутствует'}
            </h3>
            <h2 className="book__title">
              {book?.volumeInfo?.title || 'Название отсутствует'}
            </h2>
            <h3 className="book__authors">
              {book?.volumeInfo?.authors?.join(', ') || 'Авторы отсутствуют'}
            </h3>
            <p className="book__description">
              {book?.volumeInfo?.description || 'Описание отсутствует'}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
