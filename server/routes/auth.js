import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { signup, login } from "../controllers/authController.js";

const router = express.Router();

// // routes/auth.js or authController.js
// router.get('/me', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ msg: 'Server error' });
//   }
// });


router.post("/signup", signup);
router.post("/login", login);
// router.post("/auth", async (req, res) => {
//   try {
//     if (!req.headers.authorization) {
//       console.log(req.headers);
//       return res.status(401).json({ error: "No token provided" });
//     }
//     const token = req.headers.authorization.split(" ")[1];
//     const userId = await jwt.verify(token, process.env.JWT_SECRET);

//     const user = await User.findById(userId.id);
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     return res.status(200).json({ id: userId, user });
//   } catch (error) {
//     console.log(error);
//     return res.status(401).json({ error: "Invalid token" });
//   }
// });




router.get("/me", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ error: "No token provided" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("-password");
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({ user });
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
});

export default router;
