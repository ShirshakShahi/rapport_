import express, { Router } from "express";
import { loginHandler, signupHandler } from "../controllers/auth.controller";

const router: Router = express.Router();

router.route("/signup").post(signupHandler);
router.route("/login").post(loginHandler);

export { router as authRoute };