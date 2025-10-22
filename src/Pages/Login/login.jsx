export default function LoginSignupPage() {
  const handleGoogleAuth = () => {
    window.location.href = "http://localhost:3000/auth/google/callback";
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-800/40 backdrop-blur-lg p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-hero text-white mb-6">Welcome to Parsec</h1>
        <div className="flex flex-col gap-4">
          <button
            className="text-white bg-gradient-to-br from-blue-500 to-cyan-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-800 rounded-lg px-6 py-3 font-semibold"
            onClick={handleGoogleAuth}
          >
            Sign In with Google
          </button>
          <a
            href="/"
            className="text-sm text-gray-200 underline hover:text-white"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}
