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

export const viewArticle = async (req, res) => {
  const result = await articleModel.aggregate([
    {
      $match: {
        title: "T20 Wolrds cup",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "_id",
        foreignField: "article",
        as: "UserDetails",
      },
    },

    {
      $project: {
        _id: 0,
        title: 1,
        content: 1,
        publicationDate: 1,
        author: 1,
        UserDetails: 1,
      },
    },
  ]);
  res.status(200).send(successReponse(result, "Record Fetch"));
  try {
  } catch (error) {
    console.log(error);
    return res.status(400).send(failedResponse(400, "Something went Wrong!"));
  }
};
