import { FC } from "react";
import _ from "lodash";
import { TextField, Typography, FormControl } from "@mui/material";

import { ControllerRenderProps } from "react-hook-form";

import { AddBookFormFieldType } from "@models/bookItems";

const BookFormField: FC<
  AddBookFormFieldType & ControllerRenderProps & { error: any }
> = ({ fieldID, label, type, error, ...other }) => {
  return (
    <FormControl fullWidth margin="normal">
      <Typography marginBottom={1}>{label}</Typography>

      <TextField
        variant="outlined"
        fullWidth
        id={fieldID}
        type={type}
        InputProps={{
          sx: {
            borderColor: error ? "red" : "white",
            color: error ? "red" : "white",
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
            "&:hover > fieldset": { borderColor: "white" },
          },
        }}
        {...(type === "number" && {
          inputProps: { inputMode: "numeric", pattern: "[0-9]*" },
        })}
        {...other}
      />

      {error && <div style={{ color: "red" }}>{error?.message}</div>}
    </FormControl>
  );
};

export { BookFormField };
