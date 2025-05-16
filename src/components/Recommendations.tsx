"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Recommendations = ({
  title = false,
  descrpipt = false,
}: {
  title?: boolean;
  descrpipt?: boolean;
}) => {
  const pathname = usePathname();
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      {title && (
        <h1 className="text-xl font-bold text-textGrayLight">Who to follow</h1>
      )}
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="flex items-center justify-between">
            {/* IMAGE AND USER INFO */}
            <div className="flex items-center gap-2">
              <div className="relative rounded-full overflow-hidden w-10 h-10">
                <Image
                  src="/general/avatar.jpeg"
                  alt="John Doe"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <div>
                <h1 className="text-md font-bold">John Doe</h1>
                <span className="text-textGray text-sm">@johnDoe</span>
                {descrpipt && (
                  <h1 className="text-sm">Love this game bro!!! Play now</h1>
                )}
              </div>
            </div>
            {/* BUTTON */}
            <button className="py-1 px-4 font-semibold bg-white text-black rounded-full">
              Follow
            </button>
          </div>
        ))}
      <Link href="/" className="text-iconBlue">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
