import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-900">Loading...</h1>
        <div className="mt-4">
          <svg
            className="animate-spin h-10 w-10 text-red-900 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 0112 4.472v3.055a4 4 0 10-2 0v5.651zm4 8.237A8.001 8.001 0 014.472 12h3.055a4 4 0 004 4V21.53zm8-5.291a8 8 0 01-8 8v-3.055a4 4 0 102 0v-5.651z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
