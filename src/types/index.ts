export type Books = {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    categories?: string[];
    imageLinks?: {
      smallThumbnail: string;
    };
  };
};

export type CardProps = {
  book: Books[];
  selectedCategory: string;
  setDisplayedBooks: (count: number) => void;
  visible: number;
};

export type BookData = {
  volumeInfo?: {
    title?: string;
    description?: string;
    authors?: string[];
    categories?: string[];
    imageLinks?: {
      medium: string;
    };
  };
};
