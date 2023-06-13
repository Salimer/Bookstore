import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/booksArrSlice';

const Loading = () => (
  <div className="loading">
    <h1>Loading...</h1>
  </div>
);

const ListBooks = () => {
  const dispatch = useDispatch();
  const { books, isLoading } = useSelector((store) => store.books);

  const saveBooksToLocalStorage = (items) => {
    localStorage.setItem('booksData', JSON.stringify(items));
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);

  console.log(books);
  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {books.map((book) => (
            <Book key={book.item_id} book={book} />
          ))}
          <AddBook />
        </>
      )}
    </section>
  );
};

export default ListBooks;
