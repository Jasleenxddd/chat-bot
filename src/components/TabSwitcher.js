export default function TabSwitcher() {
  return (
    <div className="flex justify-between items-center border-b px-4 py-2">
      <div className="flex space-x-4 text-sm font-medium">
        <span className="text-blue-600 border-b-2 border-blue-600 pb-1 cursor-pointer">
          AI Copilot
        </span>
        <span className="text-gray-500 cursor-pointer">Details</span>
      </div>
      <button className="text-gray-500 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 6.75l4.5 4.5-4.5 4.5" />
        </svg>
      </button>
    </div>
  );
}
