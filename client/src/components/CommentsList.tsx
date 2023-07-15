import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface ICommentProps{
    postId: string
}
const getComments= async (id: string)=>{
    const res = await axios.get(`http://localhost:4001/posts/${id}/comments`)
    return res?.data
}

const CommentsList = (props: ICommentProps) => {
     const { postId } = props;
     const fetchComments = useQuery({
        queryKey: ['comments'],
        queryFn: ()=> getComments(postId)
     })
     console.log(fetchComments.data, "comments");
     
     if(fetchComments.isLoading) return <div>Loading....</div>
  return (
    <div>
      <ul>
        {fetchComments.data.map((comment:any) => {
          return(
            <li key={comment.id}>{comment.content}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default CommentsList