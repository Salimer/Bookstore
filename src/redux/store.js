import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    bookstore: 'booksReducer',
  },
});

export default store;
