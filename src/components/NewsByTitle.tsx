"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "../app/explore/explore.module.css";
import { useEffect, useRef, useState } from "react";

interface Prop {
  title?: string;
}

const NewsByTitle = (props: Prop) => {
  const { title } = props;
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
    <div className="pb-4 flex flex-col gap-0 border-b-[1px] border-borderGray">
      <div className="flex px-4 py-3 items-center justify-between bg-[#00000084] hover:bg-[#181818]">
        <h1 className="text-xl font-bold text-textGrayLight">{title}</h1>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src="/icons/forward.svg" alt="back" width={24} height={24} />
          </Link>
          <Image src="/icons/infoMore.svg" alt="info" width={16} height={16} />
        </div>
      </div>
      <div className="relative group px-3">
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

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          className={`flex gap-4 overflow-x-auto scroll-smooth ${styles.scrollbar}`}
        >
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <Link
                href={`/Nhat_Link/status/123`}
                key={i}
                className="w-80 shrink-0 p-3 border-[1px] border-borderGray rounded-2xl"
              >
                <div className="flex items-center mb-2 justify-between">
                  <div className="flex items-center gap-1">
                    <div className="relative w-6 h-6 rounded-full overflow-hidden border-1 border-black z-10">
                      <Image
                        src="/general/avatar.jpeg"
                        alt="Avatar"
                        width={100}
                        height={100}
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-textGrayLight font-bold ml-1">
                      Nhat_Link
                    </h2>
                  </div>
                  <span className="text-textGray">1 day ago</span>
                </div>
                <div className="flex gap-4">
                  <div className="w-20 aspect-square relative rounded-xl overflow-hidden">
                    <Image
                      src="/general/post.jpg"
                      alt="event"
                      fill
                      className="object-cover"
                      sizes="10vw"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold text-textGrayLight">
                      New event on Liyue !!! Check it now
                    </h2>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default NewsByTitle;
