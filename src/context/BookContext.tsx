import React, { ReactNode } from 'react';

type BookContextType = [any[], React.Dispatch<React.SetStateAction<any[]>>];
export const BookContext = React.createContext<BookContextType>([[], () => {}]);

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [bookData, setBookData] = React.useState<any[]>([]);

  return (
    <BookContext.Provider value={[bookData, setBookData]}>
      {children}
    </BookContext.Provider>
  );
};
