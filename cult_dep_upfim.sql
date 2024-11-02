-- MySQL dump 10.13  Distrib 8.0.39, for Linux (x86_64)
--
-- Host: localhost    Database: cult_dep_upfim
-- ------------------------------------------------------
-- Server version	8.0.39-0ubuntu0.24.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `actividades`
--

DROP TABLE IF EXISTS `actividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `actividades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descripcion` text NOT NULL,
  `tipo` enum('deportiva','cultural') NOT NULL,
  `fecha` date NOT NULL,
  `hora` time NOT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `estado` enum('activa','cancelada','finalizada') DEFAULT 'activa',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `titulo` varchar(25) NOT NULL,
  `ubicacion` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividades`
--

LOCK TABLES `actividades` WRITE;
/*!40000 ALTER TABLE `actividades` DISABLE KEYS */;
/*!40000 ALTER TABLE `actividades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos` (
  `matricula` varchar(50) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `aPater` varchar(45) NOT NULL,
  `aMater` varchar(45) NOT NULL,
  `grupo` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `lengua` varchar(45) NOT NULL,
  `estatus` tinyint NOT NULL,
  `programa_fk` int NOT NULL,
  `cuatrimestre_fk` int NOT NULL,
  `idUser_fk` int NOT NULL,
  PRIMARY KEY (`matricula`,`programa_fk`,`cuatrimestre_fk`,`idUser_fk`),
  UNIQUE KEY `matricula` (`matricula`),
  KEY `fk_Alumnos_Programa Educativo_idx` (`programa_fk`),
  KEY `fk_Alumnos_Cuatrimestre1_idx` (`cuatrimestre_fk`),
  KEY `fk_alumnos_usuarios1_idx` (`idUser_fk`),
  CONSTRAINT `fk_Alumnos_Cuatrimestre1` FOREIGN KEY (`cuatrimestre_fk`) REFERENCES `cuatrimestre` (`id_cuatrimestre`),
  CONSTRAINT `fk_Alumnos_Programa Educativo` FOREIGN KEY (`programa_fk`) REFERENCES `programa` (`id_programa`),
  CONSTRAINT `fk_alumnos_usuarios1` FOREIGN KEY (`idUser_fk`) REFERENCES `usertable` (`id_User`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` VALUES ('2117031309','Romualdo','Morgan','Callaham','1SCG1','@flasingligths.edu.com.mx','M','Otawa',1,2,1,2);
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `calificacion`
--

DROP TABLE IF EXISTS `calificacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `calificacion` (
  `id_calificacion` int NOT NULL AUTO_INCREMENT,
  `cal1` int DEFAULT NULL,
  `cal2` int DEFAULT NULL,
  `cal3` int DEFAULT NULL,
  PRIMARY KEY (`id_calificacion`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calificacion`
--

LOCK TABLES `calificacion` WRITE;
/*!40000 ALTER TABLE `calificacion` DISABLE KEYS */;
INSERT INTO `calificacion` VALUES (1,9,9,9);
/*!40000 ALTER TABLE `calificacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cuatrimestre`
--

DROP TABLE IF EXISTS `cuatrimestre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuatrimestre` (
  `id_cuatrimestre` int NOT NULL AUTO_INCREMENT,
  `nameCuatri` varchar(45) NOT NULL,
  PRIMARY KEY (`id_cuatrimestre`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuatrimestre`
--

LOCK TABLES `cuatrimestre` WRITE;
/*!40000 ALTER TABLE `cuatrimestre` DISABLE KEYS */;
INSERT INTO `cuatrimestre` VALUES (1,'1'),(2,'2'),(3,'3'),(4,'4'),(5,'5'),(6,'6'),(7,'7'),(8,'8'),(9,'9'),(10,'10');
/*!40000 ALTER TABLE `cuatrimestre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docente`
--

DROP TABLE IF EXISTS `docente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docente` (
  `no_empleado` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `aPater` varchar(45) NOT NULL,
  `aMater` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `estatus` int NOT NULL,
  `idUser_fk` int NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  PRIMARY KEY (`no_empleado`,`idUser_fk`),
  KEY `fk_docente_usuarios1_idx` (`idUser_fk`),
  CONSTRAINT `fk_docente_usuarios1` FOREIGN KEY (`idUser_fk`) REFERENCES `usertable` (`id_User`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente`
--

LOCK TABLES `docente` WRITE;
/*!40000 ALTER TABLE `docente` DISABLE KEYS */;
INSERT INTO `docente` VALUES (123456789,'Armando','Perez','semeacabaronlasideas','@flashinglights',1,1,'','');
/*!40000 ALTER TABLE `docente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `docente_taller`
--

DROP TABLE IF EXISTS `docente_taller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `docente_taller` (
  `id_docente_taller` int NOT NULL AUTO_INCREMENT,
  `docente_fk` int NOT NULL,
  `taller_fk` int NOT NULL,
  PRIMARY KEY (`id_docente_taller`,`docente_fk`,`taller_fk`),
  KEY `fk_table1_taller1_idx` (`taller_fk`),
  KEY `fk_table1_docente1` (`docente_fk`),
  CONSTRAINT `fk_table1_docente1` FOREIGN KEY (`docente_fk`) REFERENCES `docente` (`no_empleado`),
  CONSTRAINT `fk_table1_taller1` FOREIGN KEY (`taller_fk`) REFERENCES `taller` (`id_taller`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente_taller`
--

LOCK TABLES `docente_taller` WRITE;
/*!40000 ALTER TABLE `docente_taller` DISABLE KEYS */;
INSERT INTO `docente_taller` VALUES (1,123456789,1);
/*!40000 ALTER TABLE `docente_taller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupo`
--

DROP TABLE IF EXISTS `grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grupo` (
  `id_grupo` int NOT NULL AUTO_INCREMENT,
  `grupo` varchar(45) NOT NULL,
  `horarios_fk` int NOT NULL,
  `docente_taller_fk` int NOT NULL,
  PRIMARY KEY (`id_grupo`,`horarios_fk`,`docente_taller_fk`),
  KEY `fk_Grupo_Horarios1_idx` (`horarios_fk`),
  KEY `fk_grupo_docente_alumno1_idx` (`docente_taller_fk`),
  CONSTRAINT `fk_grupo_docente_alumno1` FOREIGN KEY (`docente_taller_fk`) REFERENCES `docente_taller` (`id_docente_taller`),
  CONSTRAINT `fk_Grupo_Horarios1` FOREIGN KEY (`horarios_fk`) REFERENCES `horarios` (`id_horarios`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupo`
--

LOCK TABLES `grupo` WRITE;
/*!40000 ALTER TABLE `grupo` DISABLE KEYS */;
INSERT INTO `grupo` VALUES (1,'Grupo 1',1,1),(2,'Grupo 2',2,1);
/*!40000 ALTER TABLE `grupo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupo_alumno`
--

DROP TABLE IF EXISTS `grupo_alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grupo_alumno` (
  `id_registro` int NOT NULL AUTO_INCREMENT,
  `grupo_fk` int NOT NULL,
  `alumno_fk` varchar(50) NOT NULL,
  `calificacion_fk` int NOT NULL,
  `periodo_fk` int NOT NULL,
  PRIMARY KEY (`id_registro`,`grupo_fk`,`alumno_fk`,`calificacion_fk`,`periodo_fk`),
  KEY `fk_matricula_Grupo1_idx` (`grupo_fk`),
  KEY `fk_matricula_Alumnos1_idx` (`alumno_fk`),
  KEY `fk_grupo-alumno_calificacion1_idx` (`calificacion_fk`),
  KEY `fk_grupo_alumno_periodo1_idx` (`periodo_fk`),
  CONSTRAINT `fk_grupo-alumno_calificacion1` FOREIGN KEY (`calificacion_fk`) REFERENCES `calificacion` (`id_calificacion`),
  CONSTRAINT `fk_grupo_alumno_periodo1` FOREIGN KEY (`periodo_fk`) REFERENCES `periodo` (`id_periodo`),
  CONSTRAINT `fk_matricula_Alumnos1` FOREIGN KEY (`alumno_fk`) REFERENCES `alumnos` (`matricula`),
  CONSTRAINT `fk_matricula_Grupo1` FOREIGN KEY (`grupo_fk`) REFERENCES `grupo` (`id_grupo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupo_alumno`
--

LOCK TABLES `grupo_alumno` WRITE;
/*!40000 ALTER TABLE `grupo_alumno` DISABLE KEYS */;
INSERT INTO `grupo_alumno` VALUES (1,1,'2117031309',1,1);
/*!40000 ALTER TABLE `grupo_alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `horarios`
--

DROP TABLE IF EXISTS `horarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `horarios` (
  `id_horarios` int NOT NULL AUTO_INCREMENT,
  `dia` varchar(45) NOT NULL,
  `hrEntrada` time NOT NULL,
  `hrSalida` time NOT NULL,
  PRIMARY KEY (`id_horarios`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horarios`
--

LOCK TABLES `horarios` WRITE;
/*!40000 ALTER TABLE `horarios` DISABLE KEYS */;
INSERT INTO `horarios` VALUES (1,'Lunes','00:00:00','17:30:00'),(2,'Lunes','17:30:00','18:30:00');
/*!40000 ALTER TABLE `horarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `mi_taller_view`
--

DROP TABLE IF EXISTS `mi_taller_view`;
/*!50001 DROP VIEW IF EXISTS `mi_taller_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `mi_taller_view` AS SELECT 
 1 AS `taller`,
 1 AS `tipo`,
 1 AS `grupo`,
 1 AS `horario`,
 1 AS `periodo`,
 1 AS `matricula`,
 1 AS `cal1`,
 1 AS `cal2`,
 1 AS `cal3`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `periodo`
--

DROP TABLE IF EXISTS `periodo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `periodo` (
  `id_periodo` int NOT NULL AUTO_INCREMENT,
  `namePeriodo` varchar(45) NOT NULL,
  PRIMARY KEY (`id_periodo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `periodo`
--

LOCK TABLES `periodo` WRITE;
/*!40000 ALTER TABLE `periodo` DISABLE KEYS */;
INSERT INTO `periodo` VALUES (1,'Enero-Abril-2024');
/*!40000 ALTER TABLE `periodo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programa`
--

DROP TABLE IF EXISTS `programa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programa` (
  `id_programa` int NOT NULL,
  `namePrograma` varchar(45) NOT NULL,
  PRIMARY KEY (`id_programa`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programa`
--

LOCK TABLES `programa` WRITE;
/*!40000 ALTER TABLE `programa` DISABLE KEYS */;
INSERT INTO `programa` VALUES (1,'Ingeniería Agroindustrial'),(2,'Ingeniería en Producción Animal'),(3,'Ingeniería en Energías'),(4,'Ingeniería en Diseño Industrial'),(5,'Ingeniería Civil'),(6,'Ingeniería Financiera'),(7,'Ingeniería en Sistemas Computacionales'),(8,'Ingeniería en Agrotecnología');
/*!40000 ALTER TABLE `programa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `select_group_member_view`
--

DROP TABLE IF EXISTS `select_group_member_view`;
/*!50001 DROP VIEW IF EXISTS `select_group_member_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `select_group_member_view` AS SELECT 
 1 AS `taller`,
 1 AS `idGrupo`,
 1 AS `grupo`,
 1 AS `periodo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `select_groups_view`
--

DROP TABLE IF EXISTS `select_groups_view`;
/*!50001 DROP VIEW IF EXISTS `select_groups_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `select_groups_view` AS SELECT 
 1 AS `taller`,
 1 AS `idGrupo`,
 1 AS `grupo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `student_notes`
--

DROP TABLE IF EXISTS `student_notes`;
/*!50001 DROP VIEW IF EXISTS `student_notes`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `student_notes` AS SELECT 
 1 AS `matricula`,
 1 AS `taller`,
 1 AS `grupo`,
 1 AS `id_calificacion`,
 1 AS `cal1`,
 1 AS `cal2`,
 1 AS `cal3`,
 1 AS `id_periodo`,
 1 AS `namePeriodo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `student_periods_history`
--

DROP TABLE IF EXISTS `student_periods_history`;
/*!50001 DROP VIEW IF EXISTS `student_periods_history`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `student_periods_history` AS SELECT 
 1 AS `matricula`,
 1 AS `id_periodo`,
 1 AS `namePeriodo`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `studentprofile`
--

DROP TABLE IF EXISTS `studentprofile`;
/*!50001 DROP VIEW IF EXISTS `studentprofile`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `studentprofile` AS SELECT 
 1 AS `matricula`,
 1 AS `alumno`,
 1 AS `grupo`,
 1 AS `correo`,
 1 AS `sexo`,
 1 AS `lengua`,
 1 AS `estatus`,
 1 AS `namePrograma`,
 1 AS `nameCuatri`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `taller`
--

DROP TABLE IF EXISTS `taller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taller` (
  `id_taller` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `tipo` enum('deportiva','cultural') NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `estatus` int NOT NULL,
  PRIMARY KEY (`id_taller`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taller`
--

LOCK TABLES `taller` WRITE;
/*!40000 ALTER TABLE `taller` DISABLE KEYS */;
INSERT INTO `taller` VALUES (1,'Ajedrez','deportiva','',1),(2,'Club de School Idols','cultural','',1),(3,'Fulvol','deportiva','',1);
/*!40000 ALTER TABLE `taller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `teacher_groups`
--

DROP TABLE IF EXISTS `teacher_groups`;
/*!50001 DROP VIEW IF EXISTS `teacher_groups`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `teacher_groups` AS SELECT 
 1 AS `no_empleado`,
 1 AS `nombre`,
 1 AS `grupo`,
 1 AS `namePeriodo`,
 1 AS `matricula`,
 1 AS `alumno`,
 1 AS `cal1`,
 1 AS `cal2`,
 1 AS `cal3`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `user_logs`
--

DROP TABLE IF EXISTS `user_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_logs` (
  `log_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `action` varchar(100) DEFAULT NULL,
  `action_time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `admin_id` int DEFAULT NULL,
  PRIMARY KEY (`log_id`),
  KEY `user_id` (`user_id`),
  KEY `admin_id` (`admin_id`),
  CONSTRAINT `user_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `usertable` (`id_User`),
  CONSTRAINT `user_logs_ibfk_2` FOREIGN KEY (`admin_id`) REFERENCES `usertable` (`id_User`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_logs`
--

LOCK TABLES `user_logs` WRITE;
/*!40000 ALTER TABLE `user_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertable`
--

DROP TABLE IF EXISTS `usertable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertable` (
  `id_User` int NOT NULL AUTO_INCREMENT,
  `userName` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `userRol` enum('alumno','docente','admin') NOT NULL,
  `lastModified` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_User`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertable`
--

LOCK TABLES `usertable` WRITE;
/*!40000 ALTER TABLE `usertable` DISABLE KEYS */;
INSERT INTO `usertable` VALUES (1,'tlaxcala','$2b$10$EEwhMolIvEb63rYlj5BG4umyLgnWBFbfyOCGby8fbgFikwakTNcwq','docente','2024-10-17 13:33:34','2024-10-17 13:54:51'),(2,'2117031309','$2b$10$p6/B7MaA0L.fV3iUcgEZ9.jl96me8qEOrxfoTf6ZhjOYO8AFraMOa','alumno','2024-10-17 13:33:34','2024-10-17 13:54:51');
/*!40000 ALTER TABLE `usertable` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_user_update` AFTER UPDATE ON `usertable` FOR EACH ROW BEGIN
    IF NEW.userRol = 'admin' THEN
        INSERT INTO user_logs (user_id, `action`, admin_id) VALUES (NEW.id_User, 'update', NEW.id_User);
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `mi_taller_view`
--

/*!50001 DROP VIEW IF EXISTS `mi_taller_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `mi_taller_view` AS select `taller`.`nombre` AS `taller`,`taller`.`tipo` AS `tipo`,`grupo`.`grupo` AS `grupo`,concat(`horarios`.`dia`,' de ',`horarios`.`hrEntrada`,' a ',`horarios`.`hrSalida`) AS `horario`,`periodo`.`namePeriodo` AS `periodo`,`grupo_alumno`.`alumno_fk` AS `matricula`,`calificacion`.`cal1` AS `cal1`,`calificacion`.`cal2` AS `cal2`,`calificacion`.`cal3` AS `cal3` from ((((((`grupo_alumno` join `calificacion` on((`calificacion`.`id_calificacion` = `grupo_alumno`.`calificacion_fk`))) join `periodo` on((`periodo`.`id_periodo` = `grupo_alumno`.`periodo_fk`))) join `grupo` on((`grupo`.`id_grupo` = `grupo_alumno`.`grupo_fk`))) join `horarios` on((`horarios`.`id_horarios` = `grupo`.`horarios_fk`))) join `docente_taller` on((`docente_taller`.`id_docente_taller` = `grupo`.`docente_taller_fk`))) join `taller` on((`taller`.`id_taller` = `docente_taller`.`taller_fk`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `select_group_member_view`
--

/*!50001 DROP VIEW IF EXISTS `select_group_member_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `select_group_member_view` AS select `taller`.`nombre` AS `taller`,`grupo`.`id_grupo` AS `idGrupo`,`grupo`.`grupo` AS `grupo`,`periodo`.`namePeriodo` AS `periodo` from ((((`grupo_alumno` join `grupo` on((`grupo`.`id_grupo` = `grupo_alumno`.`grupo_fk`))) join `docente_taller` on((`docente_taller`.`id_docente_taller` = `grupo`.`docente_taller_fk`))) join `taller` on((`taller`.`id_taller` = `docente_taller`.`taller_fk`))) join `periodo` on((`periodo`.`id_periodo` = `grupo_alumno`.`periodo_fk`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `select_groups_view`
--

/*!50001 DROP VIEW IF EXISTS `select_groups_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `select_groups_view` AS select `taller`.`nombre` AS `taller`,`grupo`.`id_grupo` AS `idGrupo`,`grupo`.`grupo` AS `grupo` from ((`taller` join `docente_taller` on((`taller`.`id_taller` = `docente_taller`.`taller_fk`))) join `grupo` on((`docente_taller`.`id_docente_taller` = `grupo`.`docente_taller_fk`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `student_notes`
--

/*!50001 DROP VIEW IF EXISTS `student_notes`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `student_notes` AS select `alumnos`.`matricula` AS `matricula`,`taller`.`nombre` AS `taller`,`grupo`.`grupo` AS `grupo`,`calificacion`.`id_calificacion` AS `id_calificacion`,`calificacion`.`cal1` AS `cal1`,`calificacion`.`cal2` AS `cal2`,`calificacion`.`cal3` AS `cal3`,`periodo`.`id_periodo` AS `id_periodo`,`periodo`.`namePeriodo` AS `namePeriodo` from ((((((`alumnos` join `grupo_alumno` on((`grupo_alumno`.`alumno_fk` = `alumnos`.`matricula`))) join `calificacion` on((`calificacion`.`id_calificacion` = `grupo_alumno`.`calificacion_fk`))) join `periodo` on((`periodo`.`id_periodo` = `grupo_alumno`.`periodo_fk`))) join `grupo` on((`grupo`.`id_grupo` = `grupo_alumno`.`grupo_fk`))) join `docente_taller` on((`docente_taller`.`id_docente_taller` = `grupo`.`docente_taller_fk`))) join `taller` on((`taller`.`id_taller` = `docente_taller`.`taller_fk`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `student_periods_history`
--

/*!50001 DROP VIEW IF EXISTS `student_periods_history`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `student_periods_history` AS select `alumnos`.`matricula` AS `matricula`,`periodo`.`id_periodo` AS `id_periodo`,`periodo`.`namePeriodo` AS `namePeriodo` from ((`alumnos` join `grupo_alumno` on((`grupo_alumno`.`alumno_fk` = `alumnos`.`matricula`))) join `periodo` on((`periodo`.`id_periodo` = `grupo_alumno`.`periodo_fk`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `studentprofile`
--

/*!50001 DROP VIEW IF EXISTS `studentprofile`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `studentprofile` AS select `alumnos`.`matricula` AS `matricula`,concat(`alumnos`.`nombre`,' ',`alumnos`.`aPater`,' ',`alumnos`.`aMater`) AS `alumno`,`alumnos`.`grupo` AS `grupo`,`alumnos`.`correo` AS `correo`,`alumnos`.`sexo` AS `sexo`,`alumnos`.`lengua` AS `lengua`,`alumnos`.`estatus` AS `estatus`,`programa`.`namePrograma` AS `namePrograma`,`cuatrimestre`.`nameCuatri` AS `nameCuatri` from ((`alumnos` join `programa` on((`programa`.`id_programa` = `alumnos`.`programa_fk`))) join `cuatrimestre` on((`cuatrimestre`.`id_cuatrimestre` = `alumnos`.`cuatrimestre_fk`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `teacher_groups`
--

/*!50001 DROP VIEW IF EXISTS `teacher_groups`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `teacher_groups` AS select `docente`.`no_empleado` AS `no_empleado`,`taller`.`nombre` AS `nombre`,`grupo`.`grupo` AS `grupo`,`periodo`.`namePeriodo` AS `namePeriodo`,`alumnos`.`matricula` AS `matricula`,concat(`alumnos`.`nombre`,' ',`alumnos`.`aPater`,' ',`alumnos`.`aMater`) AS `alumno`,`calificacion`.`cal1` AS `cal1`,`calificacion`.`cal2` AS `cal2`,`calificacion`.`cal3` AS `cal3` from (((((((`docente_taller` join `docente` on((`docente`.`no_empleado` = `docente_taller`.`docente_fk`))) join `taller` on((`taller`.`id_taller` = `docente_taller`.`taller_fk`))) join `grupo` on((`grupo`.`docente_taller_fk` = `docente_taller`.`id_docente_taller`))) join `grupo_alumno` on((`grupo_alumno`.`grupo_fk` = `grupo`.`id_grupo`))) join `periodo` on((`periodo`.`id_periodo` = `grupo_alumno`.`periodo_fk`))) join `calificacion` on((`calificacion`.`id_calificacion` = `grupo_alumno`.`calificacion_fk`))) join `alumnos` on((`alumnos`.`matricula` = `grupo_alumno`.`alumno_fk`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-17 10:56:46
