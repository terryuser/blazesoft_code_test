import { FC } from "react";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { Stack, Button } from "@mui/material";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { BookItemType } from "@models/bookItems";

import { FormFieldset } from "@src/constant/addFormFields";
import { BookFormField } from "../utils/BookFormField";

import { useBooks } from "@rootDir/src/hooks/useBooks";

interface EditBookFormType {
  bookData: BookItemType;
}

const EditBookForm: FC<EditBookFormType> = ({ bookData }) => {
  const {
    control,
    setError,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm<BookItemType>({
    defaultValues: bookData,
  });

  const { editExistBook } = useBooks();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<BookItemType> = (data) => {
    console.log("form submitted", data);

    let isValidSubmit = true;
    const errFields: string[] = [];

    _.forEach(_.toPairs(data), (d) => {
      const fieldID = d[0];
      const value = d[1];

      if (fieldID === "id") return;

      const record = _.find(FormFieldset, ["fieldID", fieldID]);
      const isNumberField = record?.type === "number";

      if (isNumberField) {
        const isValidNumber = _.isNumber(_.toNumber(value));

        console.log("is number field", isValidNumber);
        if (!isValidNumber) {
          isValidSubmit = false;
          errFields.push(fieldID);
        }
      }

      if (!isNumberField && typeof value !== record?.type) {
        isValidSubmit = false;
        errFields.push(fieldID);
      }
    });

    if (isValidSubmit) {
      console.log("valid");

      editExistBook(data);

      navigate("/");
    } else {
      console.log("Invalid", errFields);
      setError(errFields[0] as keyof BookItemType, {
        message: "Enter a valid value",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {FormFieldset?.map((fieldData) => (
        <Controller
          control={control}
          name={fieldData?.fieldID}
          render={({ field }) => (
            <BookFormField
              error={errors[fieldData?.fieldID]}
              {...field}
              {...fieldData}
            />
          )}
        />
      ))}

      <Stack direction={"row"} spacing={2} justifyContent={"flex-end"}>
        <Button
          disabled={!isDirty}
          onClick={() => handleSubmit(onSubmit)}
          variant="contained"
          type="submit"
        >
          Submit
        </Button>

        <Button onClick={() => navigate("/")} variant="outlined" type="submit">
          Cancel
        </Button>
      </Stack>
    </form>
  );
};

export { EditBookForm };
