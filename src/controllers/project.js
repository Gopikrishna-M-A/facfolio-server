// controllers/project.js

import Project from '../models/project.js';

const getProject = async (req, res) => {
  const projectId = req.params.id;

  try {
    const project = await Project.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: 'Project entry not found' });
    }

    res.status(200).json({ project });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getAllProjects = async (req, res) => {
  try {
    const allProjectEntries = await Project.find();

    res.status(200).json({ projectEntries: allProjectEntries });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const addProject = async (req, res) => {
  const projectData = req.body;

  try {
    const newProjectEntry = await Project.create(projectData);

    res.status(201).json({ project: newProjectEntry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const updateProject = async (req, res) => {
  const projectId = req.params.id;
  const updatedProjectData = req.body;

  try {
    const updatedProject = await Project.findByIdAndUpdate(projectId, updatedProjectData, { new: true });

    if (!updatedProject) {
      return res.status(404).json({ message: 'Project entry not found' });
    }

    res.status(200).json({ project: updatedProject });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteProject = async (req, res) => {
  const projectId = req.params.id;

  try {
    const deletedProject = await Project.findByIdAndRemove(projectId);

    if (!deletedProject) {
      return res.status(404).json({ message: 'Project entry not found' });
    }

    res.status(200).json({ message: 'Project entry deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

export { getProject, getAllProjects, addProject, updateProject, deleteProject };
