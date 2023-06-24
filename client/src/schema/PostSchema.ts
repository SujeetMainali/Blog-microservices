import * as yup from "yup";

export const PostSchema = yup
  .object({
    title: yup.string().required("Title is must"),
   
  })
  .required();
