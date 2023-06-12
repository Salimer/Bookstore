import { configureStore } from '@reduxjs/toolkit';
import booksArrSlice from './books/booksArrSlice';

const store = configureStore({
  reducer: {
    bookstore: booksArrSlice,
  },
});

export default store;
