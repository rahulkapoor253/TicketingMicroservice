import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  res.send("My name is Rahul.");
});

export { router as signoutRouter };
