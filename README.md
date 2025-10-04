# 🧾 Xpensly – Smart Expense Management System

## 💡 Overview

Xpensly is a modern expense management platform that simplifies how employees submit expenses, managers approve them, and admins control the overall workflow.
It’s built to eliminate manual approvals, reduce delays, and provide full transparency in the reimbursement process — all in one sleek dashboard.

## 🎯 Key Features

### 👩‍💼 For Employees:

- Submit expenses with descriptions and receipts
- Track approval status in real time
- Get instant notifications upon approval or rejection

### 👨‍💼 For Managers:

- View pending expense requests
- Approve, reject, or comment on submissions
- See employee spending analytics

### 🛡️ For Admins:

- Create and manage approval rules
- Assign managers and control approval hierarchy
- Monitor all user activity across departments

### 🧱 Tech Stack

Category	->        Technology
Frontend	   :      React.js, Tailwind CSS
Backend	       :      Node.js, Express.js
Icons & UI	   :      Lucide React, ShadCN-inspired cards
Routing	       :       React Router DOM
Tooling	       :       Vite for fast development builds

### ⚙️ Installation & Setup

- 1️⃣ Clone the repository:
git clone https://github.com/your-username/xpensly.git

- 2️⃣ Navigate to the project directory:
cd xpensly

- 3️⃣ Install dependencies:

#### For the client:
cd client
npm install

#### For the server:
cd ../server
npm install

- 4️⃣ Start both servers:

###### Client (React app):
npm run dev

###### Server (Node.js backend):
node server.js

### 📁 Folder Structure

Expense_Reimburser/
xpensly/
│
├── client/               # React Frontend
│   ├── src/
│   │   ├── pages/        # Pages (Home, Login, Dashboard)
│   │   ├── components/   # UI components
│   │   └── App.jsx       # Main React file
│   └── package.json
│
├── server/               # Express Backend
│   ├── models/           # Mongoose models (User, Request, Rules)
│   ├── routes/           # API endpoints
│   └── server.js         # Entry point
│
└── README.md

### 🌟 UI Highlights

- Clean two-column admin dashboard
- Gradient login cards with icons
- Smooth hover and transition animations
- Responsive design for all devices

### 💬 Future Enhancements

- 🔒 JWT Authentication for secure logins
- 📊 Advanced analytics dashboard for admins
- 📱 Mobile app integration (React Native)
- 📧 Email notifications for approvals/rejections

### 👩‍💻 Contributor

- Garima Mittal

### 🏆 Acknowledgments

- This project was developed as part of a Hackathon Challenge to modernize expense approval systems using full-stack automation.
