import mongoose from "mongoose";

const articleSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    publicationDate: {
      type: Date,
      required: true,
      validate: {
        validator: (value) => {
          return value instanceof Date && !isNaN(value);
        },
        message: "Invalid publication date",
      },
    },
    category: { type: String, required: true },
    tags: { type: String, required: true },
    imageURl: { type: String, required: true },
    source: { type: String, required: true },
    isActive: { type: Boolean, required: true, default: true },
  },
  {
    timestamps: true,
  }
);
const articleModel = mongoose.model("article", articleSchema);
export default articleModel;
// views: { type: Number },
// likes: { type: Number },
// comment: { type: String },
