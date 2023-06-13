import { createSlice } from '@reduxjs/toolkit';
import { getBooks, postBook, deleteBook } from './thunks';

const initialState = {
  books: [],
  isLoading: true,
};

const booksArrSlice = createSlice({
  name: 'booksArr',
  initialState,
  extraReducers: (builder) => {
    // Cases for getBooks thunk
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = action.payload;
      })
      .addCase(getBooks.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });

    // Cases for postBook thunk
    builder
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });

    // Cases for deleteBook thunk
    builder
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export default booksArrSlice.reducer;
