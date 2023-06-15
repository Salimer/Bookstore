import { createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

// Get books from API
const getBooksURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books';
export const getBooks = createAsyncThunk('books/getBooks', async (thunkAPI) => {
  try {
    const response = await axios(getBooksURL);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

// Add book to API
const addBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books';
export const postBook = createAsyncThunk('books/addBook', async (book, thunkAPI) => {
  const bookObj = {
    item_id: uuidv4(),
    title: book[0],
    author: book[1],
    category: 'Action',
  };
  try {
    const response = await axios.post(addBookURL, bookObj);
    thunkAPI.dispatch(getBooks()); // Dispatch getBooks after successful post
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('something went wrong');
  }
});

// Delete book from API
const deleteBookURL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/xqDpmLzvPxikb9A9LRQw/books';
export const deleteBook = createAsyncThunk('books/deleteBook', async (bookId, thunkAPI) => {
  try {
    const response = await axios.delete(`${deleteBookURL}/${bookId}`);
    thunkAPI.dispatch(getBooks()); // Dispatch getBooks after successful deletion
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('something went wrong');
  }
});
