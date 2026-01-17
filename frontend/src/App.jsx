import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;

    setLoading(true);
    setReply("");

    try {
      const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJiOWQ2NTgzZi1mOGY3LTQ0NzAtOGMzMy1jYzRlZDc5MjY4MjIiLCJpYXQiOjE3Njg1NTU5NzEsImV4cCI6MTc2ODY0MjM3MX0.tERqz5ApKX0nlFvPfAtoo9UWdNWPyet8pZ0YKZZ5Mh8"
      const res = await fetch("http://localhost:5000/api/chats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: message,
          agentId: "d8064d1a-3f2f-4c40-b0d3-c941401b322c",
          projectId: "538cf53a-799a-4986-bdbe-be4486b9b7bf",
        }),
      });

      const data = await res.json();
      setReply(data.reply || "No response");

    } catch (err) {
      setReply("Error connecting to server");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h2>Simple Chatbot</h2>

      <input
        style={{ width: "300px", padding: "8px" }}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message"
      />

      <br /><br />

      <button onClick={sendMessage} disabled={loading}>
        {loading ? "Sending..." : "Send"}
      </button>

      <br /><br />

      {reply && (
        <div>
          <strong>AI Reply:</strong>
          <p>{reply}</p>
        </div>
      )}
    </div>
  );
}

export default App;

