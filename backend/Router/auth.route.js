// day166 cw1
// day166 hw2
// day168 hw4
// day169 cw1

import express from "express";
import {
  login,
  logout,
  signUp,
  verify,
} from "../Controllers/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signUp", signUp);
authRouter.get("/verify/:code", verify);
authRouter.post("/logIn", login); // day168 hw4
authRouter.get("/logout", logout); // day169 cw1

export default authRouter;
