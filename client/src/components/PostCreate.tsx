import { useForm } from "react-hook-form";
import { PostSchema } from "../schema/PostSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
const PostCreate = () => {
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(PostSchema),
    defaultValues: {
      title: "",
    },
  });
  const onSubmit =async (data: any) => {
    console.log(data);
    try {
      await axios.post("http://localhost:4000/post", data);
      reset();
      queryClient.invalidateQueries(["posts"]);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=" flex justify-center ">
      <div className=" border-2 border-black w-1/4 h-1/4 flex justify-center  ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col w-1/2 text-center justify-center m-4 "
        >
          <input
            type="text"
            {...register("title")}
            placeholder="title"
            className=" border border-black rounded-md"
            style={{ textAlign: "center" }}
          />
          <span className=" text-xs text-red-500 text-center m-2">
            {errors.title?.message}
          </span>
          <input
            type="submit"
            className=" w-1/2 mx-auto bg-green-400 rounded-lg font-medium hover:bg-white hover:text-green-600 hover:border-2 border-black  "
          />
        </form>
      </div>
    </div>
  );
};

export default PostCreate;
