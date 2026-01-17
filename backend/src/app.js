// const express = require("express");
// const cors = require("cors");
// require("dotenv").config();

// const authRoutes = require("./routes/auth.routes");
// const projectRoutes = require("./routes/project.routes");

// const app = express();
// const promptRoutes = require("./routes/prompt.routes");

// app.use("/api/prompts", promptRoutes);


// /* ✅ MIDDLEWARE FIRST */
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// /* ✅ ROUTES AFTER MIDDLEWARE */
// app.use("/api/auth", authRoutes);
// app.use("/api/projects", projectRoutes);

// app.get("/", (req, res) => {
//   res.send("Chatbot Platform API running");
// });

// module.exports = app;

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth.routes");
const projectRoutes = require("./routes/project.routes");
const agentRoutes = require("./routes/agent.routes");
const chatRoutes = require("./routes/chat.routes"); // ✅ ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/agents", agentRoutes);
app.use("/api/chats", chatRoutes); // ✅ ADD THIS

app.get("/", (req, res) => {
  res.send("Chatbot Platform API running");
});

module.exports = app;
