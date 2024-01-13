import express, { Express, Request, Response } from "express";
import connectDB from "./db/connect";
import dotenv from "dotenv";
import cors from "cors";
import { postRoute } from "./routes/post.route";
import { authRoute } from "./routes/auth.route";
import { profileRoute } from "./routes/profile.route";

dotenv.config();

const app: Express = express();
const port: number = parseInt(process.env.PORT || "8080", 10);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/post", postRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/profile", profileRoute);

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
    process.exit(1);
  }
};

start();
