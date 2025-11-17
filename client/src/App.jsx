import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ChatWindow from "./components/ChatWindow";
import MessageInput from "./components/MessageInput";
import UserList from "./components/UserList";

const socket = io("http://localhost:3000");

function App() {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);

  useEffect(() => {
    // Receive messages from server
    socket.on("receiveMessage", (message) => {
      setMessages((prev) => [...prev, message]);
    });

    // Update online users
    socket.on("updateUsers", (usersList) => {
      setUsers(usersList);
    });

    // Typing indicator
    socket.on("userTyping", (typingUser) => {
      if (!typingUsers.includes(typingUser)) {
        setTypingUsers((prev) => [...prev, typingUser]);
        setTimeout(() => {
          setTypingUsers((prev) => prev.filter((u) => u !== typingUser));
        }, 2000);
      }
    });
  }, []);

  const handleJoin = () => {
    if (username.trim()) {
      socket.emit("join", username);
      setJoined(true);
    }
  };

  const handleSendMessage = (text) => {
    const message = {
      sender: username,
      text,
      timestamp: new Date().toLocaleTimeString(),
    };
    socket.emit("sendMessage", message);
    setMessages((prev) => [...prev, message]);
  };

  const handleTyping = () => {
    socket.emit("typing", username);
  };

  return (
    <div className="app-container">
      {!joined ? (
        <div className="login-box">
          <h2>Enter Username</h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={handleJoin}>Join Chat</button>
        </div>
      ) : (
        <div className="chat-container">
          <UserList users={users} />
          <div className="chat-area">
            <ChatWindow messages={messages} />
            <div className="typing-indicator">
              {typingUsers.length > 0 && (
                <small>{typingUsers.join(", ")} is typing...</small>
              )}
            </div>
            <MessageInput
              onSend={handleSendMessage}
              onTyping={handleTyping}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
