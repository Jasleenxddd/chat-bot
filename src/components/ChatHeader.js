import React from "react";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      <div>
        <h2 className="text-base font-semibold text-gray-900">Luis Easton</h2>
      </div>
      <div className="flex items-center gap-2">
        <button className="text-gray-600 hover:text-black">⋮</button>
        <button className="text-gray-600 hover:text-black px-2 py-1 text-sm border border-gray-300 rounded-md">
          Close
        </button>
      </div>
    </div>
  );
}
