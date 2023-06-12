import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const storedBooks = () => {
  const storedBooks = localStorage.getItem('booksData');
  return storedBooks ? JSON.parse(storedBooks) : [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ];
};
const initialState = {
  books: storedBooks(),
};

const booksArrSlice = createSlice({
  name: 'booksArr',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
    addBook: (state, action) => {
      const bookTitle = action.payload[0];
      const bookAuthor = action.payload[1];
      const newBook = {
        item_id: uuidv4(),
        title: bookTitle,
        author: bookAuthor,
        category: 'Action',
      };
      state.books = [...state.books, newBook];
    },
  },
});

export const { removeBook, addBook } = booksArrSlice.actions;

export default booksArrSlice.reducer;
