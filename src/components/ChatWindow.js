import React, { useState } from "react";
import ChatHeader from "./ChatHeader";
import { IncomingMessage, OutgoingMessage } from "./MessageBubble";
import ChatInput from "./ChatInput";

export default function ChatWindow({ inputText, setInputText }) {
  const [messages, setMessages] = useState([
    {
      type: "incoming",
      text: "I bought a product from your store in November as a Christmas gift...",
      time: "12min",
    },
    {
      type: "outgoing",
      text: "Let me just look into this for you, Luis.",
      time: "1min",
    },
  ]);

  const handleSend = (text) => {
    const newMessage = {
      type: "outgoing",
      text,
      time: "Just now",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen bg-white shadow-md">
      <ChatHeader />
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) =>
          msg.type === "incoming" ? (
            <IncomingMessage key={index} text={msg.text} time={msg.time} />
          ) : (
            <OutgoingMessage key={index} text={msg.text} time={msg.time} />
          )
        )}
      </div>
      <ChatInput
        inputText={inputText}
        setInputText={setInputText}
        onSend={handleSend}
      />
    </div>
  );
}
