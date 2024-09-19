const bcrypt = require('bcrypt');
const { createUser } = require('../service/userService');

const registerUserController = async (req, res) => {
  const { userName, password, userRol } = req.body;

  try {
    const hashesPassword = await bcrypt.hash(password, 10);
    const newUser = await createUser(userName, hashesPassword, userRol);

    res
      .status(201)
      .json({ message: 'Usuario creado exitosamente', user: newUser });
  } catch (error) {
    console.error('Error al crear el usuario'.error);
    res
      .status(500)
      .json({
        message: 'Error al crear el usuario',
        error: error.message || 'Desconocido',
      });
  }
};



module.exports = { registerUserController };
