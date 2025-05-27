// import Post from "./Post";
import dynamic from "next/dynamic";
import PostSkeleton from "./loading/PostSkeleton";

const Post = dynamic(() => import("@/components/Post"), {
  loading: () => <PostSkeleton />,
});
const Feed = () => {
  return (
    <div className="">
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
