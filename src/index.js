import express from "express";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import { connectDb } from "./lib/db.js";
import cors from "cors";



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); //middleware
app.use(cors());




app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);




app.listen(PORT , () => {
    console.log("Server is running on port 3000");

    connectDb();
    
})