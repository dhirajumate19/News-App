import { validateData, validateEmail } from "../../utils/comman/validator.js";
import { failedResponse } from "../../utils/response/reponse.js";

export const signupValidator = (req, res, next) => {
  const { username, email, password, firstName, lastName, age } = req.body;

  if (!validateData(username)) {
    return res.status(400).send(failedResponse(400, "Username is required"));
  }
  if (!validateData(email) || !validateEmail(email)) {
    return res
      .status(400)
      .send(failedResponse(400, "Email is required and must be valid email"));
  }
  if (!validateData(password)) {
    return res.status(400).send(failedResponse(400, "Password is required"));
  }
  if (!validateData(firstName)) {
    return res.status(400).send(failedResponse(400, "First Name is required"));
  }
  if (!validateData(lastName)) {
    return res.status(400).send(failedResponse(400, "Last Name is required"));
  }
  if (!age || typeof age == "string") {
    return res
      .status(400)
      .send(failedResponse(400, "Age is required and must be Number"));
  }

  next();
};
