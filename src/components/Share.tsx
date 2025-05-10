"use client";

import React, { useState } from "react";
import Image from "next/image";
// import { shareAction } from "@/actions";
// import ImageEditor from "./ImageEditor";

const Share = () => {
  return (
    <form className="p-4 flex gap-4 border-b-[1px] border-borderGray">
      {/* AVATAR */}
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image src="/general/avatar.jpeg" alt="" width={100} height={100} />
      </div>
      {/* OTHERS */}
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          name="desc"
          placeholder="What is happening?!"
          className="h-10 bg-transparent outline-none placeholder:text-textGray text-xl"
        />
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              className="hidden"
              id="file"
              accept="image/*,video/*"
            />
            <label htmlFor="file">
              <Image
                src="icons/image.svg"
                alt=""
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </label>
            <Image
              src="icons/gif.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
              title="Ảnh gif"
            />
            <Image
              src="icons/poll.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/emoji.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/schedule.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
            <Image
              src="icons/location.svg"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
