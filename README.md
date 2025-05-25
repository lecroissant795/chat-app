# 📬 Send it - Real-Time Messaging Application

## Project Type
Scholarship Digital Technologies Project (2024)

## Purpose
To develop a real-time messaging platform that is fast, private, and user-friendly, designed especially for young users.

## 📌 Overview
Send it is a modern, full-stack messaging web application built using the MERN stack. It aims to provide secure, aesthetically pleasing, and intuitive real-time communication for social and personal use. The app supports private messaging, user authentication, friend requests, and more—optimized for performance and accessibility.

## 🚀 Features

-   🔐 **Secure Authentication:** JWT + Email (SendGrid) Authentication
-   💬 **Real-Time Messaging:** Via Socket.io
-   🧑‍🤝‍🧑 **Friend Request System:** Built-in friend request functionality
-   🎨 **Modern UI:** Dark Mode & Theme Toggle (via MUI)
-   📱 **Responsive Design:** Accessible design for various devices
-   📂 **Multimedia Sharing:** File, Link, and Multimedia Sharing (Planned)
-   📈 **Scalable Backend:** Modular design for future growth
-   ✅ **Testing:** Functional Testing with Postman

## 🧰 Tech Stack

| Layer       | Technology                     |
| ----------- | ------------------------------ |
| Frontend    | ReactJS, Material UI           |
| Backend     | Node.js, Express.js            |
| Database    | MongoDB + Mongoose             |
| Real-time   | Socket.io                      |
| Authentication | JWT + SendGrid (email verification) |
| Dev Tools   | GitHub Desktop, Postman, Figma, Trello |

## 📁 Project Structure

```
client/ (React App)
  └── src/
      ├── components/
      ├── layouts/
      ├── pages/
      ├── redux/
      ├── routes/
      ├── services/
      ├── hooks/
      ├── contexts/
      ├── theme/
      ├── utils/
      ├── App.js
      └── index.js

server/ (Node.js + Express)
  ├── controllers/
  ├── models/
  ├── routes/
  ├── config/
  ├── middleware/
  ├── utils/
  ├── server.js
  ├── .env
  └── nodemon.json
```

## 🛠️ Installation & Setup

### Prerequisites

-   Node.js
-   MongoDB
-   Git
-   SendGrid account (for email verification)

### Steps

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/<your-username>/send-it.git
    cd send-it
    ```

2.  **Install server dependencies:**

    ```bash
    cd server
    npm install
    ```

3.  **Set up environment variables:**

    ```bash
    cp .env.example .env
    ```
    *Fill in required details in the `.env` file: `DB_URI`, `JWT_SECRET`, `SENDGRID_API_KEY`, etc.*

4.  **Start backend:**

    ```bash
    npm run dev
    ```

5.  **Install client dependencies (in a new terminal):**

    ```bash
    cd ../client
    npm install
    ```

6.  **Start frontend:**

    ```bash
    npm start
    ```

## ✅ Testing

-   Authentication flows (Register, Login, Forgot Password) tested via Postman.
-   Real-time chat, friend request flow, and auth integration tested in the frontend.
-   MongoDB tested for data persistence and structure.
-   Debug logs handled using console and handled exceptions.
-   Bug reports and feedback gathered from peer testers.

## 📋 Planning & Methodology

-   **Planning Tool:** Trello (Kanban-style tracking)
-   **Design Tool:** Figma for wireframes and UI concepts
-   **User Testing:** Iterative feedback from real users (students and developers)
-   **Development Process:** Agile + Test-Driven Development (TDD)

## 📈 Future Improvements

-   Group chat support
-   Third-party integrations (e.g., Google Drive)
-   Notification customization
-   Typing indicators, online status visibility
-   Push notifications and mobile support

## 📃 License

This project is for educational and scholarship purposes only.
