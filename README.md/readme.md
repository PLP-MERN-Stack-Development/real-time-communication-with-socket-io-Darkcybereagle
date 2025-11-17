
# 🗨️ Real-Time Chat Application (Socket.io + Node.js + React)

A complete real-time chat application built with **Node.js**, **Express**, **Socket.io**, and **React**.
This project demonstrates **live messaging**, **typing indicators**, **online/offline status**, **private messages**, and **real-time notifications**.


## 🚀 Features

### 🔹 Core Features

* Real-time messaging
* Global (public) chat room
* Simple username login
* User online/offline status
* Typing indicator
* Timestamps on all messages

### 🔹 Advanced Features

* Private chats between two users
* Multiple chat rooms
* Read receipts
* Message reactions (👍❤️😂)
* Image/file sharing
* Notification sounds
* Browser notifications
* Unread message count

### 🔹 Performance Enhancements

* Pagination for old messages
* Reconnection logic
* Delivery acknowledgment
* Message search
* Fully responsive UI


## 📁 Project Structure


root/
│
├── server/
│   ├── index.js
│   ├── controllers/
│   ├── models/
│   ├── sockets/
│   └── utils/
│
└── client/
    ├── public/
    └── src/
        ├── components/
        └── styles/
```



## 🛠️ Installation

### 1️⃣ Install backend dependencies


cd server
npm install


### 2️⃣ Install frontend dependencies


cd ../client
npm install




## ▶️ How to Run

### Start backend


cd server
npm run dev


### Start frontend


cd client
npm run dev


* Frontend: [http://localhost:5173](http://localhost:5173)
* Backend: [http://localhost:5000](http://localhost:5000)



## 🧠 How It Works

1. Client connects to server using Socket.io
2. User joins the chat with a username
3. Messages are sent/received in real time
4. Users entering/leaving update online list
5. Typing events show “User is typing…”
6. Private messages use Socket.io rooms




## 📝 Author

IBRAHIM TAHIR ENESI
Week 5 — Real-Time Communication with Socket.io Assignment
