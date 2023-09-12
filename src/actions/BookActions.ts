import { BookItemType } from "../models/bookItems";

export const addBookAction = (book: BookItemType) => ({
  type: "ADD_BOOK",
  payload: book,
});

export const removeBookAction = (id: number) => ({
  type: "REMOVE_BOOK",
  payload: id,
});
