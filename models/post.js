import mongoose from "mongoose";
export const MODEL_NAME = "Post";
var Schema = mongoose.Schema;

let posts = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models[MODEL_NAME] || mongoose.model(MODEL_NAME, posts);
