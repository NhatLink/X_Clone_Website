"use client";

import Search from "@/components/Search";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "../explore/explore.module.css";
import Feed from "@/components/Feed";
import Recommendations from "@/components/Recommendations";
const tabs = ["top", "latest", "people", "media", "list"];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams.get("q") || "";
  const filter = searchParams.get("f") || "top"; // Default là 'top'
  const imageUrls = [
    "/general/post.jpg",
    "/general/post.jpg",
    "/general/post.jpg",
    "/general/post.jpg",
    "/general/post.jpg",
    "/general/post.jpg",
    "/general/post.jpg",
    "/general/post.jpg",
    "/general/post.jpg",
  ];
  const handleTabClick = (tab: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("f", tab);
    router.push(`/search?${newParams.toString()}`);
  };

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
      <div className="sticky top-0 backdrop-blur-md z-10 bg-[#00000084]">
        <div className="flex items-center gap-8 p-4 pb-0">
          <button onClick={() => router.back()}>
            <Image src="/icons/back.svg" alt="back" width={24} height={24} />
          </button>
          <Search title={query} />
          <Image src="/icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
        <div className="relative group">
          {/* Arrows */}
          {showBack && (
            <div
              className="absolute top-1 left-3 w-8 h-8 bg-black hover:bg-[#181818] z-20 rounded-full flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => scrollByAmount(-200)}
            >
              <Image src="/icons/back.svg" alt="back" width={18} height={18} />
            </div>
          )}
          {showForward && (
            <div
              className="absolute top-1 right-3 w-8 h-8 bg-black hover:bg-[#181818] z-20 rounded-full flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity"
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
                onClick={() => handleTabClick(tab)}
              >
                <span
                  className={`pb-2 ${
                    filter === tab
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
      </div>
      <div>
        {filter === "top" && (
          <>
            {" "}
            <Recommendations title="People" descrpipt="Haha" />
            <Feed />
          </>
        )}
        {filter === "latest" && (
          <>
            <Feed />
          </>
        )}
        {filter === "people" && (
          <>
            <Recommendations title="People" descrpipt="Haha" />
          </>
        )}
        {filter === "media" && (
          <>
            <div className="grid grid-cols-3 gap-1">
              {imageUrls.map((url, index) => (
                <div key={index} className="w-full aspect-square relative">
                  <Image
                    src={url}
                    alt={`image-${index}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 20vw, 20vw"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </>
        )}
        {filter === "list" && <p>Hiển thị danh sách</p>}
      </div>
    </div>
  );
}
