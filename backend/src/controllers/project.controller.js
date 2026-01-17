const prisma = require("../utils/prisma");

exports.createProject = async (req, res) => {
  try {
    console.log("PROJECT BODY:", req.body); // ✅ debug
    console.log("USER FROM TOKEN:", req.user); // ✅ debug

    const { name, description } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Project name required" });
    }

    const project = await prisma.project.create({
      data: {
        name,
        description,
        userId: req.user.userId, // ✅ FIX HERE
      },
    });

    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

