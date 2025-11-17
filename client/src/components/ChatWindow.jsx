import React, { useEffect, useRef } from "react";

function ChatWindow({ messages }) {
  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-window">
      {messages.map((msg, index) => (
        <div key={index} className="message">
          <strong>{msg.sender}</strong>: {msg.text}{" "}
          <span className="timestamp">{msg.timestamp}</span>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

export default ChatWindow;
