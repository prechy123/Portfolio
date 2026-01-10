"use client"

import Link from "next/link";
import { Home, ArrowBack } from "@mui/icons-material";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen fade-in">
      <div className="text-center md:w-[600px] px-4">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent slide-up">
          404
        </h1>
        <h2 className="text-4xl font-bold mt-4 slide-up" style={{ animationDelay: '0.1s' }}>
          Page Not Found
        </h2>
        <p className="text-xl mt-4 text-gray-600 dark:text-gray-400 slide-up" style={{ animationDelay: '0.2s' }}>
          Oops! The page you are looking for does not exist.
        </p>
        <div className="flex gap-4 justify-center mt-8 slide-up flex-wrap" style={{ animationDelay: '0.3s' }}>
          <Link href="/">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 focus:outline-none focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg flex items-center gap-2"
              aria-label="Go to home page"
            >
              <Home /> Go Home
            </button>
          </Link>
          <button
            type="button"
            onClick={() => window.history.back()}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-6 py-3 transition-all duration-300 hover:scale-105 active:scale-95 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 hover:shadow-lg flex items-center gap-2"
            aria-label="Go back to previous page"
          >
            <ArrowBack /> Go Back
          </button>
        </div>
      </div>
    </section>
  );
}
