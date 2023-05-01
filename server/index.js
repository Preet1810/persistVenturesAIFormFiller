//IMPORTS
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

//NATIVE IMPORTS
import authRoutes from "./routes/auth.js";
import formRoutes from "./routes/form.js";
import { verifyToken } from "./middleware/auth.js";
/* CONFIGURATIONS */
dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
    optionsSuccessStatus: 200
}));


app.use("/auth", authRoutes);
app.use("/form", formRoutes)

const PORT=process.env.PORT||6001;
mongoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));