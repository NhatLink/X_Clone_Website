import Image from "next/image";

interface UserInfoProps {
  isUser?: boolean;
  username: string;
}

const UserInfo = (props: UserInfoProps) => {
  const { username, isUser } = props;
  return (
    <div className="">
      {/* COVER & AVATAR CONTAINER */}
      <div className="relative w-full">
        {/* COVER */}
        <div className="w-full aspect-[3/1] relative">
          <Image src="/general/cover.jpg" alt="" width={800} height={800} />
        </div>
        {/* AVATAR */}
        <div className="w-1/5 aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-300 absolute top-32 left-3">
          <Image src="/general/avatar.jpeg" alt="" width={150} height={150} />
        </div>
      </div>
      <div className="flex w-full items-center justify-end gap-2 p-2 pt-1">
        <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
          <Image src="/icons/more.svg" alt="more" width={20} height={20} />
        </div>
        <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
          <Image src="/icons/explore.svg" alt="more" width={20} height={20} />
        </div>
        <div className="w-9 h-9 flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
          <Image src="/icons/message.svg" alt="more" width={20} height={20} />
        </div>
        <button className="py-2 px-4 bg-white text-black font-bold rounded-full">
          Follow
        </button>
      </div>
      {/* USER DETAILS */}
      <div className="p-4 flex flex-col gap-2">
        {/* USERNAME & HANDLE */}
        <div className="">
          <h1 className="text-2xl font-bold">{username}</h1>
          <span className="text-textGray text-sm">{`@${username}`}</span>
        </div>
        <p>Just for fun</p>
        {/* JOB & LOCATION & DATE */}
        <div className="flex gap-4 text-textGray text-[15px]">
          <div className="flex items-center gap-2">
            <Image
              src="/icons/userLocation.svg"
              alt="location"
              width={20}
              height={20}
            />
            <span>USA</span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/icons/date.svg" alt="date" width={20} height={20} />
            <span>Joined May 2021</span>
          </div>
        </div>
        {/* FOLLOWINGS & FOLLOWERS */}
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">100</span>
            <span className="text-textGray text-[15px]">Followers</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold">100</span>
            <span className="text-textGray text-[15px]">Followings</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
