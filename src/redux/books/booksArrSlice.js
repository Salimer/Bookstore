import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const storedBooks = () => {
  const storedBooks = localStorage.getItem('booksData');
  return storedBooks ? JSON.parse(storedBooks) : [];
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
        id: uuidv4(),
        title: bookTitle,
        author: bookAuthor,
        category: 'Action',
        genre: 'Action',
        completed: '40%',
        chapter: '13',
      };
      state.books = [...state.books, newBook];
    },
  },
});

export const { removeBook, addBook } = booksArrSlice.actions;

export default booksArrSlice.reducer;
