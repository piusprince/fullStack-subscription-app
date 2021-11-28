import express from "express";
import { body, validationResult } from "express-validator";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";
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
      const errors = validationErrors.array().map((error) => {
        return {
          msg: error.msg,
        };
      });
    }

    const { email, password } = req.body;

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

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = await User.create({ email, password: hashedPassword });

    const token = JWT.sign(
      { email: newUser.email },
      process.env.JWT_SECRET as string,
      { expiresIn: 36000 }
    );

    res.json({
      errors: [],
      data: {
        token,
        user: {
          email: newUser.email,
          id: newUser.id,
        },
      },
    });
  }
);

export default router;
