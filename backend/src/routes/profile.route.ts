import { Router } from "express";
import { auth } from "../middlewares/auth.middleware";
import {
  addProfile,
  getProfile,
  updateProfile,
  updateBio,
} from "../controllers/profile.controller";

const router: Router = Router();

router.route("/me").get(auth, getProfile).post(auth, addProfile);
router.route("/me/bio").patch(auth, updateBio);
router.route("/:profileId").patch(auth, updateProfile);

export { router as profileRoute };
