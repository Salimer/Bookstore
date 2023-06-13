import { configureStore } from '@reduxjs/toolkit';
import booksArrSlice from './books/booksArrSlice';
import categoriesSlice from './categories/categoriesSlice';

const store = configureStore({
  reducer: {
    booksArr: booksArrSlice,
    categories: categoriesSlice,
  },
});

export default store;
