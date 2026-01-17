# 🤖 Chatbot Platform – Software Engineer Intern Assignment

A full-stack AI chatbot platform where users can create projects, configure agents with custom prompts, and interact with an AI model.  
The system stores chat history and supports project-based isolation.

---

## 📌 Overview

This project demonstrates a **production-style chatbot architecture** using a modern tech stack.  
It includes authentication, database persistence, AI integration, and a simple frontend UI.

---

## 🛠 Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🌐 Fetch API
- 🎨 Simple UI for chat interaction

### Backend
- 🟢 Node.js
- 🚀 Express.js
- 🧬 Prisma ORM
- 🐘 PostgreSQL
- 🤖 OpenRouter AI API
- 🔐 JWT Authentication

---

## ✨ Features

- User authentication using JWT
- Project-based chatbot system
- Agent configuration with custom system prompts
- AI-powered responses
- Chat history stored in PostgreSQL
- Clean REST API architecture

---

## 🧱 Architecture

# 🤖 Chatbot Platform – Software Engineer Intern Assignment

A full-stack AI chatbot platform where users can create projects, configure agents with custom prompts, and interact with an AI model.  
The system stores chat history and supports project-based isolation.

---

## 📌 Overview

This project demonstrates a **production-style chatbot architecture** using a modern tech stack.  
It includes authentication, database persistence, AI integration, and a simple frontend UI.

---

## 🛠 Tech Stack

### Frontend
- ⚛️ React (Vite)
- 🌐 Fetch API
- 🎨 Simple UI for chat interaction

### Backend
- 🟢 Node.js
- 🚀 Express.js
- 🧬 Prisma ORM
- 🐘 PostgreSQL
- 🤖 OpenRouter AI API
- 🔐 JWT Authentication

---

## ✨ Features

- User authentication using JWT
- Project-based chatbot system
- Agent configuration with custom system prompts
- AI-powered responses
- Chat history stored in PostgreSQL
- Clean REST API architecture

---

## 🧱 Architecture

Frontend (React)
|
| HTTP (JSON)
↓
Backend (Express + Prisma)
|
↓
PostgreSQL Database
|
↓
OpenRouter AI API


**Flow:**
1. User sends a message from the frontend
2. Backend validates user, project, and agent
3. System prompts are combined
4. Message is sent to OpenRouter
5. AI response is stored in database
6. Response is returned to frontend

---

## 🗂 Project Structure

chatbot-platform/
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── middleware/
│ │ └── utils/
│ ├── prisma/
│ └── server.js
│
├── frontend/
│ ├── src/
│ └── App.jsx
│
└── README.md


---

## ▶️ How to Run the Application (Local Setup)

### 1️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev

Backend will run at:
http://localhost:5000

### 2️⃣ Frontend Setup
cd frontend
npm install
npm run dev

Front-end will run at:
http://localhost:5173

🌐 Hosted Frontend Demo

The frontend UI is deployed on Vercel:

🔗 Live Demo:
https://chatbot-platform-two.vercel.app

⚠️ Note:
The backend is intentionally kept local for this assignment.
A full working demo (frontend + backend + database) is shown in the demo video.

Backend (.env)
DATABASE_URL=postgresql://username:password@localhost:5432/chatbot_db
JWT_SECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key

Frontend (.env)
VITE_API_URL=http://localhost:5000


🎥 Demo Video

The demo video demonstrates:

Backend running locally

Frontend chat interaction

AI responses

Database persistence using PostgreSQL

✅ Assignment Status

✔ Backend complete

✔ Frontend complete

✔ AI integration working

✔ Database schema finalized

✔ Clean and scalable architecture

👤 Author

Abqari Laraib
Software Engineer Intern Applicant
