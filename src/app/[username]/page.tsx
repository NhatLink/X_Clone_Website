"use client";
import Feed from "@/components/Feed";
import ImageSkeleton from "@/components/loading/ImageSkeleton";
import RightBarSkeleton from "@/components/loading/RightBarSkeleton";
import SmallPostSkeleton from "@/components/loading/SmallPostSkeleton";
import dynamic from "next/dynamic";
const UserInfo = dynamic(() => import("@/components/UserInfo"), {
  ssr: false,
  loading: () => (
    <div>
      <ImageSkeleton />
      <SmallPostSkeleton />
    </div>
  ),
});
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useState } from "react";

type Props = {
  params: Promise<{ username: string }>;
};

const tabs = ["posts", "replies", "highlights", "media", "likes"] as const;

const UserProfilePage = ({ params }: Props) => {
  const { username } = use(params);
  const [activeTab, setActiveTab] = useState("posts");
  return (
    <div className="">
      {/* PROFILE TITLE */}
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <Image src="/icons/back.svg" alt="back" width={24} height={24} />
        </Link>
        <h1 className="font-bold text-lg">{username}</h1>
      </div>
      {/* INFO */}
      <UserInfo username={username} />
      <div className="overflow-y-auto  flex justify-around border-b border-borderGray text-sm font-semibold text-textGray">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`flex-1 flex justify-center items-center capitalize hover:bg-[#181818] `}
            onClick={() => setActiveTab(tab)}
          >
            <span
              className={`pb-2 pt-3 ${
                activeTab === tab ? "border-b-4 border-iconBlue text-white" : ""
              }`}
            >
              {tab}
            </span>
          </button>
        ))}
      </div>
      {/* FEED */}
      <Feed />
    </div>
  );
};

export default UserProfilePage;
