import React from "react";

export default function MessageItem({ user }) {
  return (
    <div className="flex items-center justify-between py-3 px-4 hover:bg-gray-100 cursor-pointer">
      <div className="flex items-start space-x-3">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold ${user.color}`}>
          {user.avatar}
        </div>
        <div>
          <div className="text-sm font-medium text-gray-900">{user.name}</div>
          <div className="text-xs text-gray-500">{user.message}</div>
        </div>
      </div>

      <div className="flex flex-col items-end">
        {user.waiting && (
          <span className="text-[10px] bg-yellow-300 text-black px-2 py-0.5 rounded-full mb-1">
            {user.waiting}
          </span>
        )}
        <span className="text-xs text-gray-500">{user.time}</span>
      </div>
    </div>
  );
}
