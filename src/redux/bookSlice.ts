import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

import { BookItemType } from "@models/bookItems";

interface BooksState {
  books: BookItemType[];
}

const initialState: BooksState = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<BookItemType>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
    editBook: (state, action: PayloadAction<BookItemType>) => {
      const recordIdx = _.findIndex(state.books, ["id", action.payload.id]);
      const newData = _.clone(state.books);

      _.set(newData, recordIdx, action.payload);

      state.books = newData;
    },
  },
});

export const { addBook, removeBook, editBook } = booksSlice.actions;
export default booksSlice.reducer;
