import React, { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Welcome! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0); // track conversation step

  const handleSend = () => {
    if (!input.trim()) return;

    // add user message
    setMessages([...messages, { from: "user", text: input }]);

    if (step === 0) {
      // First auto-response
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "Please enter your phone number 📱" },
        ]);
      }, 500);
      setStep(1);
    } else if (step === 1) {
      // Save phone & auto response
      const phone = input.trim();
      // Optionally send to WhatsApp
      window.open(
        `https://wa.me/91YOUR_NUMBER?text=Hello, this is my phone number: ${phone}`,
        "_blank"
      );

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { from: "bot", text: "✅ Thank you! We will connect soon." },
        ]);
      }, 500);
      setStep(2);
    }

    setInput("");
  };

  return (
    <div className="chat">
      {!open && (
        <button className="chat-button" onClick={() => setOpen(true)}>
          💬 Let's Chat!
        </button>
      )}
      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <strong>Chat</strong>
            <button onClick={() => setOpen(false)} aria-label="close">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="chat-body">
            {messages.map((m, i) => (
              <p key={i} className={m.from === "bot" ? "bot-msg" : "user-msg"}>
                {m.text}
              </p>
            ))}
          </div>

          {/* Input */}
          <div className="chat-footer">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
