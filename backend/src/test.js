const prisma = require("./utils/prisma");

async function test() {
  try {
    const users = await prisma.user.findMany();
    console.log("Users:", users);
  } catch (err) {
    console.log("ERROR:", err.message);
  } finally {
    await prisma.$disconnect();
  }
}

test();
