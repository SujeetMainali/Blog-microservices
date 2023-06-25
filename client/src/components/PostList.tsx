import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import CommentCreate from "./CommentCreate";

const getPosts =async () => {
  const res = await axios.get('http://localhost:4000/posts')
  console.log(res?.data, 'asdhfjkashdgfjkhasd');
  
  return res?.data
}
const PostList = () => {

  const fetchPosts = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts
  })
  console.log("sdhfkasdhf", fetchPosts);
  if(fetchPosts.isLoading) return <div>Loading.....</div>
  return (
    <div className="flex flex-wrap flex-row gap-4 mt-5 ml-6">
      {Object.values(fetchPosts.data).map((post: any) => {
        return (
          <div
            key={post.id}
            className=" w-56 h-56 border-2 border-black text-center "
          >
            <p className=" font-bold text-xl">{post.title}</p>
            <div className=" mt-3">
              <CommentCreate id={post.id} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
