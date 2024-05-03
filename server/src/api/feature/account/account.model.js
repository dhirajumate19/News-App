import mongoose from "mongoose";

const validate = async function (value) {
  const existingUser = await this.constructor.findOne({
    email: value,
  });
  return !existingUser; // Return true if username is unique, false otherwise
};
const usersSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validate,
      message: (props) => `${props.value} is already taken!`,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validate,
      message: (props) => `${props.value} is already taken!`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
});

export const usersModel = mongoose.model("users", usersSchema);
