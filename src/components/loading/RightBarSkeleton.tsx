import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RightBarSkeleton = () => {
  return (
    <div>
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-4 py-3 border-b border-borderGray"
          >
            <div className="mr-3">
              <Skeleton circle width={40} height={40} />
            </div>
            <div className="flex-1">
              <Skeleton width={100} height={14} />
              <Skeleton count={1} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default RightBarSkeleton;
