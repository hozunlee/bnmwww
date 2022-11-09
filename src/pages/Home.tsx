// import Cards from '../components/Cards';

import { useBooks } from '../hooks/books-context';

const Home = () => {
  const { books } = useBooks();
  console.log('🚀 ~ file: Home.tsx ~ line 7 ~ Home ~ books', books);
  return (
    <div className='flex h-screen items-start bg-sub p-4'>
      Home
      {/* <Cards />
      <Cards /> */}
    </div>
  );
};

export default Home;
