import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const initialState = {
  books: [],
};

const getBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books';

export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios(getBooksURL);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithVAlue('something went wrong')
  }
});

const booksArrSlice = createSlice({
  name: 'booksArr',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
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
  extraReducers: (builder) => {
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
    })
  },
});

export const { removeBook, addBook } = booksArrSlice.actions;

export default booksArrSlice.reducer;
