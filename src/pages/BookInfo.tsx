import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';

interface Book {
  volumeInfo?: {
    title?: string;
  };
}
const BookInfo: React.FC = () => {
  const [book, setBook] = useState<Book | null>(null);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(response => response.json())
      .then(data => {
        setBook(data);
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="bookInfo">
      <h2>Информация.</h2>
      <p>{book?.volumeInfo?.title}</p>
    </div>
  );
};

export default BookInfo;
