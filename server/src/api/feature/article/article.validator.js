import { validateData } from "../../utils/comman/validator.js";
import { failedResponse } from "../../utils/response/reponse.js";

export const validateArticle = (req, res, next) => {
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

  if (!validateData(title)) {
    return res.status(400).send(failedResponse(400, "Enter Title"));
  }
  if (!validateData(content)) {
    return res
      .status(400)
      .send(failedResponse(400, "Enter Some meaningfull content"));
  }
  if (!validateData(author)) {
    return res
      .status(400)
      .send(failedResponse(400, "Enter your name as Author of this article"));
  }
  if (!validateData(category)) {
    return res.status(400).send(failedResponse(400, "Enter Some category"));
  }
  if (!validateData(tags)) {
    return res
      .status(400)
      .send(
        failedResponse(
          400,
          "Enter some tags to people finds your article easily"
        )
      );
  }

  if (!validateData(publicationDate)) {
    return res
      .status(400)
      .send(failedResponse(400, "Enter Date for Publication"));
  }
  next();
};
