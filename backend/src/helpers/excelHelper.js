const xlsx = require('xlsx');
const fs = require('fs').promises;

const parseExcel = async (filePath) => {
  const buffer = await fs.readFile(filePath);
  const workbook = xlsx.read(buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const alumnos = xlsx.utils.sheet_to_json(sheet);

  //Map data in Excel to te forma in MySQL
  return alumnos.map((alumno) => ({
    idUser: alumno['ID Usuario'],
    userName: alumno['Nombre de Usuario'],
    pass: alumno['Contraseña'],
    studentName: alumno['Nombre'],
    surnameP: alumno['Apellido Paterno'],
    surnameM: alumno['Apellido Materno'],
    studentGroup: alumno['Grupo'],
    email: alumno['Correo'],
    sexo: alumno['Sexo'],
    lengua: alumno['Lengua'],
    programa: alumno['Programa'],
    cuatrimestre: alumno['Cuatrimestre'],
  }));
};

module.exports = { parseExcel };
