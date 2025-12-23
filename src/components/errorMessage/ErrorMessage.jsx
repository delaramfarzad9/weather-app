export default function ErrorMessage({ 
  title = "Something went wrong", 
  message = "Please try again.", 
  onRetry, 
  onHome 
}) {
  return (
    <div className="flex flex-col items-center justify-center text-center 
                    bg-white/20 backdrop-blur-md border border-white/30 
                    shadow-xl rounded-xl p-8 max-w-sm mx-auto mt-10">

      <p className="text-4xl mb-4">😕</p>

      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-200 mb-6">{message}</p>

      <div className="flex gap-4">
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium"
          >
            Try Again
          </button>
        )}

        {onHome && (
          <button
            onClick={onHome}
            className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg font-medium"
          >
            Home
          </button>
        )}
      </div>
    </div>
  );
}
