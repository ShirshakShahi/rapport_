import express from "express";
import { Request, Response } from "express";
import connectDB from "./db/connect";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "github testttt" });
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`server listening on port http://localhost:${port}`)
    );
  } catch (error) {
    console.log(`Error occured as ${error.message}`);
  }
};

start();
