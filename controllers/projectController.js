const Project = require('../models/Project');

exports.listProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar projetos.' });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Projeto não encontrado.' });
    }

    res.json(project);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar projeto.' });
  }
};

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao criar projeto.', error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!project) {
      return res.status(404).json({ message: 'Projeto não encontrado.' });
    }

    res.json(project);
  } catch (error) {
    res.status(400).json({ message: 'Erro ao atualizar projeto.', error: error.message });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);

    if (!project) {
      return res.status(404).json({ message: 'Projeto não encontrado.' });
    }

    res.json({ message: 'Projeto removido com sucesso.' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao remover projeto.' });
  }
};