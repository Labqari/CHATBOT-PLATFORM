const axios = require("axios");
const prisma = require("../utils/prisma");

exports.createChat = async (req, res) => {
  try {
    const { message, agentId, projectId } = req.body;

    if (!message || !agentId || !projectId) {
      return res.status(400).json({
        message: "message, agentId and projectId are required",
      });
    }

    // 1️⃣ Check agent
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      include: { prompts: true },
    });

    if (!agent) {
      return res.status(403).json({ message: "Invalid agent" });
    }

    // 2️⃣ Save USER message
    await prisma.chat.create({
      data: {
        role: "user",
        message: message,
        projectId: projectId,
      },
    });

    // 3️⃣ Build system prompt
    const systemPrompt = agent.prompts.map(p => p.content).join("\n");

    // 4️⃣ Call OpenRouter
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        }
      }
    );

    const aiReply = response.data.choices[0].message.content;

    // 5️⃣ Save AI message
    const aiChat = await prisma.chat.create({
      data: {
        role: "assistant",
        message: aiReply,
        projectId: projectId,
      },
    });

    // 6️⃣ Return AI reply
    res.status(201).json({
    reply: aiReply
});


  } catch (error) {
    console.error("❌ CHAT ERROR:", error.response?.data || error.message);
    res.status(500).json({
      error: error.response?.data || error.message,
    });
  }
};
