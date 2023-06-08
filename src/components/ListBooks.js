import Book from './Book';
import AddBook from './AddBook';

const ListBooks = () => {
  const books = [
    {
      id: 1,
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      category: 'Action',
      genre: 'Action',
      completed: '64%',
      chapter: 'Chapter 17',
    },
  ];
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
