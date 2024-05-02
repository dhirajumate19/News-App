import {
  failedResponse,
  successReponse,
} from "../../utils/response/reponse.js";
import { usersModel } from "./account.model.js";

export const signupController = async (req, res) => {
  try {
    const { username, email, password, firstName, lastName, age } = req.body;
    const newUsers = new usersModel({
      username,
      email,
      password,
      firstName,
      lastName,
      age,
    });
    const response = await newUsers.save();
    res.status(201).send(successReponse(response, "User Created successfully"));
  } catch (error) {
    console.log("error", error.errmsg);
    res
      .status(400)
      .send(failedResponse(400, "something went Wrong!" + error.message));
  }
};
