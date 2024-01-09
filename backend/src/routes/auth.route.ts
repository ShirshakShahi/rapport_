import express, { Router } from "express";
import { loginHandler, signupHandler } from "../controllers/auth.controller";

const router: Router = express.Router();

router.post("/signup", signupHandler);
router.post("/login", loginHandler);

export { router as authRoute };
