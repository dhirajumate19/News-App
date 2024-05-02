import express from "express";
import { createArticle, viewArticle } from "./article.controller.js";
import { validateArticle } from "./article.validator.js";
const articleRouter = express.Router();

articleRouter.post("/article", createArticle);
articleRouter.get("/article", viewArticle);
export default articleRouter;
