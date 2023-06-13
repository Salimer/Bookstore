import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const initialState = {
  books: [],
  isLoading: true,
};

// Get books from API
const getBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books';
export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios(getBooksURL);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithVAlue('something went wrong');
  }
});

// Add book to API
export const addBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books';
export const postBook = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
  const bookObj = {
    item_id: uuidv4(),
    title: book[0],
    author: book[1],
    category: 'Action',
  };
  try {
    const response = await axios.post(addBookURL, bookObj);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

// Delete book from API
export const deleteBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books';
export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId, thunkAPI) => {
  try {
    const response = await axios.delete(`${deleteBookURL}/${bookId}`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('something went wrong');
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
      .addCase(postBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.fulfilled, (state) => {
        state.isLoading = true;
      })
      .addCase(postBook.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      })
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

export const { removeBook } = booksArrSlice.actions;

export default booksArrSlice.reducer;
