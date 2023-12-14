// controllers/research.js

import Research from '../models/research.js';

const getResearch = async (req, res) => {
  const researchId = req.params.id;

  try {
    const research = await Research.findById(researchId);

    if (!research) {
      return res.status(404).json({ message: 'Research entry not found' });
    }

    res.status(200).json({ research });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllResearch = async (req, res) => {
  try {
    const allResearchEntries = await Research.find();

    res.status(200).json({ researchEntries: allResearchEntries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addResearch = async (req, res) => {
  const researchData = req.body;

  try {
    const newResearchEntry = await Research.create(researchData);

    res.status(201).json({ research: newResearchEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateResearch = async (req, res) => {
  const researchId = req.params.id;
  const updatedResearchData = req.body;

  try {
    const updatedResearch = await Research.findByIdAndUpdate(researchId, updatedResearchData, { new: true });

    if (!updatedResearch) {
      return res.status(404).json({ message: 'Research entry not found' });
    }

    res.status(200).json({ research: updatedResearch });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteResearch = async (req, res) => {
  const researchId = req.params.id;

  try {
    const deletedResearch = await Research.findByIdAndRemove(researchId);

    if (!deletedResearch) {
      return res.status(404).json({ message: 'Research entry not found' });
    }

    res.status(200).json({ message: 'Research entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { getResearch, getAllResearch, addResearch, updateResearch, deleteResearch };
