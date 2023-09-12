import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const BookListCTAs: FC = () => {
  return (
    <Link to="add">
      <Button>
        <AddIcon /> Add a book
      </Button>
    </Link>
  );
};

export { BookListCTAs };
