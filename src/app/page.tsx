"use client";
// import Feed from "@/components/Feed";
// import Share from "@/components/Share";
import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";
import { useState } from "react";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState<"forYou" | "following">("forYou");

  return (
    <div className="">
      <div className="px-4 flex justify-around text-textGray font-bold border-b-[1px] border-borderGray">
        <button
          onClick={() => setActiveTab("forYou")}
          className="flex-1 flex justify-center items-center hover:bg-[#181818]"
        >
          <span
            className={`pb-3 pt-4 ${
              activeTab === "forYou"
                ? "border-b-4 border-iconBlue text-white"
                : ""
            }`}
          >
            For you
          </span>
        </button>

        <button
          onClick={() => setActiveTab("following")}
          className="flex-1 flex justify-center items-center hover:bg-[#181818]"
        >
          <span
            className={`pb-3 pt-4 ${
              activeTab === "following"
                ? "border-b-4 border-iconBlue text-white"
                : ""
            }`}
          >
            Following
          </span>
        </button>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
