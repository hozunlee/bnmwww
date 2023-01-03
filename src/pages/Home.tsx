// import Cards from '../components/Cards';

import Book from '../components/Book';
import { useBooks } from '../hooks/books-context';

const Home = () => {
  const { library } = useBooks();
  console.log('🚀 ~ file: Home.tsx ~ line 7 ~ Home ~ books', library);
  return (
    <div className='flex h-screen items-start bg-sub p-4'>
      {/* <Cards />
      <Cards /> */}
      {library.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <div>
        <button className='mr-2 w-24 rounded-sm bg-cyan-300 px-5 py-1 font-medium text-white hover:bg-cyan-500'>
          + Add Book
        </button>
      </div>
    </div>
  );
};

export default Home;
