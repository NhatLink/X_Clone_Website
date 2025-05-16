import Link from "next/link";
import Image from "next/image";

const News = () => {
  return (
    <div className="p-4  border-b-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">{"Today's"} News</h1>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="py-3">
            <h1 className="text-md font-bold">
              Skirk has appeared in the next version!!!
            </h1>
            <div className="flex items-center">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border-1 border-black-white z-30">
                <Image
                  src="/general/avatar.jpeg"
                  alt="Avatar 1"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="relative w-6 h-6 rounded-full overflow-hidden border-1 border-black -ml-2 z-20">
                <Image
                  src="/general/avatar.jpeg"
                  alt="Avatar 2"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div className="relative w-6 h-6 rounded-full overflow-hidden border-1 border-black -ml-2 z-10">
                <Image
                  src="/general/avatar.jpeg"
                  alt="Avatar 3"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>

              <span className="text-textGray text-sm ml-1">
                {" "}
                18 hours ago · News · 1.2M posts
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default News;
