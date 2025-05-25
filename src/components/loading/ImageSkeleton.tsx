import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ImageSkeleton = () => (
  <div className="px-4 py-3 border-b border-borderGray">
    <div className="mr-3">
      <Skeleton width={100} height={14} />
    </div>
    <div className="flex-1">
      <Skeleton height={150} className="mt-2" />
    </div>
  </div>
);

export default ImageSkeleton;
