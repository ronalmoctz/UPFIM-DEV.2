const ExcelJS = require('exceljs');
const bcrypt = require('bcrypt');
const fs = require('fs').promises;

const DEFAULT_DOMAIN = '@upf.edu.mx';
const DEFAULT_PASSWORD = 'defaultPassword';

//Narmalize headers for the Excel file
const normalizeHeaders = (row) => ({
  matricula:
    row['Matrícula'] ||
    row['ID Usuario'] ||
    row['UserID'] ||
    'matricula_default',
  nombreCompleto:
    row['Nombre Completo'] ||
    row['Nombre'] ||
    row['Full Name'] ||
    'Nombre Desconocido',
  pass: row['Contraseña'] || row['Password'] || DEFAULT_PASSWRD,
  studentGroup: row['Grupo'] || row['Group'] || 'Grupo Default',
  sexo: row['Sexo'] || row['Gender'] || 'Desconocido',
  lengua: row['Lengua'] || row['Language'] || 'N/A',
  programa:
    row['Programa educativo'] ||
    row['Programa'] ||
    row['Program'] ||
    'Sin Programa',
  cuatrimestre: row['Cuatrimestre'] || row['Semester'] || 1,
});

//Split full name into first name, paternal, and maternal last names
const splitFullName = (fullName) => {
  const parts = fullName.trim().split(' ');
  const nombre = parts[0];
  const apellidoPaterno = parts[1] || '';
  const apellidoMaterno = parts.slice(2).join(' ') || '';
  return { nombre, apellidoPaterno, apellidoMaterno };
};

// Parse Excel file and normalize data
const parseExcel = async (filePath) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.worksheets[0];
  const alumnos = [];

  worksheet.eachRow((row, rowIndex) => {
    if (rowIndex === 1) return; // Skip headers row
    const rowData = row.values.reduce((acc, value, index) => {
      acc[worksheet.getRow(1).getCell(index).value] = value || '';
      return acc;
    }, {});
    alumnos.push(normalizeHeaders(rowData));
  });

  return Promise.all(
    alumnos.map(async (alumnos) => {
      const { nombre, apellidoPaterno, apellidoMaterno } = splitFullName(
        alumnos.nombreCompleto,
      );
      const hashedPassword = await bcrypt.hash(alumnos.pass, 10);
      const correo = `${alumnos.matricula}${DEFAULT_DOMAIN}`;

      return {
        idUser: alumnos.matricula,
        userName: alumnos.matricula,
        pass: hashedPassword,
        studenName: nombre,
        surnameP: apellidoPaterno,
        surnameM: apellidoMaterno,
        email: correo,
        studentGroup: alumnos.studentGroup,
        sexo: alumnos.sexo,
        lengua: alumnos.lengua,
        programa: alumnos.programa,
        cuatrimestre: alumnos.cuatrimestre,
      };
    }),
  );
};

module.exports = { parseExcel };
