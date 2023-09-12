import { FC } from "react";
import { BookItemType } from "@src/models/bookItems";

import { EditBookForm } from "./EditBookForm";

interface EditBookWrapperType {
  bookData: BookItemType;
}

const EditBookWrapper: FC<EditBookWrapperType> = ({ bookData }) => {
  return <EditBookForm bookData={bookData} />;
};

export { EditBookWrapper };
