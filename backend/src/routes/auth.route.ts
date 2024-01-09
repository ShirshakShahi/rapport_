import express, { Router } from "express";
import { signupHandler } from "../controllers/auth.controller";

const router: Router = express.Router();

router.post("/signup", signupHandler);

export { router as authRoute };
