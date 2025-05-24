import React from "react";

export default function MessageInput({ activeUser }) {
  if (!activeUser) return null; // Hide input if no message selected

  return (
    <div className="border-t p-3 bg-white">
      {/* Optional: show active user name */}
      <div className="text-sm text-gray-500 mb-1 px-1">
        Messaging <span className="font-semibold text-gray-800">{activeUser.name}</span>
      </div>

      <div className="flex items-center">
        <input
          type="text"
          placeholder={`Message ${activeUser.name.split("·")[0].trim()}...`}
          className="flex-1 px-3 py-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button className="ml-2 text-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 rotate-45"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
