import { FC } from "react";
import { Typography, Container, Stack } from "@mui/material";

import { AddBookWrapper } from "@components/addBook";

const AddBook: FC = () => {
  return (
    <Container sx={{ textAlign: "left" }}>
      <Typography variant="h2">Add Book</Typography>
      <AddBookWrapper />
    </Container>
  );
};

export { AddBook };
