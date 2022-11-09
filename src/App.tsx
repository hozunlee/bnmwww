import { BeakerIcon } from '@heroicons/react/24/solid';
import Nav from './components/Nav';
import Home from './pages/Home';

import { BooksProvider } from './hooks/books-context';

function App() {
  return (
    <div className='h-screen w-full overflow-y-hidden overflow-x-scroll'>
      <header>
        <Nav />
      </header>
      <main>
        <BooksProvider>
          <Home />
        </BooksProvider>
      </main>
    </div>
  );
}

export default App;
