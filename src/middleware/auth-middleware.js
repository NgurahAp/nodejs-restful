import { prismaClient } from "../application/database.js";

export const authMiddleware = async (req, res, next) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    return res.status(401).json({ errors: "Unauthorized" }).end();
  }

  const token = authHeader.split(" ")[1]; // Memisahkan "Bearer" dan token
  if (!token) {
    return res.status(401).json({ errors: "Unauthorized" }).end();
  }

  const user = await prismaClient.user.findFirst({
    where: {
      token: token, // Pastikan token disimpan tanpa prefix "Bearer"
    },
  });

  if (!user) {
    return res.status(401).json({ errors: "Unauthorized" }).end();
  } else {
    req.user = user;
    next();
  }
};
