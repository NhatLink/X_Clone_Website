"use client";
import Feed from "@/components/Feed";
import News from "@/components/News";
import NewsByTitle from "@/components/NewsByTitle";
import PopularTags from "@/components/PopularTags";
import Recommendations from "@/components/Recommendations";
import Search from "@/components/Search";
import Image from "next/image";
import { use, useEffect, useRef, useState } from "react";
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showBack, setShowBack] = useState(false);
  const [showForward, setShowForward] = useState(true);
  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowBack(scrollLeft > 0);
    setShowForward(scrollLeft + clientWidth < scrollWidth - 1); // nhỏ hơn scrollWidth 1px để tránh lỗi làm tròn
  };
  const scrollByAmount = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: "smooth" });
  };

  useEffect(() => {
    const current = scrollRef.current;
    if (current) {
      current.addEventListener("scroll", handleScroll);
      handleScroll(); // gọi ban đầu để thiết lập trạng thái
    }
    return () => current?.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <div className="px-5 py-3">
        <Search />
      </div>
      <div className="relative group">
        {/* Arrows */}
        {showBack && (
          <div
            className="absolute bottom-1/2 left-3 w-8 h-8 bg-black hover:bg-[#181818] z-20 rounded-full flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scrollByAmount(-200)}
          >
            <Image src="/icons/back.svg" alt="back" width={18} height={18} />
          </div>
        )}
        {showForward && (
          <div
            className="absolute bottom-1/2 right-3 w-8 h-8 bg-black hover:bg-[#181818] z-20 rounded-full flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => scrollByAmount(200)}
          >
            <Image
              src="/icons/forward.svg"
              alt="forward"
              width={18}
              height={18}
            />
          </div>
        )}
        <div
          ref={scrollRef}
          className={`mt-1 flex overflow-x-auto border-b border-borderGray text-sm font-semibold text-textGray ${styles.scrollbar}`}
        >
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
            Xinyan showup !!!!!
          </h1>
          <h1 className="text-xs">LIVE</h1>
        </div>
      </div>
      <News />
      <PopularTags />
      <Recommendations descrpipt={true} title={true} />
      <NewsByTitle title="Sport" />
      <NewsByTitle title="Entertainment" />
      <NewsByTitle title="Fashion" />
      <Feed />
    </div>
  );
};

export default ExplorePage;
