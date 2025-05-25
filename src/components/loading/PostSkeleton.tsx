import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostSkeleton = () => (
  <div className="flex px-4 py-3 border-b border-borderGray">
    <div className="mr-3">
      <Skeleton circle width={40} height={40} />
    </div>
    <div className="flex-1">
      <Skeleton width={100} height={14} />
      <Skeleton count={2} />
      <Skeleton height={200} className="mt-2" />
    </div>
  </div>
);

export default PostSkeleton;
