import mongoose from "mongoose";
import Home from "./home.js";
import About from "./about.js";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: String,
  authImageUrl: String,
  oAuthId: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  phone: String,
  isVisible: {
    type: Boolean,
    default: true,
  }
});


userSchema.post("save", async function (doc, next) {
  try {
    // Check if there's already a corresponding Home document
    const existingHome = await Home.findOne({ user: doc._id });
    

    if (!existingHome) {
      // Create a new Home document with default values
      await Home.create({ user: doc._id });
    }

    next();
  } catch (error) {
    next(error);
  }
});

userSchema.post("save", async function (doc, next) {
  try {
    // Check if there's already a corresponding About document
    const existingAbout = await About.findOne({ user: doc._id });

    if (!existingAbout) {
      // Create a new About document with default values
      await About.create({ user: doc._id });
    }

    next();
  } catch (error) {
    next(error);
  }
});


const User = mongoose.model("User", userSchema);


export default User;
