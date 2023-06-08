import { useState } from 'react';
import Book from './Book';
import AddBook from './AddBook';

const ListBooks = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      genre: 'Action',
      completed: '64%',
      chapter: 'Chapter 17',
    },
  ]);

  const handleAddBookClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
    const newBook = {
      id: 2,
      title: 'Holy Moly',
      author: 'Salim',
      category: 'Action',
      genre: 'Action',
      completed: '40%',
      chapter: '13',
    };
    setBooks((prev) => [...prev, newBook]);
    console.log(books);
  };
  return (
    <section>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
      <AddBook handleAddBookClick={handleAddBookClick} />
    </section>
  );
};

export default ListBooks;
