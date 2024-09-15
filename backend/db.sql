CREATE DATABASE uni CHARACTER SET utf8 COLLATE utf8_general_ci;
USE uni;

CREATE TABLE usertable (
  id_User INT(11) NOT NULL AUTO_INCREMENT,
  userName VARCHAR(45) NOT NULL,
  password VARCHAR(200) NOT NULL,
  userRol VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_User)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla programa
CREATE TABLE programa (
  id_programa INT(11) NOT NULL AUTO_INCREMENT,
  namePrograma VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_programa)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla cuatrimestre
CREATE TABLE cuatrimestre (
  id_cuatrimestre INT(11) NOT NULL AUTO_INCREMENT,
  nameCuatri VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_cuatrimestre)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla alumnos 
CREATE TABLE alumnos (
  matricula INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  aPater VARCHAR(45) NOT NULL,
  aMater VARCHAR(45) NOT NULL,
  grupo VARCHAR(45) NOT NULL,
  correo VARCHAR(45) NOT NULL,
  sexo VARCHAR(45) NOT NULL,
  lengua VARCHAR(45) NOT NULL,
  estatus TINYINT(4) NOT NULL,
  programa_fk INT(11) NOT NULL,
  cuatrimestre_fk INT(11) NOT NULL,
  idUser_fk INT(11) NOT NULL,
  PRIMARY KEY (matricula),
  FOREIGN KEY (programa_fk) REFERENCES programa(id_programa),
  FOREIGN KEY (cuatrimestre_fk) REFERENCES cuatrimestre(id_cuatrimestre),
  FOREIGN KEY (idUser_fk) REFERENCES usertable(id_User)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla calificacion
CREATE TABLE calificacion (
  id_calificacion INT(11) NOT NULL AUTO_INCREMENT,
  cal1 INT(11) DEFAULT NULL,
  cal2 INT(11) DEFAULT NULL,
  cal3 INT(11) DEFAULT NULL,
  PRIMARY KEY (id_calificacion)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla docente
CREATE TABLE docente (
  no_empleado INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  aPater VARCHAR(45) NOT NULL,
  aMater VARCHAR(45) NOT NULL,
  correo VARCHAR(45) NOT NULL,
  titulo VARCHAR(45) NOT NULL,
  img_url VARCHAR(200) NOT NULL,
  estatus INT(11) NOT NULL,
  idUser_fk INT(11) NOT NULL,
  PRIMARY KEY (no_empleado),
  FOREIGN KEY (idUser_fk) REFERENCES usertable(id_User)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla taller
CREATE TABLE taller (
  id_taller INT(11) NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(45) NOT NULL,
  tipo ENUM('deportiva', 'cultural') NOT NULL,  
  img_url VARCHAR(200) NOT NULL,
  PRIMARY KEY (id_taller)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla docente_taller
CREATE TABLE docente_taller (
  id_docente_taller INT(11) NOT NULL AUTO_INCREMENT,
  docente_fk INT(11) NOT NULL,
  taller_fk INT(11) NOT NULL,
  PRIMARY KEY (id_docente_taller),
  FOREIGN KEY (docente_fk) REFERENCES docente(no_empleado),
  FOREIGN KEY (taller_fk) REFERENCES taller(id_taller)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla horarios
CREATE TABLE horarios (
  id_horarios INT(11) NOT NULL AUTO_INCREMENT,
  dia VARCHAR(45) NOT NULL,
  hrEntrada TIME NOT NULL,
  hrSalida TIME NOT NULL,
  PRIMARY KEY (id_horarios)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla grupo
CREATE TABLE grupo (
  id_grupo INT(11) NOT NULL AUTO_INCREMENT,
  grupo VARCHAR(45) NOT NULL,
  horarios_fk INT(11) NOT NULL,
  docente_taller_fk INT(11) NOT NULL,
  PRIMARY KEY (id_grupo),
  FOREIGN KEY (horarios_fk) REFERENCES horarios(id_horarios),
  FOREIGN KEY (docente_taller_fk) REFERENCES docente_taller(id_docente_taller)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla periodo
CREATE TABLE periodo (
  id_periodo INT(11) NOT NULL AUTO_INCREMENT,
  namePeriodo VARCHAR(45) NOT NULL,
  PRIMARY KEY (id_periodo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- Crear tabla grupo_alumno
CREATE TABLE grupo_alumno (
  id_registro INT(11) NOT NULL AUTO_INCREMENT,
  grupo_fk INT(11) NOT NULL,
  alumno_fk INT(11) NOT NULL,
  calificacion_fk INT(11) NOT NULL,
  periodo_fk INT(11) NOT NULL,
  PRIMARY KEY (id_registro),
  FOREIGN KEY (grupo_fk) REFERENCES grupo(id_grupo),
  FOREIGN KEY (alumno_fk) REFERENCES alumnos(matricula),
  FOREIGN KEY (calificacion_fk) REFERENCES calificacion(id_calificacion),
  FOREIGN KEY (periodo_fk) REFERENCES periodo(id_periodo)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

CREATE TABLE actividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descripcion TEXT NOT NULL,                       
    tipo ENUM('deportiva', 'cultural') NOT NULL,     
    fecha DATE NOT NULL,                             
    hora TIME NOT NULL,                             
    img_url VARCHAR(255),                            
    estado ENUM('activa', 'cancelada', 'finalizada') DEFAULT 'activa',  
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP 
);


-- insertar taller
DELIMITER $$
CREATE PROCEDURE insertTaller(
    IN p_nombre VARCHAR(45),
    IN p_tipo ENUM('deportiva', 'cultural'),
    IN p_img_url VARCHAR(200)
)
BEGIN
    INSERT INTO taller (nombre, tipo, img_url)
    VALUES (p_nombre, p_tipo, p_img_url);
END$$
DELIMITER ;

--prueba
CALL insertTaller('Basketball', 'deportiva', 'http://url.de.la.imagen');

--insertar docente completo (darle rol , asignarle su numero de empledo y registrar sus datos personales)
DELIMITER //
CREATE PROCEDURE insertDocente (
    IN p_userName VARCHAR(45),
    IN p_password VARCHAR(200),
    IN p_userRol VARCHAR(45),
    IN p_nombre VARCHAR(45),
    IN p_aPater VARCHAR(45),
    IN p_aMater VARCHAR(45),
    IN p_correo VARCHAR(45),
    IN p_titulo VARCHAR(45),
    IN p_img_url VARCHAR(200),
    IN p_estatus INT(11)
)
BEGIN
    DECLARE v_idUser INT(11);
    DECLARE v_no_empleado VARCHAR(7);
    DECLARE v_year_suffix VARCHAR(2);
    -- Obtener los dos últimos dígitos del año actual
    SET v_year_suffix = RIGHT(YEAR(CURDATE()), 2);
    -- Inserción en la tabla usertable
    INSERT INTO usertable (userName, password, userRol)
    VALUES (p_userName, p_password, p_userRol);
    -- Obtener el ID del usuario recién insertado
    SET v_idUser = LAST_INSERT_ID();
    -- Generación del número de empleado (dos últimos dígitos del año + 5 dígitos aleatorios)
    SET v_no_empleado = CONCAT(v_year_suffix, LPAD(FLOOR(RAND() * 100000), 5, '0'));
    -- Inserción en la tabla docente
    INSERT INTO docente (no_empleado, nombre, aPater, aMater, correo, titulo, img_url, estatus, idUser_fk)
    VALUES (v_no_empleado, p_nombre, p_aPater, p_aMater, p_correo, p_titulo, p_img_url, p_estatus, v_idUser);
END //
DELIMITER ;

--prueba
CALL insertar_docente(
    'jdoe',
    'securePassword123',
    'docente',
    'Juan',
    'Pérez',
    'García',
    'juan.perez@universidad.edu',
    'Mtro',
    'https://example.com/foto.jpg',
    1  
);

-- Este es para enlazar un docente a un taller por medio de su nombre
-- ya que para hacer eso se usan id de ambos cosa que el admin no podra ver 
DELIMITER //
CREATE PROCEDURE linkTeacherTaller (
    IN p_nombre_completo_docente VARCHAR(100),
    IN p_nombre_taller VARCHAR(45)
)
BEGIN
    DECLARE v_no_empleado INT(11);
    DECLARE v_id_taller INT(11);
    -- Obtener el ID del docente basado en el nombre completo
    SELECT no_empleado
    INTO v_no_empleado
    FROM docente
    WHERE CONCAT(nombre, ' ', aPater, ' ', aMater) = p_nombre_completo_docente;
    -- Obtener el ID del taller basado en el nombre del taller
    SELECT id_taller
    INTO v_id_taller
    FROM taller
    WHERE nombre = p_nombre_taller;
    -- Insertar en la tabla docente_taller
    INSERT INTO docente_taller (docente_fk, taller_fk)
    VALUES (v_no_empleado, v_id_taller);
END //
DELIMITER ;

--prueba
CALL linkTeacherTaller('Juan Pérez García', 'Piano')

--Proceso para consultar docentes
DELIMITER //
CREATE PROCEDURE getDocentes() 
BEGIN
    SELECT d.titulo, d.nombre, d.aPater, d.aMater, d.correo, d.img_url,t.nombre AS nombre_taller, t.tipo 
    FROM docente d
    JOIN docente_taller dt ON d.no_empleado = dt.docente_fk
    JOIN taller t ON dt.taller_fk = t.id_taller;
END //
DELIMITER ;

--prueba
CALL getDocentes();