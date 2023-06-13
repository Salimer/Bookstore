import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';
import { getBooks } from '../redux/books/booksArrSlice';

const ListBooks = () => {
  const dispatch = useDispatch();

  const { books, isLoading } = useSelector((store) => store.booksArr);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  // Convert object to an array of books
  const booksArray = Object.entries(books).reduce((acc, [id, bookList]) => {
    const booksWithId = bookList.map((book) => ({ ...book, id }));
    return [...acc, ...booksWithId];
  }, []);

  return (
    <section>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {booksArray.map((book) => (
            <Book key={book.id} book={book} />
          ))}
          <AddBook />
        </>
      )}
    </section>
  );
};

export default ListBooks;
