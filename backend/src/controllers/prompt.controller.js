const prisma = require("../utils/prisma");

// CREATE PROMPT
exports.createPrompt = async (req, res) => {
  try {
    const { content, agentId } = req.body;

    if (!content || !agentId) {
      return res.status(400).json({ message: "Content and agentId required" });
    }

    // Check agent belongs to user's project
    const agent = await prisma.agent.findUnique({
      where: { id: agentId },
      include: { project: true },
    });

    if (!agent || agent.project.userId !== req.user.userId) {
      return res.status(403).json({ message: "Invalid agent" });
    }

    const prompt = await prisma.prompt.create({
      data: {
        content,
        agentId,
      },
    });

    res.status(201).json(prompt);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
