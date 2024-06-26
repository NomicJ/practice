// import React from 'react';
import React, { ReactNode } from 'react';

// export const BookContext = React.createContext([]);

type BookContextType = [any[], React.Dispatch<React.SetStateAction<any[]>>];
export const BookContext = React.createContext<BookContextType>([[], () => {}]);

interface BookProviderProps {
  children: ReactNode;
}
export const BookProvider: React.FC<BookProviderProps> = ({ children }) => {
  const [bookData, setBookData] = React.useState<any[]>([]);

  return (
    <BookContext.Provider value={[bookData, setBookData]}>
      {children}
    </BookContext.Provider>
  );
};

// ============================================================

type CategoryContextType = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];
export const CategoryContext = React.createContext<CategoryContextType>([
  'all',
  () => {},
]);

interface CategoryProviderProps {
  children: ReactNode;
}
export const CategoryProvider: React.FC<CategoryProviderProps> = ({
  children,
}) => {
  const [category, setCategory] = React.useState<string>('all');

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {children}
    </CategoryContext.Provider>
  );
};
