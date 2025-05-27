import Link from "next/link";
// import PopularTags from "./PopularTags";
// import Recommendations from "./Recommendations";
import Search from "./Search";
import dynamic from "next/dynamic";
import RightBarSkeleton from "./loading/RightBarSkeleton";
import SmallPostSkeleton from "./loading/SmallPostSkeleton";
const PopularTags = dynamic(() => import("./PopularTags"), {
  loading: () => <SmallPostSkeleton />,
});
const Recommendations = dynamic(() => import("./Recommendations"), {
  loading: () => <RightBarSkeleton />,
});

const RightBar = () => {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <PopularTags />
      <Recommendations />
      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibility</Link>
        <Link href="/">Ads Info</Link>
        <span>© 2025 L Corp.</span>
      </div>
    </div>
  );
};

export default RightBar;
