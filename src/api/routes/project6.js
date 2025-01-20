const {
  getProjects,
  getUserProjects,
  postProjects,
  updateProjects,
  deleteProjects,
  updateProjectRelations
} = require('../controllers/project6');

const Project6Routes = require('express').Router();

Project6Routes.get('/', getProjects);
Project6Routes.get('/:id', getUserProjects);
Project6Routes.post('/', postProjects);
Project6Routes.put('/:id', updateProjects);
UserRoutes.put('/update-relation/:id', updateProjectRelations);
Project6Routes.delete('/:id', deleteProjects);

module.exports = Project6Routes;
