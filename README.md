🚀 Chatbot Platform – Software Engineer Intern Assignment

📌 Overview
This project is a full-stack chatbot platform where users can interact with an AI-powered agent.
The system supports multiple projects, agents, prompts, and chat history stored in a database.

🛠 Tech Stack

Frontend

React (Vite)

Fetch API

Backend

Node.js

Express.js

Prisma ORM

PostgreSQL

OpenRouter (AI API)

🧱 Core Features

User authentication using JWT

Project-based chatbot agents

Custom system prompts per agent

AI responses using OpenRouter

Chat history stored in PostgreSQL

🗂 Project Structure
chatbot-platform/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   ├── prisma/
│   └── server.js
│
├── frontend/
│   ├── src/
│   └── App.jsx
│
└── README.md

▶️ How to Run the Application (Local)
1️⃣ Backend Setup
cd backend
npm install
npm run dev


Backend runs at:

http://localhost:5000

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🌐 Hosted Frontend

Frontend UI is deployed on Vercel:

https://chatbot-platform-two.vercel.app


⚠️ Note: Backend is not deployed.
For full functionality, backend must be run locally (shown in demo video).

🔐 Environment Variables

Backend .env

DATABASE_URL=postgresql://...
JWT_SECRET=your_secret
OPENROUTER_API_KEY=your_key


Frontend .env

VITE_API_URL=http://localhost:5000

🎥 Demo

A complete demo video is included showing:

Backend running locally

Frontend interacting with AI

Data stored in PostgreSQL

✅ Status

✔ Fully working
✔ All requirements implemented
✔ Clean architecture

👤 Author

Abqari Laraib
