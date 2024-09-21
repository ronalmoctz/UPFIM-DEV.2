const pool = require('../database/db');
const bcrypt = require('bcrypt');

const insertStudent = async (alumno) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction(); // Start transaction

    // Encriptar la contraseña antes de enviar
    const hashedPassword = await bcrypt.hash(alumno.pass, 10);

    const [result] = await connection.query(
      'CALL admin_studentinsert(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        alumno.idUser,
        alumno.userName,
        hashedPassword,
        alumno.studentName,
        alumno.surnameP,
        alumno.surnameM,
        alumno.studentGroup,
        alumno.email,
        alumno.sexo,
        alumno.lengua,
        alumno.programa,
        alumno.cuatrimestre,
      ]
    );

    await connection.commit(); // Confirm transaction
    return result;
  } catch (error) {
    await connection.rollback(); // Reverse if there's an error
    throw error;
  } finally {
    connection.release(); // Release connection
  }
};

module.exports = { insertStudent };
