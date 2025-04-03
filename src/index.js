import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import { connectDb } from "./lib/db.js";
import cors from "cors";
import job from "./lib/cron.js";

const app = express();
const PORT = process.env.PORT || 3001;

job.start();

app.use(express.json()); //middleware

// const corsOptions = {
//   origin: ["https://your-app.vercel.app", "exp://your-eas-deploy"],
//   credentials: true,
// };
// app.use(cors(corsOptions));

app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");

  connectDb();
});
