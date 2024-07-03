import '../Card/style.css';

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { CardProps } from '../../types/index';

export const Card: React.FC<CardProps> = ({
  book,
  selectedCategory,
  setDisplayedBooks,
  visible,
}) => {
  const navigate = useNavigate();

  const normalizedBooks = book.map(item => ({
    id: item.id,
    title: item.volumeInfo?.title || 'Название не найдено',
    authors: item.volumeInfo?.authors || ['Автор не найден'],
    categories: item.volumeInfo?.categories || ['Категория не найдена'],
    thumbnail:
      item.volumeInfo?.imageLinks?.smallThumbnail || 'Изображение не найдено',
  }));

  const filteredBooks = normalizedBooks.filter(
    item =>
      selectedCategory === 'all' || item.categories?.includes(selectedCategory),
  );

  setDisplayedBooks(filteredBooks.length);

  return (
    <>
      {filteredBooks.slice(0, visible).map((item, index) => {
        return (
          <div
            className="card"
            key={item.id + index}
            onClick={() => navigate(`/book/${item.id}`)}
          >
            <img className="image" src={item.thumbnail} alt="book" />
            <div className="bottom">
              <p className="categories">{item.categories}</p>
              <h2 className="title">{item.title}</h2>
              <p className="authors">{item.authors}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};
