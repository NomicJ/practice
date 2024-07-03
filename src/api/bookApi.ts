import axios from 'axios';
export const fetchBooks = async (search: string, order: string) => {
  const allBooks: Map<string, any> = new Map();
  let totalBooks = 0;
  const maxResults = 40;
  const promises: any[] = [];

  for (let startIndex = 0; startIndex < 120; startIndex += maxResults) {
    promises.push(
      axios.get(
        `${process.env.URL}?q=${search}&key=${process.env.API_KEY}&orderBy=${order}&startIndex=${startIndex}&maxResults=${maxResults}`,
      ),
    );
  }

  try {
    const responses = await Promise.all(promises);

    for (const response of responses) {
      response.data.items.forEach((book: any) => {
        if (!allBooks.has(book.id)) {
          allBooks.set(book.id, book);
          totalBooks++;
        }
      });
    }
  } catch (err) {
    console.log(err);
  }

  console.log(`Общее количество найденных книг: ${totalBooks}`);
  return Array.from(allBooks.values());
};
