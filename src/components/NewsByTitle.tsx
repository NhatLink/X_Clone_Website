import Image from "next/image";

const NewsByTitle = () => {
  return (
    <div className={`p-4 flex flex gap-4 border-b-[1px] border-borderGray`}>
      {/* TOPICS */}
      {Array(1)
        .fill(0)
        .map((_, i) => (
          <div key={i}>
            <div className="flex items-center mb-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border-1 border-black z-10">
                <Image
                  src="/general/avatar.jpeg"
                  alt="Avatar 3"
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
              <h2 className="text-textGrayLight font-bold ml-1">Nhat_Link</h2>
              <span className="text-textGray">1 day ago</span>
            </div>
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
          </div>
        ))}
    </div>
  );
};

export default NewsByTitle;
