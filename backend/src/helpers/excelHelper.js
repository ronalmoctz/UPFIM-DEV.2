const xlsx = require('xlsx');
const fs = require('fs').promises;
const bcrypt = require('bcrypt');

const normalizeHeaders = (alumno) => {
  return {
    matricula:
      alumno['Matrícula'] ??
      alumno['ID Usuario'] ??
      alumno['UserID'] ??
      'matricula_default',
    nombreCompleto:
      alumno['Nombre Completo'] ??
      alumno['Nombre'] ??
      alumno['Full Name'] ??
      'Nombre Desconocido',
    pass: alumno['Contraseña'] ?? alumno['Password'] ?? 'default_password',
    studentGroup: alumno['Grupo'] ?? alumno['Group'] ?? 'Grupo Default',
    sexo: alumno['Sexo'] ?? alumno['Gender'] ?? 'Desconocido',
    lengua: alumno['Lengua'] ?? alumno['Language'] ?? 'N/A',
    programa:
      alumno['Programa educativo'] ??
      alumno['Programa'] ??
      alumno['Program'] ??
      'Sin Programa',
    cuatrimestre: alumno['Cuatrimestre'] ?? alumno['Semester'] ?? 1,
  };
};

// Función para separar nombre completo en nombre, apellido paterno y materno
/**
 * The function `separarNombreCompleto` takes a full name as input, splits it into first name, paternal
 * surname, and maternal surname, and returns them as an object.
 * @param nombreCompleto - The function `separarNombreCompleto` takes a full name as input and
 * separates it into three parts: first name, paternal last name, and maternal last name. The input
 * parameter `nombreCompleto` should be a string containing the full name of a person.
 * @returns The function `separarNombreCompleto` is returning an object with three properties:
 * `nombre`, `apellidoPaterno`, and `apellidoMaterno`.
 */
const separarNombreCompleto = (nombreCompleto) => {
  const partes = nombreCompleto.trim().split(' ');
  const apellidoMaterno = partes.pop();
  const apellidoPaterno = partes.pop();
  const nombre = partes.join(' ');
  return { nombre, apellidoPaterno, apellidoMaterno };
};

/**
 * The function `parseExcel` reads an Excel file, extracts data from the first sheet, and converts it
 * to JSON format.
 * @param filePath - The `filePath` parameter in the `parseExcel` function is the path to the Excel
 * file that you want to parse and extract data from. This function reads the Excel file from the
 * specified path, processes it, and then logs the extracted data in JSON format.
 */
const parseExcel = async (filePath) => {
  const buffer = await fs.readFile(filePath);
  const workbook = xlsx.read(buffer, { type: 'buffer' });
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const alumnos = xlsx.utils.sheet_to_json(sheet, { defval: '' });
  console.log('Datos sin normalizar:', alumnos);

  return await Promise.all(
    alumnos.map(async (alumno) => {
      const normalizedAlumno = normalizeHeaders(alumno);

      // Separamos nombre completo
      const { nombre, apellidoPaterno, apellidoMaterno } =
        separarNombreCompleto(normalizedAlumno.nombreCompleto);

      // Hasheamos la contraseña
      const hashedPassword = await bcrypt.hash(normalizedAlumno.pass, 10);

      // Generamos el correo con la matrícula
      const correo = `${normalizedAlumno.matricula}@upfim.edu.mx`;

      return {
        idUser: normalizedAlumno.matricula,
        userName: normalizedAlumno.matricula,
        pass: hashedPassword,
        studentName: nombre,
        surnameP: apellidoPaterno,
        surnameM: apellidoMaterno,
        studentGroup: normalizedAlumno.studentGroup,
        email: correo,
        sexo: normalizedAlumno.sexo,
        lengua: normalizedAlumno.lengua,
        programa: normalizedAlumno.programa,
        cuatrimestre: normalizedAlumno.cuatrimestre,
      };
    })
  );
};

module.exports = { parseExcel };
