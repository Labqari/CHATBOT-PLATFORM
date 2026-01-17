require("dotenv").config({ path: require("path").resolve(__dirname, ".env.local") });

console.log("🔥 OPENROUTER KEY AT BOOT:", process.env.OPENROUTER_API_KEY);


const app = require("./src/app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
