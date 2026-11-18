function LoadingPage() {
  return (
    <div
      className={`w-full min-h-screen py-20 flex flex-col items-center justify-center bg-base-100`}
    >
      <div className="h-8 w-8 rounded-full border-2 border-gray-300 border-t-gray-500 dark:border-gray-500 dark:border-t-gray-600 animate-spin"></div>

      <p className="mt-3 text-base">{"Loading..."}</p>
    </div>
  );
}

export default LoadingPage;
