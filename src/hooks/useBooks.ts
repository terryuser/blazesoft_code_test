import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@src/redux/store";
import { addBook, removeBook, editBook } from "@src/redux/bookSlice";

import { BookItemType } from "../models/bookItems";

export function useBooks() {
  const books = useSelector((state: RootState) => state.books.books);
  const dispatch = useDispatch<AppDispatch>();

  const addNewBook = (book: BookItemType) => {
    dispatch(addBook(book));
  };

  const removeBookById = (id: string) => {
    dispatch(removeBook(id));
  };

  const editExistBook = (book: BookItemType) => {
    dispatch(editBook(book));
  };

  return {
    books,
    addNewBook,
    removeBookById,
    editExistBook,
  };
}
