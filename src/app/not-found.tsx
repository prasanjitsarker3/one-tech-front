import Link from "next/link";

const NotFound = () => {

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4 mt-16">
            <div className="text-center max-w-md mx-auto">
                {/* Animated 404 text */}
                <div className="relative">
                    <h1 className="text-9xl font-bold text-gray-300 opacity-80 mb-4">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-9xl font-bold text-[#f3982d] animate-pulse">404</h1>
                    </div>
                </div>

                {/* Message */}
                <h2 className="text-3xl font-semibold text-gray-800 mb-2">Oops! Page not found</h2>
                <p className="text-gray-600 mb-8">
                    The page you are looking for does not exist or has been moved.
                </p>

                {/* Home button */}
                <Link href="/" className="px-6 py-3 bg-[#f3982d] hover:bg-[#e08a25] text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">Return to Home </Link>

                {/* Optional search bar */}
                <div className="mt-8">
                    <p className="text-gray-500 mb-2">Or try searching:</p>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#f3982d]"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#f3982d]">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Optional decorative elements - now using orange instead of red */}
            <div className="relative pt-10">
                <div className="absoulate bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 opacity-30">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-10 w-10 text-[#f3982d] animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotFound;