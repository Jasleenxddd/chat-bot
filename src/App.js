import React, { useState } from "react";
import InboxList from "./components/inboxList";
import ChatWindow from "./components/ChatWindow";
import TabSwitcher from "./components/TabSwitcher";
import CopilotMain from "./components/CopilotMain";
import SuggestedPrompt from "./components/SuggestedPrompt";
import MessageInput from "./components/MessageInput";

function App() {
  const [copilotResponse, setCopilotResponse] = useState("");
  const [inputText, setInputText] = useState("");

  return (
    <div className="min-h-screen flex bg-gray-100 text-sm">
      <div className="w-[280px] border-r bg-white">
        <InboxList />
      </div>

      <div className="min-h-screen flex-1 flex flex-col border-r bg-white">
        <div className="flex-1 overflow-y-auto">
          <ChatWindow inputText={inputText} setInputText={setInputText} />
        </div>
      </div>

      <div className="w-[440px] h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-purple-100 shadow-inner">
        <TabSwitcher />
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <CopilotMain response={copilotResponse} setInputText={setInputText} />
          </div>
          <div className="px-4 py-2">
            <SuggestedPrompt onSelect={() => setCopilotResponse("refund")} />
          </div>
        </div>
        <MessageInput />
      </div>
    </div>
  );
}

export default App;
