import Link from "next/link";
import Image from "next/image";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>

      {/* TREND EVENT */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <Image src="/general/post.jpg" alt="event" fill />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">
            New event on Liyue !!! Check it now
          </h2>
          <span className="text-sm text-textGray">9 hour ago</span>
        </div>
      </div>

      {/* TOPICS */}
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <div className="flex items-center justify-between">
              <span className="text-textGray text-sm">
                Technology • Trending
              </span>
              <Image
                src="/icons/infoMore.svg"
                alt="info"
                width={16}
                height={16}
              />
            </div>
            <h2 className="text-textGrayLight font-bold">OpenAI</h2>
            <span className="text-textGray text-sm">20K posts</span>
          </div>
        ))}

      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
