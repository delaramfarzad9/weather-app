export default function ErrorMessage({
  title = "Something went wrong",
  message = "Please try again.",
  onRetry,
  onHome,
}) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center 
                    bg-white/10 backdrop-blur-xl border border-white/20 
                    shadow-2xl rounded-3xl p-8 max-w-sm mx-auto my-auto min-h-fit"
    >
      <p className="text-4xl mb-4">😕</p>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-200 mb-6">{message}</p>

      <div className="flex gap-4">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-5 py-2 bg-yellow-500 hover:bg-yellow-400 text-gray-900 rounded-full font-semibold cursor-pointer transition"
          >
            Try Again
          </button>
        )}

        {onHome && (
          <button
            onClick={onHome}
            className="px-5 py-2 bg-white/20 hover:bg-white/30 rounded-full font-medium cursor-pointer transition"
          >
            Home
          </button>
        )}
      </div>
    </div>
  );
}
