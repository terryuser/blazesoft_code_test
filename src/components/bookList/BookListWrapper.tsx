import { FC } from "react";

import Container from "@mui/material/Container";

import { BookList } from "./BookList";
import { BookListCTAs } from "./BookListCTAs";

const BookListWrapper: FC = () => {
  return (
    <Container>
      <BookListCTAs />
      <BookList />
    </Container>
  );
};

export { BookListWrapper };
