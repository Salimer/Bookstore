import Book from './Book';

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
    </section>
  );
};

export default ListBooks;
