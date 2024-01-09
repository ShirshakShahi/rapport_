import express, { Router } from "express";

const router: Router = express.Router();

router.post("/", (req, res) => {
  const { title, content } = req.body;

  res.json({ title, content });
});

export { router as postRoute };
