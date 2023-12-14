// controllers/about.js

import About from '../models/about.js';

const getAbout = async (req, res) => {
  const aboutId = req.params.id;

  try {
    const about = await About.findById(aboutId);

    if (!about) {
      return res.status(404).json({ message: 'About entry not found' });
    }

    res.status(200).json({ about });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllAbout = async (req, res) => {
  try {
    const allAboutEntries = await About.find();

    res.status(200).json({ aboutEntries: allAboutEntries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addAbout = async (req, res) => {
  const aboutData = req.body;

  try {
    const newAboutEntry = await About.create(aboutData);

    res.status(201).json({ about: newAboutEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateAbout = async (req, res) => {
  const aboutId = req.params.id;
  const updatedAboutData = req.body;

  try {
    const updatedAbout = await About.findByIdAndUpdate(aboutId, updatedAboutData, { new: true });

    if (!updatedAbout) {
      return res.status(404).json({ message: 'About entry not found' });
    }

    res.status(200).json({ about: updatedAbout });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteAbout = async (req, res) => {
  const aboutId = req.params.id;

  try {
    const deletedAbout = await About.findByIdAndRemove(aboutId);

    if (!deletedAbout) {
      return res.status(404).json({ message: 'About entry not found' });
    }

    res.status(200).json({ message: 'About entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { getAbout, getAllAbout, addAbout, updateAbout, deleteAbout };
