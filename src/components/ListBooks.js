import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const ListBooks = () => {
  const books = useSelector((store) => store.bookstore.books);

  const saveBooksToLocalStorage = (items) => {
    localStorage.setItem('booksData', JSON.stringify(items));
  };

  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);
  return (
    <section>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook />
    </section>
  );
};

export default ListBooks;
