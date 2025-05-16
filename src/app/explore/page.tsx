"use client";
import Feed from "@/components/Feed";
import News from "@/components/News";
import NewsByTitle from "@/components/NewsByTitle";
import PopularTags from "@/components/PopularTags";
import Recommendations from "@/components/Recommendations";
import Search from "@/components/Search";
import Image from "next/image";
import { use, useState } from "react";
import styles from "./explore.module.css";
const tabs = [
  "For you",
  "Trending",
  "News",
  "Sports",
  "Entertainment",
] as const;
const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState("For you");
  return (
    <div>
      <div className="px-5 py-3">
        <Search />
      </div>
      <div
        className={`mt-1 flex overflow-x-auto whitespace-nowrap border-b border-borderGray text-sm font-semibold text-textGray ${styles.scrollbar}`}
      >
        <div className="flex w-max">
          {tabs.map((tab) => (
            <button
              key={tab}
              className="min-w-32 px-4 py-3 capitalize hover:bg-[#181818]"
              onClick={() => setActiveTab(tab)}
            >
              <span
                className={`pb-2 ${
                  activeTab === tab
                    ? "border-b-4 border-iconBlue text-white"
                    : ""
                }`}
              >
                {tab}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="relative w-full h-96">
        <Image src="/general/post.jpg" alt="event" width={800} height={800} />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 pointer-events-none"></div>
        <div className="absolute bottom-0.5 p-4 ">
          <h1 className="text-xl font-bold text-textGrayLight">
            New event on Liyue !!! Check it now
          </h1>
          <h1 className="text-xs">LIVE</h1>
        </div>
      </div>
      <News />
      <PopularTags />
      <Recommendations descrpipt={true} title={true} />
      <NewsByTitle />
      <Feed />
    </div>
  );
};

export default ExplorePage;
