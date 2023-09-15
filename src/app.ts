import express from "express";
import "express-async-errors";
import dotenv from "dotenv";
import router from "./routes/index.routes";

const app = express();

dotenv.config();
app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000;

app.listen((port), () => console.log(`Server running on port ${port}`));