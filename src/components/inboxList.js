import React from "react";
import MessageItem from "./messItem";

const dummyData = [
  {
    avatar: "L",
    name: "Luis · Github",
    message: "Hey! I have a questio...",
    time: "45m",
    waiting: null,
    color: "bg-blue-400",
  },
  {
    avatar: "I",
    name: "Ivan · Nike",
    message: "Hi there, I have a qu...",
    time: "30m",
    waiting: "3min",
    color: "bg-red-500",
  },
  {
    avatar: "L",
    name: "Lead from New York",
    message: "Good morning, let me...",
    time: "40m",
    waiting: null,
    color: "bg-indigo-600",
  },
  {
    avatar: "B",
    name: "Booking API problems",
    message: "Bug report!",
    time: "45m",
    waiting: null,
    color: "bg-gray-600",
  },
  {
    avatar: "M",
    name: "Miracle · Exemplary Bank",
    message: "Hey there, I'm here to...",
    time: "45m",
    waiting: null,
    color: "bg-gray-400",
  },
];

export default function InboxList() {
  return (
    <div className="w-full sm:w-96 min-h-screen bg-white shadow-md rounded-md overflow-hidden">
      <div className="px-4 py-3 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800">Your inbox</h2>
        <div className="flex justify-between text-sm mt-2">
          <span className="text-blue-600 font-medium">5 Open</span>
          <span className="text-gray-600 mr-16 pr-8">Waiting longest ▾</span>
        </div>
      </div>

      <div>
        {dummyData.map((user, index) => (
          <MessageItem key={index} user={user} />
        ))}
      </div>
    </div>
  );
}
