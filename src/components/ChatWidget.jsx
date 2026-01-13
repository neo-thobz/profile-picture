import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const toggleOpen = () => setIsOpen(!isOpen);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { sender: "bot", text: data.reply || "No response" };

      // Simulate typing delay
      setTimeout(() => {
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 800); // slightly longer for realism
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Error contacting the API." },
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {/* Chat toggle button */}
      <div className="relative">
        <button
          onClick={toggleOpen}
          className={`bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-800 transition-all duration-300 ${
            isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          💬
        </button>

        {/* Chat window with fade animation */}
        <div
          className={`flex flex-col w-80 h-96 bg-gray-900 border border-gray-700 rounded-xl shadow-xl overflow-hidden transition-all duration-300 ${
            isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between bg-gray-800 text-white px-4 py-2 border-b border-gray-700">
            <span className="font-semibold">Chat with my CV's AI</span>
            <button
              onClick={toggleOpen}
              className="font-bold hover:text-gray-400"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2 bg-gray-900">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${msg.sender === "user" ? "text-right" : "text-left"}`}
              >
                <div
                  className={`inline-block px-3 py-1 rounded-lg max-w-[70%] break-words ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-200"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {/* Typing bubbles */}
            {isTyping && (
              <div className="flex items-center space-x-1 text-left">
                <div className="inline-block px-3 py-1 rounded-lg max-w-[30%] bg-gray-800 text-gray-200">
                  <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounceDelay1"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounceDelay2"></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounceDelay3"></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-700 p-2 bg-gray-800">
            <input
              type="text"
              className="flex-1 bg-gray-900 border border-gray-700 text-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button
              onClick={sendMessage}
              className="ml-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind custom bounce delays for dots */}
      <style jsx>{`
        @keyframes bounceDelay {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        .animate-bounceDelay1 { animation: bounceDelay 1.4s infinite ease-in-out 0s; }
        .animate-bounceDelay2 { animation: bounceDelay 1.4s infinite ease-in-out 0.2s; }
        .animate-bounceDelay3 { animation: bounceDelay 1.4s infinite ease-in-out 0.4s; }
      `}</style>
    </div>
  );
}
