import express, { Express, Request, Response } from "express";
import connectDB from "./db/connect";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT || "8080", 10);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ msg: "github testttt" });
});

const start = async (): Promise<void> => {
  try {
    await connectDB(process.env.MONGO_URI as string);
    app.listen(port, () =>
      console.log(`Server listening on port http://localhost:${port}`)
    );
  } catch (error: any) {
    console.log(`Error occurred: ${error.message}`);
    process.exit(1);
  }
};

start();
