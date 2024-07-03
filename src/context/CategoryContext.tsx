import React, { ReactNode } from 'react';

type CategoryContextType = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
];
export const CategoryContext = React.createContext<CategoryContextType>([
  'all',
  () => {},
]);

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [category, setCategory] = React.useState<string>('all');

  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      {children}
    </CategoryContext.Provider>
  );
};
