import React, { useRef, useState, useEffect } from "react";
import {
  Bold,
  Italic,
  Code2,
  Link as LinkIcon,
  Heading1,
  Heading2
} from "lucide-react";

export default function ChatInput({ inputText, setInputText, onSend  }) {
  const contentRef = useRef(null);
  const [showToolbar, setShowToolbar] = useState(false);
  const [showToneOptions, setShowToneOptions] = useState(false);
  const [selection, setSelection] = useState("");

  useEffect(() => {
    if (contentRef.current && inputText) {
      contentRef.current.innerText = inputText;
    }
  }, [inputText]);

  const handleClick = () => {
    setShowToolbar(true);
    selectAllText();
  };

  const selectAllText = () => {
    const el = contentRef.current;
    if (el) {
      const range = document.createRange();
      range.selectNodeContents(el);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      setSelection(sel.toString());
    }
  };

  const applyEdit = (editType) => {
    if (!selection) return;

    let edited = selection;
    switch (editType) {
      case "rephrase":
        edited = `Rephrased: ${selection}`;
        break;
      case "friendly":
        edited = `More friendly: ${selection}`;
        break;
      case "formal":
        edited = `More formal: ${selection}`;
        break;
      case "grammar":
        edited = `Grammar Fixed: ${selection}`;
        break;
      case "translate":
        edited = `Translated: ${selection}`;
        break;
      default:
        break;
    }

    setInputText(edited);
    contentRef.current.innerText = edited;
    setShowToolbar(false);
    setShowToneOptions(false);
  };

  const applyFormat = (command, value = null) => {
    document.execCommand(command, false, value);
  };
   const handleSend = () => {
    const text = contentRef.current.innerText.trim();
    if (!text) return;
    onSend(text);
    contentRef.current.innerText = "";
    setInputText("");
  };

  return (
    <div className="relative border-t border-gray-200 p-3 bg-white">
      {showToolbar && (
        <div className="absolute top-[-180px] left-0 z-30 bg-white shadow-lg border rounded-lg px-3 py-2 text-sm w-56">
          {/* Text Actions */}
          <button
            className="block w-full text-left hover:bg-gray-100 px-2 py-1 rounded"
            onClick={() => applyEdit("rephrase")}
          >
            Rephrase
          </button>

          <div className="relative">
            <button
              className="block w-full text-left hover:bg-gray-100 px-2 py-1 rounded"
              onClick={() => setShowToneOptions(!showToneOptions)}
            >
              My tone of voice
            </button>
            {showToneOptions && (
              <div className="absolute left-full top-0 ml-2 w-40 bg-white border shadow rounded-md text-sm z-40">
                <button
                  className="block w-full text-left hover:bg-gray-100 px-2 py-1"
                  onClick={() => applyEdit("friendly")}
                >
                  More friendly
                </button>
                <button
                  className="block w-full text-left hover:bg-gray-100 px-2 py-1"
                  onClick={() => applyEdit("formal")}
                >
                  More formal
                </button>
              </div>
            )}
          </div>

          <button
            className="block w-full text-left hover:bg-gray-100 px-2 py-1 rounded"
            onClick={() => applyEdit("grammar")}
          >
            Fix grammar & spelling
          </button>

          <button
            className="block w-full text-left hover:bg-gray-100 px-2 py-1 rounded"
            onClick={() => applyEdit("translate")}
          >
            Translate...
          </button>

          {/* Toolbar with Icons */}
          <div className="mt-2 flex justify-between pt-2 border-t border-gray-200">
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => applyFormat("bold")}
            >
              <Bold className="w-4 h-4" />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => applyFormat("italic")}
            >
              <Italic className="w-4 h-4" />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => applyFormat("insertHTML", "<code>")}
            >
              <Code2 className="w-4 h-4" />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() =>
                applyFormat("createLink", prompt("Enter the URL:", "https://"))
              }
            >
              <LinkIcon className="w-4 h-4" />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => applyFormat("formatBlock", "H1")}
            >
              <Heading1 className="w-4 h-4" />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => applyFormat("formatBlock", "H2")}
            >
              <Heading2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      


      {/* Chat Input Area with Send Button */}
      <div className="flex items-center border border-gray-300 rounded-lg px-4 py-2 text-sm min-h-[70px]">
        <div
          ref={contentRef}
          className="flex-1 focus:outline-none cursor-text"
          contentEditable
          onClick={handleClick}
          suppressContentEditableWarning={true}
        />
        <button
          onClick={handleSend}
          className="ml-2 text-blue-600 font-semibold hover:underline"
        >
          Send
        </button>
      </div>
    </div>
  );
}
