const mongoose = require('mongoose');

const Project6Schema = new mongoose.Schema(
  {
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    username: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
    relatedUsers: [{ type: mongoose.Types.ObjectId, ref: 'someCollection' }] // Agregar el array de relaciones sin duplicados
  },
  {
    timestamps: true,
    collection: 'projects'
  }
);

const Project6 = mongoose.model('projects', Project6Schema, 'projects');
module.exports = Project6;
