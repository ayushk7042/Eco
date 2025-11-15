// // import express from "express";
// // import mongoose from "mongoose";
// // import dotenv from "dotenv";
// // import cors from "cors";
// // import authRoutes from "./routes/auth.js";

// // import connectDB from "./config/db.js";

// // dotenv.config();
// // const app = express();

// // app.use(cors({
// //     origin: 'http://localhost:5173' // your frontend port (Vite default)
// //   }));
// // //app.use(cors());
// // app.use(express.json());

// // // Routes
// // app.use("/api/auth", authRoutes);

// // // Connect DB and start server
// // mongoose.connect(process.env.MONGO_URI, {
// //   //useNewUrlParser: true,
// //   //useUnifiedTopology: true,
// // }).then(() => {
// //   console.log("MongoDB connected");
// //   app.listen(5000, () => console.log("Server running on port 5000"));
// // }).catch((err) => console.error(err));




// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import mongoose from "mongoose";
// import authRoutes from "./routes/auth.js";
// import cityStatsRoutes from "./routes/cityStats.js";
// import emissionRoutes from './routes/emission.js';
// //app.use("/api/emissions", emissionRoutes);
// import plantRoutes from './routes/plants.js';

// //import emissionRoutes from './routes/emissionRoutes.js';
// import goalRoutes from "./routes/goal.js";
// //app.use("/api/goals", goalRoutes);
// import cityRoutes from "./routes/cityStats.js";
// // Load .env
// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/emissions", emissionRoutes);
// app.use("/api/goals", goalRoutes);
// app.use("/api/cities", cityRoutes);

// app.use('/api/citystats', cityStatsRoutes);

// //app.use("/api/emissions", emissionRoutes);
// app.use("/api/city-emissions", cityStatsRoutes);

// app.use('/api/plants', plantRoutes);
// //app.use('/api/city-stats', cityStatsRoutes);

// // MongoDB Connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => {
//     console.log("✅ MongoDB connected");
//     app.listen(PORT, () => {
//       console.log(`🚀 Server running on port ${PORT}`);
//     });
//   })
//   .catch(err => console.error("❌ DB Error:", err));




import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

// ✅ Import all routes
import authRoutes from "./routes/auth.js";
import cityStatsRoutes from "./routes/cityStats.js";
import emissionRoutes from "./routes/emission.js";
import plantRoutes from "./routes/plants.js";
import goalRoutes from "./routes/goal.js";

// ✅ Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend (Vite default port)
    credentials: true,
  })
);
app.use(express.json());

// ✅ Root route for testing
app.get("/", (req, res) => {
  res.send("🌍 Carbon Emission Tracker API is running...");
});

// ✅ Mount routes
app.use("/api/auth", authRoutes);
app.use("/api/emissions", emissionRoutes);
app.use("/api/goals", goalRoutes);
app.use("/api/cities", cityStatsRoutes);
app.use("/api/plants", plantRoutes);

// ❌ Removed duplicate/conflicting routes
// app.use("/api/citystats", cityStatsRoutes);
// app.use("/api/city-emissions", cityStatsRoutes);
// app.use("/api/cities", cityRoutes);

// ✅ 404 fallback (optional but helpful)
app.use((req, res, next) => {
  res.status(404).json({
    message: `Not Found - ${req.originalUrl}`,
  });
});

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });
