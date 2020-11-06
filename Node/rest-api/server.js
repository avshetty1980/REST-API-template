import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

import restApiRoutes from "./backend/routes/restApiRoutes";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API is running!");
});

app.use("/contact", restApiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on PORT ${PORT}!`));

