import '../Header/style.css';

import { fetchBooks } from '@api/bookApi';
import loop from '@assets/images/loop.png';
import { BookContext } from '@context/BookContext';
import { CategoryContext } from '@context/CategoryContext';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC<{
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsLoading }) => {
  const [search, setSearch] = useState<string>('react');
  const [order, setOrder] = useState<string>('relevance');

  const [bookData, setBookData] = useContext(BookContext);
  const [category, setCategory] = useContext(CategoryContext);

  const [triggerSearch, setTriggerSearch] = useState<boolean>(true);

  const navigate = useNavigate();

  const handleSearchPath = () => {
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      searchBook();
      handleCategoryChange();
      handleSearchPath();
    }
  };

  const handleClick = () => {
    searchBook();
    handleCategoryChange();
    handleSearchPath();
  };

  useEffect(() => {
    if (triggerSearch) {
      setIsLoading(true);
      fetchBooks(search, order).then(data => {
        setBookData(data);
        setIsLoading(false);
      });
      setTriggerSearch(false);
    }
  }, [triggerSearch]);

  const searchBook = () => {
    setTriggerSearch(true);
  };

  const handleCategoryChange = () => {
    const selectElement = document.getElementById(
      'categorySelect',
    ) as HTMLSelectElement;
    if (selectElement) {
      const selectedCategory = selectElement.value;
      setCategory(selectedCategory);
    } else {
      alert("Element with id 'categorySelect' not found");
    }
  };

  const categories = [
    'all',
    'Art',
    'Biography',
    'Computers',
    'History',
    'Medical',
    'Poetry',
  ];
  const sorting = ['relevance', 'newest'];

  return (
    <header className="header">
      <h1 className="header__title">Search for books</h1>
      <div className="search__container">
        <div className="input-wrapper">
          <input
            className="search"
            type="text"
            placeholder="Введите запрос..."
            value={search}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
          />
          <img className="search__magnifier" src={loop} onClick={handleClick} />
        </div>
        <div className="selects">
          <div className="selectContainer">
            <label className="label" htmlFor="categorySelect">
              Categories
            </label>
            <select className="select" id="categorySelect">
              {categories.map((category, index) => (
                <option key={index.toString()} value={category}>
                  {category.toLowerCase()}
                </option>
              ))}
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
              onChange={handleOrderChange}
            >
              {sorting.map((sorting, index) => (
                <option key={index.toString()} value={sorting}>
                  {sorting}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};
