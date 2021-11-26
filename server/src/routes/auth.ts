import express from "express";
import { body, validationResult } from "express-validator";
import User from "../models/user";

const router = express.Router();

router.post(
  "/signup",
  body("email").isEmail().withMessage("The email is invalid"),
  body("password")
    .isLength({ min: 5 })
    .withMessage("The password is too short"),
  async (req, res) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      const errors = validationErrors.array().map((error) => error.msg);
      return res.json({ errors, data: null });
    }

    const { email, password } = req.body;

    await User.create({ email, password });

    const user = await User.findOne({ email });

    if (user) {
      return res.json({
        errors: [
          {
            msg: "Email already exists",
          },
        ],
        data: null,
      });
    }

    res.json(user);
  }
);

export default router;
