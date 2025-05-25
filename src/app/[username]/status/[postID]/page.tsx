"use client";
// import Post from "@/components/Post";
const Post = dynamic(() => import("@/components/Post"), {
  ssr: false,
  loading: () => <PostSkeleton />,
});
import PostSkeleton from "@/components/loading/PostSkeleton";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { use } from "react";

type Props = {
  params: Promise<{ username: string; postID: string }>;
};

const PostDetailPage = ({ params }: Props) => {
  const { username, postID } = use(params); // ✅ unwrap Promise
  const router = useRouter();
  return (
    <div>
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <button onClick={() => router.back()}>
          <Image src="/icons/back.svg" alt="back" width={24} height={24} />
        </button>
        <h1 className="font-bold text-lg">Post of {username}</h1>
      </div>
      <Post type="status" />
      <form className="flex items-center justify-between gap-4 p-4 ">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image src="/general/avatar.jpeg" alt="" width={100} height={100} />
        </div>
        <input
          type="text"
          className="flex-1 bg-transparent outline-none p-2 text-xl"
          placeholder="Post your reply"
        />
        <button className="py-2 px-4 font-bold bg-white text-black rounded-full">
          Reply
        </button>
      </form>
      <Post />
      <Post />
    </div>
  );
};

export default PostDetailPage;
