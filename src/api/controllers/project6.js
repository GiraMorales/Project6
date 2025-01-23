const Project6 = require('../models/project6');
const User = require('../models/users');

//! CREATE
const postProjects = async (req, res, next) => {
  try {
    const newProyect = new Project6({
      title: req.body.title,
      imgUrl: req.body.imgUrl,
      username: req.body.username,
      relatedUsers: req.body.relatedUsers || []
    });
    const project6Saved = await newProyect.save();
    return res.status(201).json(project6Saved);
  } catch (error) {
    return res.status(400).json('Error al crear el proyecto');
  }
};
//! READ
const getProjects = async (req, res, next) => {
  try {
    const allProjects = await Project6.find();
    return res.status(200).json(allProjects);
  } catch (error) {
    return res.status(400).json('Error al obtener proyectos');
  }
};
const getUserProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userProjects = await Project6.find({ project: id }).populate(
      'username',
      'username email role'
    );
    return res.status(200).json(userProjects);
  } catch (error) {
    return res.status(400).json('Error al obtener usuarios de los proyectos');
  }
};
//! UPDATE
const updateProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, imgUrl, relatedUsers } = req.body;
    const updatedProject = await Project6.findByIdAndUpdate(
      id,
      req.body,
      {
        title,
        imgUrl,
        $addToSet: { relatedUsers: { $each: relatedUsers } } // Evita duplicados en el array
      },
      {
        new: true
      }
    )
      .populate('username', 'username email')
      .populate('relatedUsers', 'username email');

    return res.status(200).json(updatedProject);
  } catch (error) {
    return res.status(400).json('Error al actualizar el proyecto');
  }
};

const updateProjectRelations = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { relatedItems } = req.body;

    const project = await Project6.findById(id);
    if (!project) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }

    project.relatedItems = [
      ...new Set([...project.relatedItems, ...relatedItems])
    ];
    await project.save();
    return res.status(200).json(project);
  } catch (error) {
    return res.status(400).json('Error al actualizar relaciones del proyecto');
  }
};

//! DELETE
const deleteProjects = async (req, res, next) => {
  try {
    const { id } = req.params;
    const projectDeleted = await Project6.findByIdAndDelete(id);
    return res.status(200).json(projectDeleted);
  } catch (error) {
    return res.status(400).json('Error al elmiminar el proyecto');
  }
};

module.exports = {
  getProjects,
  getUserProjects,
  postProjects,
  updateProjects,
  updateProjectRelations,
  deleteProjects
};
