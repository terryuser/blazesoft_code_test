import { FC } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { EditBookWrapper } from "@components/editBook";
import { useBooks } from "../hooks/useBooks";

const EditBook: FC = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();

  const { books } = useBooks();

  const targetBookData = _.find(books, (book) => book.id === bookId);

  if (!targetBookData) {
    alert("Book not found");
    navigate("/");

    return <></>;
  }

  return (
    <Container sx={{ textAlign: "left" }}>
      <Typography variant="h2">Edit Book</Typography>
      <EditBookWrapper bookData={targetBookData} />
    </Container>
  );
};

export { EditBook };
