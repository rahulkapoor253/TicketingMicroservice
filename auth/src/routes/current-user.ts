import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("My name is Rahul.");
});

export { router as currentUserRouter };
