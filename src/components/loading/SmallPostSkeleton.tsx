import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SmallPostSkeleton = () => (
  <div className="flex px-4 py-3 border-b border-borderGray">
    <div className="mr-3">
      <Skeleton width={80} height={80} borderRadius={4} />
    </div>
    <div className="flex-1">
      <Skeleton width={100} height={14} />
      <Skeleton count={1} />
    </div>
  </div>
);

export default SmallPostSkeleton;
