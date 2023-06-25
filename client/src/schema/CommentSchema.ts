import * as yup from "yup";

export const CommentSchema = yup
  .object({
    content: yup.string().required("Content cannot be empty"),
  })
  .required();
