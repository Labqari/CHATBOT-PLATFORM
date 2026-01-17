# 🤖 Chatbot Platform

A **full‑stack chatbot application** built using **React (Vite)** for the frontend and **Node.js + Express** for the backend. The project demonstrates API integration, client–server communication, and basic authentication logic on the backend.

---

## 📌 Features

### ✅ Frontend

* Built with **React + Vite**
* Simple and clean chatbot UI
* User can type a question and receive AI responses
* Communicates with backend using `fetch` API

### ✅ Backend

* Built with **Node.js & Express**
* REST API for chatbot communication
* `/api/chats` endpoint to handle chat messages
* **Login & Signup functionality implemented in backend** (not yet integrated with frontend)
* Uses environment variables for configuration

---

## 🏗️ Project Structure

```
chatbot-platform/
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Tech Stack

* **Frontend:** React, Vite, JavaScript, HTML, CSS
* **Backend:** Node.js, Express.js
* **Tools:** Git, GitHub, Postman, VS Code
* **Deployment:** Vercel (Frontend)

---

## 🚀 How to Run the Application Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Labqari/chatbot-platform.git
cd chatbot-platform
```

---

### 2️⃣ Run Backend

```bash
cd backend
npm install
npm start
```

* Backend runs on: **[http://localhost:5000](http://localhost:5000)**

---

### 3️⃣ Run Frontend

```bash
cd frontend
npm install
npm run dev
```

* Frontend runs on: **[http://localhost:5173](http://localhost:5173)**

---

## 🔗 API Endpoint

### Chat API

```http
POST /api/chats
```

**Request Body:**

```json
{
  "message": "Hello"
}
```

**Response:**

```json
{
  "reply": "Hi! How can I help you?"
}
```

---

## 🔐 Authentication (Backend Only)

* **Signup API implemented**
* **Login API implemented**
* Authentication logic is fully working on backend
* ❌ Frontend integration is **not yet completed**

---

## 🌐 Deployment

* **Frontend deployed on Vercel**
* Backend tested locally using Postman
* API base URL updated for deployment

> ⚠️ Note: Backend is not publicly hosted yet; demo video shows full working using local backend.

---

## 🎥 Demo Video

* Demo video demonstrates:

  * Frontend chatbot interaction
  * Backend API working locally
  * Chat responses in real time

---

## 📄 Architecture & Design Explanation

* **Client–Server Architecture**
* Frontend sends user input to backend via REST API
* Backend processes input and returns AI response
* Separation of concerns between UI and business logic

---

## 🧑‍💻 Author

**Abqari Laraib**
B.Tech – Information Technology
Aspiring Software Engineer

---

## ⭐ Future Improvements

* Integrate login & signup UI in frontend
* Add authentication middleware
* Improve chatbot UI/UX
* Deploy backend publicly

---

✅ *This project was built as part of an internship assignment submission.*



