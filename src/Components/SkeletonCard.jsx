const SkeletonCard = () => {
  return (
    <div className="w-full max-w-sm animate-pulse border rounded-xl p-4 space-y-4 shadow-sm bg-white">
      
      {/* image skeleton */}
      <div className="h-48 bg-gray-300 rounded-lg"></div>

      {/* text skeleton */}
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>

      {/* button skeleton */}
      <div className="h-10 bg-gray-300 rounded w-full"></div>
    </div>
  );
};
export default SkeletonCard