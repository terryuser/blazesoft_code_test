import { FC } from "react";
import { List, Divider } from "@mui/material";

import { BookListItem } from "./BookListItem";
import { useBooks } from "@rootDir/src/hooks/useBooks";

const BookList: FC = () => {
  const { books } = useBooks();

  return (
    <List sx={{ width: "100%" }}>
      <>
        {books.map((book, index) => (
          <>
            {index > 0 && <Divider />}
            <BookListItem {...book} />
          </>
        ))}
      </>
    </List>
  );
};

export { BookList };
