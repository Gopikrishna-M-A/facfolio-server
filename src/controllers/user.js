import User from '../models/user.js'
import { fileURLToPath } from "url";
import path from "path";

import Home from '../models/home.js';
import About from '../models/about.js';
import Research from '../models/research.js';
import Project from '../models/project.js';
import Blog from '../models/blog.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Controller to get a specific user by ID
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// Controller to get a specific user by email
export const getUserByEmail = async (req, res) => {
  try {
    const user = await User.find({email:req.params.id});
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};



// Controller to get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Controller to add a new user
export const addUser = async (req, res) => {
  const { name, email, authImageUrl, oAuthId, slug } = req.body;
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    // If the user already exists, return a conflict status
    return res.status(200).json({ message: 'User with this email already exists', user: existingUser });
  }
  const newUser = new User({ name, email, authImageUrl, oAuthId, slug });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// Controller to delete a user by ID
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndRemove(id);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update a user by ID
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;
  try {
    const result = await User.findByIdAndUpdate(id, updatedUser, { new: true });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getInfo = async (req, res) => {
  try {
    // Extract slug from params
    const { slug } = req.params;

    // Find the user based on the slug
    const user = await User.findOne({ slug });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Fetch additional data from related models
    const home = await Home.findOne({ user: user._id });
    const about = await About.findOne({ user: user._id });

    // const research = await Research.find({ user: user._id });
    // const project = await Project.find({ user: user._id });
    // const blog = await Blog.find({ user: user._id });
    const research = await Research.find({ user: user._id, isVisible: true });
    const project = await Project.find({ user: user._id, isVisible: true });
    const blog = await Blog.find({ user: user._id, isVisible: true });

    // Combine user details and related model data
    const userData = {
      user,
      home,
      about,
      research,
      project,
      blog,
    };

    return res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching user info:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};




export const addProfile = async (req, res) => {
  try {
    let imageUrl = req.file.filename;

    const userId = req.params.userId; 

    // Update the user's imageUrl
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { imageUrl: imageUrl } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(201).json({ success: 'User updated successfully', user: updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

