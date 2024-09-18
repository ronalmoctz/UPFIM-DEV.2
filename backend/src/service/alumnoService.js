const pool = require('../database/db');

const insertStudentsMassive = async (alumnos) => {
  const connection = await pool.getConnection();
  try {
    await connection.beginTransaction(); //Start transaction

    const result = [];
    for (const alumno of alumnos) {
      const [queryResult] = await connection.query(
        'CALL admin_studentinsert(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          alumno.idUser,
          alumno.userName,
          alumno.pass,
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
      result.push(queryResult);
    }

    await connection.commit(); //Confirm transaction
    return result;
  } catch (error) {
    await connection.rollback(); //Reverse if have error
    throw error;
  } finally {
    connection.release(); //open the connection
  }
};

module.exports = { insertStudentsMassive };
