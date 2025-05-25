"use client";

import { useSearchParams, useRouter } from "next/navigation";

const TABS = ["top", "latest", "people", "media", "list"];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get("q") || "";
  const filter = searchParams.get("f") || "top"; // Default là 'top'

  const handleTabClick = (tab: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("f", tab);
    router.push(`/search?${newParams.toString()}`);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">Kết quả cho: {query}</h1>

      <div className="flex gap-4 mt-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`capitalize px-4 py-2 border-b-2 ${
              filter === tab
                ? "border-black font-bold"
                : "border-transparent text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-6">
        {/* Hiển thị nội dung tương ứng với tab */}
        {filter === "top" && <p>Hiển thị kết quả Top</p>}
        {filter === "latest" && <p>Hiển thị kết quả Mới nhất</p>}
        {filter === "people" && <p>Hiển thị kết quả Người dùng</p>}
        {filter === "media" && <p>Hiển thị kết quả Media</p>}
        {filter === "list" && <p>Hiển thị danh sách</p>}
      </div>
    </div>
  );
}
