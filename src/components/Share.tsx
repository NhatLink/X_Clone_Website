"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ImageEditor from "./ImageEditor";

const Share = () => {
  const [desc, setDesc] = useState("");
  const [media, setMedia] = useState<File | null>(null);
  const [previewURL, setPreviewURL] = useState<string | null>(null);
  // const [mediaList, setMediaList] = useState<File[]>([]);
  // const [previewURLs, setPreviewURLs] = useState<string[]>([]);
  // const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  useEffect(() => {
    if (isEditorOpen) {
      document.body.style.overflow = "hidden"; // Ngăn scroll
    } else {
      document.body.style.overflow = ""; // Cho scroll lại
    }

    // Dọn dẹp nếu component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isEditorOpen]);

  const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("rerere");
    if (e.target.files && e.target.files[0]) {
      setMedia(e.target.files[0]);
      setPreviewURL(URL.createObjectURL(e.target.files[0]));
    }
    e.target.value = "";
  };

  // const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const files = Array.from(e.target.files || []);
  //   const currentImages = mediaList.filter((file) =>
  //     file.type.startsWith("image")
  //   );
  //   const hasVideo = mediaList.some((file) => file.type.startsWith("video"));

  //   const newMedia: File[] = [];
  //   const newPreviews: string[] = [];

  //   for (const file of files) {
  //     if (file.type.startsWith("image")) {
  //       if (
  //         currentImages.length +
  //           newMedia.filter((f) => f.type.startsWith("image")).length <
  //         5
  //       ) {
  //         newMedia.push(file);
  //         newPreviews.push(URL.createObjectURL(file));
  //       }
  //     } else if (file.type.startsWith("video")) {
  //       if (!hasVideo && !newMedia.some((f) => f.type.startsWith("video"))) {
  //         newMedia.push(file);
  //         newPreviews.push(URL.createObjectURL(file));
  //       }
  //     }
  //   }

  //   setMediaList((prev) => [...prev, ...newMedia]);
  //   setPreviewURLs((prev) => [...prev, ...newPreviews]);
  //   e.target.value = "";
  // };
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
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        {media?.type.includes("image") && previewURL && (
          <div className="relative rounded-xl overflow-hidden">
            <Image
              src={previewURL}
              alt=""
              width={600}
              height={600}
              className={`w-full ${
                settings.type === "original"
                  ? "h-full object-contain"
                  : settings.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
            />
            <div
              className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
              onClick={() => setIsEditorOpen(true)}
            >
              Edit
            </div>
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
              onClick={() => {
                setMedia(null);
                setPreviewURL(null);
                console.log("xoa");
              }}
            >
              X
            </div>
          </div>
        )}
        {media?.type.includes("video") && previewURL && (
          <div className="relative">
            <video src={previewURL} controls />
            <div
              className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
              onClick={() => {
                setMedia(null);
                setPreviewURL(null);
              }}
            >
              X
            </div>
          </div>
        )}
        {isEditorOpen && previewURL && (
          <ImageEditor
            onClose={() => setIsEditorOpen(false)}
            previewURL={previewURL}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        {/* {mediaList.map((file, index) => {
          const previewURL = previewURLs[index];
          return file.type.includes("image") ? (
            <div key={index} className="relative rounded-xl overflow-hidden">
              <Image
                src={previewURL}
                alt=""
                width={600}
                height={600}
                className={`w-full ${
                  settings.type === "original"
                    ? "h-full object-contain"
                    : settings.type === "square"
                    ? "aspect-square object-cover"
                    : "aspect-video object-cover"
                }`}
              />
              <div
                className="absolute top-2 left-2 bg-black bg-opacity-50 text-white py-1 px-4 rounded-full font-bold text-sm cursor-pointer"
                onClick={() => {
                  setEditingIndex(index); // index ảnh đang chỉnh
                  setIsEditorOpen(true);
                }}
              >
                Edit
              </div>
              <div
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                onClick={() => {
                  const newMedia = [...mediaList];
                  const newPreviews = [...previewURLs];
                  newMedia.splice(index, 1);
                  newPreviews.splice(index, 1);
                  setMediaList(newMedia);
                  setPreviewURLs(newPreviews);
                }}
              >
                X
              </div>
            </div>
          ) : (
            <div key={index} className="relative">
              <video
                src={previewURL}
                controls
                className="w-full max-w-[600px]"
              />
              <div
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white h-8 w-8 flex items-center justify-center rounded-full cursor-pointer font-bold text-sm"
                onClick={() => {
                  const newMedia = [...mediaList];
                  const newPreviews = [...previewURLs];
                  newMedia.splice(index, 1);
                  newPreviews.splice(index, 1);
                  setMediaList(newMedia);
                  setPreviewURLs(newPreviews);
                }}
              >
                X
              </div>
            </div>
          );
        })}
        {isEditorOpen && editingIndex !== null && previewURLs[editingIndex] && (
          <ImageEditor
            onClose={() => {
              setIsEditorOpen(false);
              setEditingIndex(null);
            }}
            previewURL={previewURLs[editingIndex]}
            settings={settings}
            setSettings={setSettings}
          />
        )} */}

        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div className="flex gap-4 flex-wrap">
            <input
              type="file"
              name="file"
              className="hidden"
              id="file"
              accept="image/*,video/*"
              onChange={handleMediaChange}
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
          <button
            disabled={desc.trim() === "" && media === null}
            type="button"
            className={`font-bold rounded-full py-2 px-4 ${
              desc.trim() === "" && media === null
                ? "bg-gray-500 text-black cursor-not-allowed"
                : "bg-white text-black"
            }`}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default Share;
