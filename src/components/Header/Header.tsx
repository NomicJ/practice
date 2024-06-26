import '../Header/Header.css';

import React, { useEffect, useState } from 'react';
import { useContext } from 'react';

import { fetchBooks } from '../../api/bookApi';
import { BookContext, CategoryContext } from '../Context';

const Header: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [order, setOrder] = useState<string>('relevance');

  const [bookData, setBookData] = useContext(BookContext);
  const [category, setCategory] = useContext(CategoryContext);

  const [triggerSearch, setTriggerSearch] = useState<boolean>(false);

  useEffect(() => {
    if (triggerSearch) {
      fetchBooks(search, order).then(data => setBookData(data));
      setTriggerSearch(false);
    }
  }, [triggerSearch]);

  const searchBook = () => {
    setTriggerSearch(true);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };
  return (
    <header className="header">
      <h1 className="header__title">Search for books</h1>
      <div>
        <div className="search-wrapper">
          <input
            className="search"
            type="text"
            placeholder="Введите запрос..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            // onKeyPress={searchBook}
            onKeyDown={event => {
              if (event.key === 'Enter') {
                searchBook();
              }
            }}
          />
          <img
            className="search__magnifier"
            src={require('../../assets/images/loop.png')}
            onClick={searchBook}
          />
        </div>
        <div className="selects">
          <div className="selectContainer">
            <label className="label" htmlFor="categorySelect">
              Categories
            </label>
            <select
              className="select"
              id="categorySelect"
              onChange={handleCategoryChange}
            >
              <option value="all">all</option>
              <option value="Art">art</option>
              <option value="Biography">biography</option>
              <option value="Computers">computers</option>
              <option value="History">history</option>
              <option value="Medical">medical</option>
              <option value="Poetry">poetry</option>
            </select>
          </div>
          <div className="selectContainer">
            <label className="label" htmlFor="sortingSelect">
              Sorting by
            </label>
            <select
              className="select"
              id="sortingSelect"
              value={order}
              onChange={e => setOrder(e.target.value)}
            >
              <option value="relevance">relevance</option>
              <option value="newest">newest</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
