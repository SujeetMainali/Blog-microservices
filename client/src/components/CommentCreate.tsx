import { yupResolver } from '@hookform/resolvers/yup'
import {useForm} from 'react-hook-form'
import { CommentSchema } from '../schema/CommentSchema'
import axios from 'axios'

interface ICommentProps {
    id: string
}

const CommentCreate = (props: ICommentProps) => {
    const {id} = props
    const {handleSubmit, reset, formState:{errors}, register} = useForm({
        resolver: yupResolver(CommentSchema),
        defaultValues:{
            content: ''
        }
    })

    const handleComment = async (data:any)=>{
        console.log(data);
       await axios.post(`http://localhost:4001/posts/${id}/comments`, data);
        reset()
    }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleComment)} className=' flex flex-row'>
          <input
            type="text"
            placeholder="place a comment"
            {...register("content")}
            className=" border border-black rounded-md text-center w-2/3 ml-1"
          />
          <span className=" text-xs text-red-500 text-center m-2">
            {errors.content?.message}
          </span>
          <button
            type="submit"
            className=" w-1/3 mx-auto bg-green-400 rounded-lg font-medium hover:bg-white hover:text-green-600 hover:border-2 border-black mr-1  "
          >
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default CommentCreate