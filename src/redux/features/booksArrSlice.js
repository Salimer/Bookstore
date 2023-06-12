import { createSlice } from '@reduxjs/toolkit';

const storedBooks = () => {
  localStorage.getItem('booksData');
  return storedBooks ? JSON.parse(storedBooks) : [];
};
const initialState = storedBooks;

const booksArrSlice = createSlice({
  name: 'booksArr',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.initialState = state.initialState.filter((book) => book.id !== bookId);
    },
  },
});

export const { removeBook } = booksArrSlice.actions;

export default booksArrSlice.reducer;
