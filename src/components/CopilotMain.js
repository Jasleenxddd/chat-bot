import React from "react";

export default function CopilotMain({ response, setInputText }) {
  if (response === "refund") {
    const refundMessage = `
We understand that sometimes a purchase may not meet your expectations, and you may need to request a refund.

To assist you with your refund request, could you please provide your order ID and proof of purchase?

Please note:
We can only refund orders placed within the last 60 days, and your item must meet our requirements for condition to be returned. Please check when you placed your order before proceeding.

Once I’ve checked these details, if everything looks OK, I will send a returns QR code which you can use to post the item back. Your refund will be automatically issued once you put it in the post.
    `.trim();

    return (
      <div className="p-4 space-y-6 text-sm overflow-y-auto">
        {/* User Message */}
        <div className="flex items-start gap-2">
          <img
            src="https://via.placeholder.com/32"
            alt="You"
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="font-semibold text-sm text-gray-800 mb-1">You</div>
            <button className="px-3 py-2 rounded-xl bg-gray-100 text-gray-800 inline-block max-w-xs cursor-pointer">
              How do I get the refund?
            </button>
          </div>
        </div>

        {/* AI Response */}
        <div className="flex items-start gap-2">
          <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
            ‖‖
          </div>
          <div className="flex-1">
            <div className="font-semibold">Fin</div>
            <div className="mt-1 rounded-xl p-4 text-gray-800 text-sm bg-gradient-to-b from-[#E0DAF8] to-[#FDEBEB] space-y-2">
              {refundMessage.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <button
                onClick={() => setInputText(refundMessage)}
                className="mt-4 w-full text-center border border-gray-300 rounded-md px-4 py-2 text-sm font-medium bg-white hover:bg-gray-50"
              >
                ✏️ Add to composer
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default UI
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="bg-black rounded-full p-2 mb-4">
        <span className="text-white text-xl font-bold">‖‖</span>
      </div>
      <h2 className="text-lg font-semibold">Hi, I'm Fin AI Copilot</h2>
      <p className="text-gray-500 text-sm">Ask me anything about this conversation.</p>
    </div>
  );
}
