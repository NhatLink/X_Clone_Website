"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleClear = () => {
    setSearchText("");
  };

  const router = useRouter();

  const handleClick = (q: string) => {
    router.push(`/search?q=${q}`);
  };

  return (
    <div className="relative w-full">
      <div className="bg-inputGray py-2 px-4 flex items-center gap-4 rounded-full focus-within:ring-2 focus-within:ring-blue-500">
        <Image src="/icons/explore.svg" alt="search" width={16} height={16} />
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="bg-transparent outline-none placeholder:text-textGray flex-1"
        />
        {searchText && (
          <div
            className="bg-white rounded-full p-1 cursor-pointer"
            onClick={handleClear}
          >
            <Image
              src="/icons/delete-button.svg"
              alt="clear"
              width={10}
              height={10}
            />
          </div>
        )}
      </div>
      {searchText && (
        <div className="rounded-xl border-[1px] border-borderGray flex flex-col absolute top-full left-0 mt-2 bg-black z-10 w-full ">
          <div className="border-b-[1px] border-borderGray">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-start gap-3 pb-3 hover:bg-[#181818] p-3"
                >
                  <Image
                    src="/icons/explore.svg"
                    alt="search"
                    width={26}
                    height={26}
                    className="rounded-md w-9 h-9 p-1"
                  />
                  <div
                    className="flex-col items-center"
                    onClick={() => handleClick("OpenAI")}
                  >
                    <h2 className="text-textGrayLight font-bold">OpenAI</h2>
                    <span className="text-textGray text-sm">20K posts</span>
                  </div>
                </div>
              ))}
          </div>

          {/* TOPICS */}

          {Array(4)
            .fill(0)
            .map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-start gap-3 pb-3 hover:bg-[#181818]  p-3"
              >
                <Image
                  src="/general/avatar.jpeg"
                  alt="search"
                  width={26}
                  height={26}
                  className="rounded-md w-9 h-9"
                />
                <div className="flex-col items-center">
                  <h2 className="text-textGrayLight font-bold">Nhat_Link</h2>
                  <span className="text-textGray text-sm">@NhatLink</span>
                </div>
              </div>
            ))}

          <div className="p-4 hover:bg-[#181818] ">
            <span>{`Go to @${searchText}`}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
