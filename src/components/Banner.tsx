import Image from "next/image";

const Banner = () => (
  <div className="relative w-full h-96">
    <Image src="/general/post.jpg" alt="event" width={800} height={800} />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 pointer-events-none"></div>
    <div className="absolute bottom-0.5 p-4 ">
      <h1 className="text-xl font-bold text-textGrayLight">
        Xinyan showup !!!!!
      </h1>
      <h1 className="text-xs">LIVE</h1>
    </div>
  </div>
);

export default Banner;
