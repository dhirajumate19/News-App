import express from "express";
import { signupController } from "./account.controller.js";
import { signupValidator } from "./account.validator.js";

const accountRouter = express.Router();

accountRouter.post("/signup", signupValidator, signupController);

export default accountRouter;
