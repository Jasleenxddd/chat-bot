import PropTypes from "prop-types";

export default function SuggestedPrompt({ onSelect }) {
  return (
    <div className="px-4">
      <span className="text-xs text-gray-500">Suggested</span>
      <div
        className="inline-block mt-1 bg-white border px-3 py-1 rounded-full text-sm shadow cursor-pointer"
        onClick={onSelect}
      >
        💡 How do I get a refund?
      </div>
    </div>
  );
}

SuggestedPrompt.propTypes = {
  onSelect: PropTypes.func.isRequired,
};
