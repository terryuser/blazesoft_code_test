import { AddBookFormFieldType } from "@models/bookItems";

export const FormFieldset: AddBookFormFieldType[] = [
  { fieldID: "name", label: "Name", type: "string" },
  { fieldID: "price", label: "Price", type: "number" },
  { fieldID: "category", label: "Category", type: "string" },
  { fieldID: "description", label: "Description", type: "string" },
];
