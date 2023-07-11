import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  try {
    let token = req.header("Authorization");
    if (!token) return res.status(403).json({ error: "Unauthorized" });
    token = token.split(" ")[1];

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verifiedToken;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
