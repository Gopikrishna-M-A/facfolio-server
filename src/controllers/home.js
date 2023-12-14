// controllers/home.js

import Home from '../models/home.js';

const getHome = async (req, res) => {
  const homeId = req.params.id;

  try {
    const home = await Home.findById(homeId);

    if (!home) {
      return res.status(404).json({ message: 'Home entry not found' });
    }

    res.status(200).json({ home });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllHomes = async (req, res) => {
  try {
    const allHomeEntries = await Home.find();

    res.status(200).json({ homeEntries: allHomeEntries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addHome = async (req, res) => {
  const homeData = req.body;

  try {
    const newHomeEntry = await Home.create(homeData);

    res.status(201).json({ home: newHomeEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateHome = async (req, res) => {
  const homeId = req.params.id;
  const updatedHomeData = req.body;

  try {
    const updatedHome = await Home.findByIdAndUpdate(homeId, updatedHomeData, { new: true });

    if (!updatedHome) {
      return res.status(404).json({ message: 'Home entry not found' });
    }

    res.status(200).json({ home: updatedHome });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteHome = async (req, res) => {
  const homeId = req.params.id;

  try {
    const deletedHome = await Home.findByIdAndRemove(homeId);

    if (!deletedHome) {
      return res.status(404).json({ message: 'Home entry not found' });
    }

    res.status(200).json({ message: 'Home entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { getHome, getAllHomes, addHome, updateHome, deleteHome };
