const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      <div className="p-8 rounded-t-lg bg-gray-300 dark:bg-gray-700 h-48"></div>
      <div className="px-5 pb-5">
        <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
        <div className="flex items-center mt-2.5 mb-5">
          <div className="flex items-center space-x-1 rtl:space-x-reverse">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-4 h-4 bg-gray-300 dark:bg-gray-700 rounded"
              ></div>
            ))}
          </div>
          <div className="bg-gray-300 dark:bg-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-sm ms-3 w-10 h-5"></div>
        </div>
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-1/3"></div>
          <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded-lg w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
