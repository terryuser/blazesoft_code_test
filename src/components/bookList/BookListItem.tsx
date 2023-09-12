import { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  Stack,
  ListItem,
  Box,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";

import { Delete, MenuBook } from "@mui/icons-material";

import { BookItemType } from "@models/bookItems";

import { useBooks } from "@src/hooks/useBooks";
import { generateHSL, HSLtoString } from "@src/hooks/useColor";

const BookListItem: FC<BookItemType> = ({
  id,
  name,
  category,
  price,
  description,
}) => {
  const navigate = useNavigate();

  const { removeBookById } = useBooks();

  const randomHSL = generateHSL(name);

  return (
    <ListItem alignItems="flex-start">
      <Stack width={"100%"} direction={"row"} spacing={1}>
        <Box
          onClick={() => navigate(`edit/${id}`)}
          sx={{
            cursor: "pointer",
            background: "#393939",
            paddingLeft: 2,
            paddingRight: 3,
            paddingY: 1.5,
          }}
        >
          <Stack width={"100%"} direction={"row"} spacing={3}>
            <ListItemAvatar>
              <Avatar
                alt={name}
                sx={{ width: 60, height: 60, bgcolor: HSLtoString(randomHSL) }}
              >
                <MenuBook />
              </Avatar>
            </ListItemAvatar>

            <Stack direction={"column"} spacing={0.5}>
              <div>
                <div
                  style={{
                    padding: 5,
                    color: "white",
                    background: "#2c2c2c",
                    display: "inline",
                    fontSize: "0.8rem",
                  }}
                >
                  {category}
                </div>
              </div>
              <Typography variant="subtitle1">{name}</Typography>
              <Typography variant="body2">{`$${price}`}</Typography>
            </Stack>
          </Stack>
        </Box>

        <div style={{ alignSelf: "end" }}>
          <Delete
            sx={{ cursor: "pointer" }}
            onClick={() => removeBookById(id)}
          />
        </div>
      </Stack>
    </ListItem>
  );
};

export { BookListItem };
