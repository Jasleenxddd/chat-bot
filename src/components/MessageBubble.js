import React from "react";

export function IncomingMessage({ text, time }) {
  return (
    <div className="px-4 py-2 flex">
      <div className="max-w-[75%] bg-gray-100 p-3 rounded-xl text-sm text-gray-900">
        {text}
      </div>
      <div className="text-xs text-gray-500 ml-2 mt-auto">{time}</div>
    </div>
  );
}

export function OutgoingMessage({ text, time, avatar }) {
  return (
    <div className="px-4 py-2 flex justify-end">
      <div className="text-xs text-gray-500 mt-auto mr-2 text-right">
        Seen · {time}
      </div>
      <div className="max-w-[75%] bg-indigo-100 p-3 rounded-xl text-sm text-gray-900">
        {text}
      </div>
      {avatar && (
        <img
          src={avatar}
          alt="User avatar"
          className="w-6 h-6 rounded-full object-cover ml-2"
        />
      )}
    </div>
  );
}
