import { createContext, useContext, useState } from 'react';

const BooksContext = createContext();

const SampleData = {
  books: [
    {
      id: 1,
      title: 'My Private Book',
      marks: [],
    },
  ],
};

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(SampleData);

  return (
    <BooksContext.Provider value={{ books }}>{children}</BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
