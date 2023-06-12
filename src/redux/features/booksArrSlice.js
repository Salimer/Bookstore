import { createSlice } from '@reduxjs/toolkit';

const storedBooks = () => {
  localStorage.getItem('booksData');
  return storedBooks ? JSON.parse(storedBooks) : [];
};
const initialState = storedBooks;

const booksArrSlice = createSlice({
  name: 'booksArr',
  initialState,
});

export default booksArrSlice.reducer;
