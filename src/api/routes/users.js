const express = require('express');
const { updateProjectRelations } = require('../controllers/project6');
const {
  postUser,
  getUsers,
  updateUser,
  deleteUser
} = require('../controllers/users');

const UserRoutes = require('express').Router();

UserRoutes.post('/', postUser); // Crear usuario
UserRoutes.get('/', getUsers); // Obtener todos los usuarios
UserRoutes.put('/:id', updateUser); // Actualizar usuario por ID
UserRoutes.put('/update-relation/:id', updateProjectRelations);
UserRoutes.delete('/:id', deleteUser); // Eliminar usuario por ID

module.exports = UserRoutes; // Exportar rutas de usuarios
