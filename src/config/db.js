const mongoose = require('mongoose');

const connectDB = async (DB_URL) => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('BBDD conectada 😎'); // Mensaje de éxito
  } catch (error) {
    console.error('Error en la conexión con la BBDD 🤬', error); // Mensaje de error
  }
};

module.exports = { connectDB };
