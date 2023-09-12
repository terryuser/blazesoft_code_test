export type BookItemType = {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
};

type AllFieldIDs = keyof BookItemType;

export type AddBookFormFieldType = {
  fieldID: AllFieldIDs;
  label: string;
  type: "string" | "number";
};
