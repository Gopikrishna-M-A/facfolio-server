import mongoose from "mongoose";


const blogSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    imageUrl: String,
    title: {
      type: String,
      required: true
    },
    para: String,
    link: String,
    isVisible: {
    type: Boolean,
    default: true,
  }
    
  });
const Blog = mongoose.model("Blog", blogSchema);

export default Blog;