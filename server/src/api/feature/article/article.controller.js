import { response } from "express";
import {
  failedResponse,
  successReponse,
} from "../../utils/response/reponse.js";
import articleModel from "./article.model.js";

export const createArticle = async (req, res) => {
  try {
    const {
      title,
      content,
      author,
      publicationDate,
      category,
      tags,
      imageURl,
      source,
    } = req.body;

    const newArticle = new articleModel({
      title,
      content,
      author,
      publicationDate,
      category,
      tags,
      imageURl,
      source,
    });
    const reponse = await newArticle.save();
    res
      .status(201)
      .send(
        successReponse(
          { NewArticle: reponse },
          "Article is created successfully"
        )
      );
  } catch (err) {
    res
      .status(400)
      .send(failedResponse(400, `oops something went wrong!${err}`));
  }
};

export const viewArticle = (req, res) => {
  try {
  } catch (error) {}
};
