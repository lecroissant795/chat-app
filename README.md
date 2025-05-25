📬 Send it - Real-Time Messaging Application
Project Type: Scholarship Digital Technologies Project (2024)
Purpose: To develop a real-time messaging platform that is fast, private, and user-friendly, designed especially for young users.

📌 Overview
Send it is a modern, full-stack messaging web application built using the MERN stack. It aims to provide secure, aesthetically pleasing, and intuitive real-time communication for social and personal use. The app supports private messaging, user authentication, friend requests, and more—optimized for performance and accessibility.

🚀 Features
	•	🔐 Secure JWT + Email (SendGrid) Authentication
	•	💬 Real-Time Messaging via Socket.io
	•	🧑‍🤝‍🧑 Friend Request System
	•	🎨 Dark Mode & Theme Toggle (via MUI)
	•	📱 Responsive, Accessible Design
	•	📂 File, Link, and Multimedia Sharing (Planned)
	•	📈 Scalable backend architecture with modular design
	•	✅ Functional Testing with Postman

 🧰 Tech Stack
 Layer
Technology
Frontend
ReactJS, Material UI
Backend
Node.js, Express.js
Database
MongoDB + Mongoose
Real-time
Socket.io
Authentication
JWT + SendGrid (email verification)
Dev Tools
GitHub Desktop, Postman, Figma, Trello

📁 Project Structure
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

🛠️ Installation & Setup
Prerequisites
	•	Node.js
	•	MongoDB
	•	Git
	•	SendGrid account (for email verification)
Steps
# Clone the repository
git clone https://github.com/<your-username>/send-it.git
cd send-it

# Install server dependencies
cd server
npm install

# Set up environment variables
cp .env.example .env
# Fill in required details: DB_URI, JWT_SECRET, SENDGRID_API_KEY, etc.

# Start backend
npm run dev

# In a new terminal, install client dependencies
cd ../client
npm install

# Start frontend
npm start

✅ Testing
	•	Register/Login/Forgot Password tested via Postman
	•	Real-time chat, friend request flow, and auth integration tested in frontend
	•	MongoDB tested for data persistence and structure
	•	Debug logs handled using console and handled exceptions
	•	Bug reports and feedback gathered from peer testers
 
📋 Planning & Methodology
	•	Planning Tool: Trello (Kanban-style tracking)
	•	Design Tool: Figma for wireframes and UI concepts
	•	User Testing: Iterative feedback from real users (students and developers)
	•	Development Process: Agile + Test-Driven Development (TDD)
 
📈 Future Improvements
	•	Group chat support
	•	Third-party integrations (e.g. Google Drive)
	•	Notification customisation
	•	Typing indicators, online status visibility
	•	Push notifications and mobile support
 
📃 License
This project is for educational and scholarship purposes only.
