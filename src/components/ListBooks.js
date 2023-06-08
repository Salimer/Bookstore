import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Book from './Book';
import AddBook from './AddBook';

const ListBooks = () => {
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem('booksData');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

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
    console.log(books);
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
