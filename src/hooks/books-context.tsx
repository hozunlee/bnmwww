import { createContext, useContext, useState } from 'react';

const BooksContext = createContext();

const SampleData = {
  books: [
    {
      id: 1,
      title: 'My Private Book',
      marks: [
        {
          id: 1,
          title: 'Title',
          image:
            'https://tailwindcss.com/_next/static/media/social-card-large.a6e71726.jpg',
          description: 'ddd',
        },
      ],
    },
    {
      id: 2,
      title: 'My Private Book',
      marks: [],
    },
  ],
};

const iem = {
  id: 2,
  title: '나는야 ',
  image:
    'https://tailwindcss.com/_next/static/media/social-card-large.a6e71726.jpg',
  description: '코딩남',
};

export const BooksProvider = ({ children }) => {
  const [library, setLibrary] = useState(SampleData.books);

  const addMarkItem = (id) => {
    const findIndex = library.findIndex((item) => item.id === id);
    const temp = [...library];
    temp[findIndex].marks.push(iem);
    setLibrary(temp);
  };

  return (
    <BooksContext.Provider value={{ library, addMarkItem }}>
      {children}
    </BooksContext.Provider>
  );
};

export const useBooks = () => useContext(BooksContext);
