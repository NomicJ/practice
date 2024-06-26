export const fetchBooks = (search: string, order: string) => {
  return fetch(
    `${process.env.URL}q=${search}&key=${process.env.API_KEY}&orderBy=${order}&maxResults=40`,
  )
    .then(response => response.json())
    .then(data => data.items)
    .catch(err => console.log(err));
};
