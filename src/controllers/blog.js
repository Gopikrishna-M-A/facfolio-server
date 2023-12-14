// controllers/blog.js

import Blog  from '../models/blog.js';

const getBlog = async (req, res) => {
  const blogId = req.params.id;

  try {
    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog entry not found' });
    }

    res.status(200).json({ blog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const allBlogEntries = await Blog.find();

    res.status(200).json({ blogEntries: allBlogEntries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addBlog = async (req, res) => {
  const blogData = req.body;

  try {
    const newBlogEntry = await Blog.create(blogData);

    res.status(201).json({ blog: newBlogEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateBlog = async (req, res) => {
  const blogId = req.params.id;
  const updatedBlogData = req.body;

  try {
    const updatedBlog = await Blog.findByIdAndUpdate(blogId, updatedBlogData, { new: true });

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog entry not found' });
    }

    res.status(200).json({ blog: updatedBlog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteBlog = async (req, res) => {
  const blogId = req.params.id;

  try {
    const deletedBlog = await Blog.findByIdAndRemove(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog entry not found' });
    }

    res.status(200).json({ message: 'Blog entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { getBlog, getAllBlogs, addBlog, updateBlog, deleteBlog };
