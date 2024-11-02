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
  titulo VARCHAR(8) NOT NULL,
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
  estatus INT(10) NOT NULL,
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
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    titulo VARCHAR(25) NOT NULL,     
    ubicacion VARCHAR(25) NOT NULL   
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
DELIMITER //


CREATE PROCEDURE getDocente()
BEGIN
    SELECT 
        d.no_empleado, 
        d.titulo, 
        d.nombre, 
        d.aPater, 
        d.aMater
    FROM 
        docente d;
END //
DELIMITER ;
 ---------------------------------------------------------------------------------------
DELIMITER //
CREATE PROCEDURE insertar_taller_con_grupos(
    IN nombre_taller VARCHAR(45),
    IN tipo_taller ENUM('deportiva', 'cultural'),
    IN img_url_taller VARCHAR(200),
    IN estatus_taller INT,
    IN nombre_docente_completo VARCHAR(135), 
    IN grupos_json JSON                     
)
BEGIN
    DECLARE docente_id INT DEFAULT NULL;
    DECLARE taller_id INT;
    DECLARE grupo_nombre VARCHAR(45);
    DECLARE dia_horario VARCHAR(45);
    DECLARE hrEntrada TIME;
    DECLARE hrSalida TIME;
    DECLARE grupos_count INT;
    DECLARE idx INT DEFAULT 0;
    DECLARE horario_id INT;
    SET grupos_count = JSON_LENGTH(grupos_json);
    IF grupos_count < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Debe haber al menos un grupo.';
    ELSEIF grupos_count > 3 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No puede haber más de tres grupos.';
    END IF;
    SELECT no_empleado INTO docente_id
    FROM docente
    WHERE CONCAT(nombre, ' ', aPater, ' ', aMater) = nombre_docente_completo;
    IF docente_id IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Docente no encontrado';
    END IF;
    INSERT INTO taller (nombre, tipo, img_url, estatus)
    VALUES (nombre_taller, tipo_taller, img_url_taller, estatus_taller);
    SET taller_id = LAST_INSERT_ID();
    WHILE idx < grupos_count DO
        SET grupo_nombre = JSON_UNQUOTE(JSON_EXTRACT(grupos_json, CONCAT('$[', idx, '].nombre')));
        SET dia_horario = JSON_UNQUOTE(JSON_EXTRACT(grupos_json, CONCAT('$[', idx, '].dia')));
        SET hrEntrada = JSON_UNQUOTE(JSON_EXTRACT(grupos_json, CONCAT('$[', idx, '].entrada')));
        SET hrSalida = JSON_UNQUOTE(JSON_EXTRACT(grupos_json, CONCAT('$[', idx, '].salida')));
        INSERT INTO horarios (dia, hrEntrada, hrSalida)
        VALUES (dia_horario, hrEntrada, hrSalida);
        SET horario_id = LAST_INSERT_ID();
        INSERT INTO grupo (grupo, horarios_fk, docente_taller_fk)
        VALUES (grupo_nombre, horario_id, docente_id);
        SET idx = idx + 1;
    END WHILE;
END //
DELIMITER ;
----------------------------------------------------------------------------------------------------
DELIMITER //
CREATE PROCEDURE getTallerQrud()
BEGIN
    SELECT 
        t.id_taller, 
        t.nombre AS nombre_taller, 
        t.tipo, 
        t.img_url AS imagen_taller, 
        t.estatus AS estatus_taller,
        CONCAT(d.titulo, ' ', d.nombre, ' ', d.aPater, ' ', d.aMater) AS nombre_completo_docente,
        GROUP_CONCAT(
            CONCAT('Grupo: ', g.grupo, 
                   ', Día: ', h.dia, 
                   ', Entrada: ', TIME_FORMAT(h.hrEntrada, '%H:%i'), 
                   ', Salida: ', TIME_FORMAT(h.hrSalida, '%H:%i'))
            SEPARATOR ' | '
        ) AS grupos_y_horarios
    FROM 
        taller t
    LEFT JOIN 
        docente_taller dt ON t.id_taller = dt.taller_fk
    LEFT JOIN 
        docente d ON dt.docente_fk = d.no_empleado
    LEFT JOIN
        grupo g ON dt.id_docente_taller = g.docente_taller_fk
    LEFT JOIN
        horarios h ON g.horarios_fk = h.id_horarios
    GROUP BY 
        t.id_taller, d.no_empleado
    ORDER BY 
        t.id_taller, d.no_empleado;
END //
DELIMITER ;
--------------------------------------------------------------------------------------------
DELIMITER //

CREATE PROCEDURE getTalleres()
BEGIN
    SELECT 
        id_taller, 
        nombre, 
        tipo, 
        img_url, 
        CASE 
            WHEN estatus = 1 THEN 'activo'
            WHEN estatus = 0 THEN 'inactivo'
        END AS estatus
    FROM 
        taller
    WHERE 
        estatus = 1  
    ORDER BY 
        id_taller;
END //
DELIMITER ;
--------------------------------------------------------------------------------------------------
DELIMITER //
CREATE PROCEDURE getDocentes()
BEGIN
    SELECT 
        d.no_empleado, 
        d.titulo, 
        d.nombre, 
        d.aPater, 
        d.aMater, 
        d.correo, 
        d.img_url, 
        GROUP_CONCAT(t.nombre SEPARATOR ', ') AS talleres_impartidos, 
        GROUP_CONCAT(t.tipo SEPARATOR ', ') AS tipos_taller 
    FROM 
        docente d
    JOIN 
        docente_taller dt ON d.no_empleado = dt.docente_fk
    JOIN 
        taller t ON dt.taller_fk = t.id_taller
    WHERE 
        t.estatus = 1  
    GROUP BY 
        d.no_empleado;  
END //
DELIMITER ;
------------------------------------------------------------------------------------------
DELIMITER //
CREATE PROCEDURE getActividades()
BEGIN
    SELECT 
        id,
        titulo,
        descripcion,
        tipo,
        fecha,
        hora,
        ubicacion,
        img_url,
        estado
    FROM 
        actividades;
END //

DELIMITER ;
-----------------------------------------------------------------------------------------------
DELIMITER //
CREATE PROCEDURE insertActividad(
    IN p_titulo VARCHAR(255),
    IN p_descripcion TEXT,
    IN p_tipo ENUM('deportiva', 'cultural'),
    IN p_fecha DATE,
    IN p_hora TIME,
    IN p_ubicacion VARCHAR(255),
    IN p_img_url VARCHAR(255),
    IN p_estado ENUM('activa', 'cancelada', 'finalizada')
)
BEGIN
    INSERT INTO actividades (titulo, descripcion, tipo, fecha, hora, ubicacion, img_url, estado)
    VALUES (p_titulo, p_descripcion, p_tipo, p_fecha, p_hora, p_ubicacion, p_img_url, p_estado);
END //
DELIMITER ;
------------------------------------------------------------------------------------------------------
DELIMITER //
CREATE PROCEDURE getActividadById(
    IN p_id INT
)
BEGIN
    SELECT 
        id,
        titulo,
        descripcion,
        tipo,
        fecha,
        hora,
        ubicacion,
        img_url,
        estado
    FROM 
        actividades
    WHERE 
        id = p_id;
END //
DELIMITER ;
---------------------------------------------------------------------------------------------
DELIMITER //
CREATE PROCEDURE deleteActividad(
    IN p_id INT
)
BEGIN
    DELETE FROM actividades 
    WHERE id = p_id;
END //
DELIMITER ;
------------------------------------------------------------------------------------------
DELIMITER //
CREATE PROCEDURE updateActividad(
    IN p_id INT,
    IN p_titulo VARCHAR(255),
    IN p_descripcion TEXT,
    IN p_tipo ENUM('deportiva', 'cultural'),
    IN p_fecha DATE,
    IN p_hora TIME,
    IN p_ubicacion VARCHAR(255),
    IN p_img_url VARCHAR(255),
    IN p_estado ENUM('activa', 'cancelada', 'finalizada')
)
BEGIN
    UPDATE actividades
    SET 
        titulo = p_titulo,
        descripcion = p_descripcion,
        tipo = p_tipo,
        fecha = p_fecha,
        hora = p_hora,
        ubicacion = p_ubicacion,
        img_url = p_img_url,
        estado = p_estado
    WHERE 
        id = p_id;
END //
DELIMITER ;
-------------------------------------------------------------
DELIMITER //

CREATE PROCEDURE admin_studentinsert(
    IN idUser INT, 
    IN userName VARCHAR(45), 
    IN pass VARCHAR(200), 
    IN studentName VARCHAR(45), 
    IN surnameP VARCHAR(45), 
    IN surnameM VARCHAR(45), 
    IN studentGroup VARCHAR(45), 
    IN email VARCHAR(45), 
    IN sexo VARCHAR(45), 
    IN lengua VARCHAR(1000), 
    IN programa VARCHAR(45), 
    IN cuatrimestre VARCHAR(45)
)
BEGIN
    DECLARE idProgram INT;
    DECLARE idCuatri INT;
    DECLARE lastInsertUserId INT;
    DECLARE rol VARCHAR(45) DEFAULT 'alumno';
    DECLARE estatus INT DEFAULT 1;

    -- Obtener id_programa
    SELECT id_programa INTO idProgram 
    FROM programa 
    WHERE namePrograma = programa;
    
    -- Obtener id_cuatrimestre
    SELECT id_cuatrimestre INTO idCuatri 
    FROM cuatrimestre 
    WHERE nameCuatri = cuatrimestre;
    
    -- Verificar que idProgram y idCuatri no sean NULL
    IF idProgram IS NOT NULL AND idCuatri IS NOT NULL THEN
        -- Insertar en usertable
        INSERT INTO usertable (userName, password, userRol) 
        VALUES (userName, pass, rol);
        
        -- Obtener el último ID insertado
        SET lastInsertUserId = LAST_INSERT_ID();
        
        -- Insertar en alumnos
        INSERT INTO alumnos (matricula, nombre, aPater, aMater, grupo, correo, sexo, lengua, estatus, programa_fk, cuatrimestre_fk, idUser_fk)
        VALUES (idUser, studentName, surnameP, surnameM, studentGroup, email, sexo, lengua, estatus, idProgram, idCuatri, lastInsertUserId);
        -- Mensaje de éxito
        SELECT TRUE AS message;
    ELSE
        -- Mensaje de error
        SELECT FALSE AS message;
    
    END IF;
END //

DELIMITER ;
-----------------------------------------------------------------------------------------------
DELIMITER //

CREATE PROCEDURE getInfoAlumno(IN matricula_alumno INT)
BEGIN
    SELECT 
        CONCAT(a.nombre, ' ', a.aPater, ' ', a.aMater) AS nombre_completo_alumno,
        a.correo,
        p.namePrograma AS programa,
        c.nameCuatri AS cuatrimestre,
        per.namePeriodo AS periodo,
        t.nombre AS nombre_taller,
        g.grupo AS grupo_taller,
        h.dia AS dia_taller,
        h.hrEntrada AS hora_entrada,
        h.hrSalida AS hora_salida,
        CONCAT(d.nombre, ' ', d.aPater, ' ', d.aMater) AS nombre_completo_docente,
        CASE WHEN ga.alumno_fk IS NOT NULL THEN 'Inscrito' ELSE 'No Inscrito' END AS estatus
    FROM alumnos a
    LEFT JOIN programa p ON a.programa_fk = p.id_programa
    LEFT JOIN cuatrimestre c ON a.cuatrimestre_fk = c.id_cuatrimestre
    LEFT JOIN grupo_alumno ga ON a.matricula = ga.alumno_fk
    LEFT JOIN grupo g ON ga.grupo_fk = g.id_grupo
    LEFT JOIN horarios h ON g.horarios_fk = h.id_horarios
    LEFT JOIN docente_taller dt ON g.docente_taller_fk = dt.id_docente_taller
    LEFT JOIN docente d ON dt.docente_fk = d.no_empleado
    LEFT JOIN taller t ON dt.taller_fk = t.id_taller
    LEFT JOIN periodo per ON ga.periodo_fk = per.id_periodo
    WHERE a.matricula = matricula_alumno;
END //

DELIMITER ;
--------------------------------------------------------------------------------------------
DELIMITER //
CREATE PROCEDURE deletedTaller(IN p_id_taller INT)
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE v_id_docente_taller INT;
    DECLARE v_id_horario INT;

    -- Cursor para obtener los registros de docente_taller asociados con el taller
    DECLARE cur_docente_taller CURSOR FOR 
        SELECT id_docente_taller 
        FROM docente_taller 
        WHERE taller_fk = p_id_taller;

    -- Handler para controlar el fin del cursor
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur_docente_taller;

    read_loop: LOOP
        FETCH cur_docente_taller INTO v_id_docente_taller;
        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Obtener el horario asociado al grupo relacionado con este docente_taller
        SELECT horarios_fk INTO v_id_horario 
        FROM grupo 
        WHERE docente_taller_fk = v_id_docente_taller;

        -- Eliminar el grupo relacionado con el docente_taller
        DELETE FROM grupo 
        WHERE docente_taller_fk = v_id_docente_taller;

        -- Eliminar el horario si existe (y solo si ya no está asociado a ningún otro grupo)
        DELETE FROM horarios 
        WHERE id_horarios = v_id_horario AND NOT EXISTS (
            SELECT 1 FROM grupo WHERE horarios_fk = v_id_horario
        );

        -- Eliminar el registro en docente_taller
        DELETE FROM docente_taller 
        WHERE id_docente_taller = v_id_docente_taller;
    END LOOP read_loop;

    CLOSE cur_docente_taller;

    -- Finalmente, eliminar el taller
    DELETE FROM taller WHERE id_taller = p_id_taller;

END //

DELIMITER ;

-------------------------------------------------------------------------------------------------------------------------------------
DELIMITER //

CREATE PROCEDURE getTallerById(IN p_id_taller INT)
BEGIN
    SELECT * 
    FROM taller 
    WHERE id_taller = p_id_taller;
END //

DELIMITER ;
--------------------------------------------------------------------------------------------------------------------------
