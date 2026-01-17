const prisma = require("../utils/prisma");

// CREATE AGENT
exports.createAgent = async (req, res) => {
  try {
    const { name, projectId } = req.body;

    // ✅ Validate input
    if (!name || !projectId) {
      return res
        .status(400)
        .json({ message: "Agent name and projectId required" });
    }

    // ✅ Check that project exists and belongs to the logged-in user
    const project = await prisma.project.findUnique({
      where: { id: projectId },
    });

    if (!project || project.userId !== req.user.userId) {
      return res.status(403).json({ message: "Invalid project" });
    }

    // ✅ Create agent
    const agent = await prisma.agent.create({
      data: {
        name,
        projectId,
      },
    });

    res.status(201).json(agent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
