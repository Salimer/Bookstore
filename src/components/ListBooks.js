import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Book from './Book';
import AddBook from './AddBook';

const ListBooks = () => {
  const books = useSelector((store) => store.bookstore);

  const saveBooksToLocalStorage = (items) => {
    localStorage.setItem('booksData', JSON.stringify(items));
  };

  useEffect(() => {
    saveBooksToLocalStorage(books);
  }, [books]);
  const handleAddBookClick = (title, author) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      category: 'Action',
      genre: 'Action',
      completed: '40%',
      chapter: '13',
    };
    setBooks((prev) => [...prev, newBook]);
  };

  const handleRemoveBookClick = (id) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };
  return (
    <section>
      {books.map((book) => (
        <Book key={book.id} book={book} handleRemoveBookClick={handleRemoveBookClick} />
      ))}
      <AddBook handleAddBookClick={handleAddBookClick} />
    </section>
  );
};

export default ListBooks;
