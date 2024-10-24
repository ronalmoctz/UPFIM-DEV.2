CREATE DATABASE  IF NOT EXISTS `uni` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `uni`;
-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: uni
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
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
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `titulo` varchar(25) NOT NULL,
  `ubicacion` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividades`
--

LOCK TABLES `actividades` WRITE;
/*!40000 ALTER TABLE `actividades` DISABLE KEYS */;
INSERT INTO `actividades` VALUES (107,'sdfsdf','cultural','2024-09-11','13:01:00','https://res.cloudinary.com/doqea1zkf/image/upload/v1727589589/actividades/1727589589189.png','cancelada','2024-09-29 05:59:50','2024-09-29 05:59:50','sdfsdf','sdfsdf'),(110,'wefwef','cultural','2024-09-05','15:33:00','https://res.cloudinary.com/doqea1zkf/image/upload/v1727731871/actividades/1727731870642.png','activa','2024-09-30 21:31:12','2024-09-30 21:31:12','Fiesta de desfraces','En el salon');
/*!40000 ALTER TABLE `actividades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumnos`
--

DROP TABLE IF EXISTS `alumnos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumnos` (
  `matricula` int NOT NULL AUTO_INCREMENT,
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
  PRIMARY KEY (`matricula`),
  KEY `programa_fk` (`programa_fk`),
  KEY `cuatrimestre_fk` (`cuatrimestre_fk`),
  KEY `idUser_fk` (`idUser_fk`),
  CONSTRAINT `alumnos_ibfk_1` FOREIGN KEY (`programa_fk`) REFERENCES `programa` (`id_programa`),
  CONSTRAINT `alumnos_ibfk_2` FOREIGN KEY (`cuatrimestre_fk`) REFERENCES `cuatrimestre` (`id_cuatrimestre`),
  CONSTRAINT `alumnos_ibfk_3` FOREIGN KEY (`idUser_fk`) REFERENCES `usertable` (`id_User`)
) ENGINE=InnoDB AUTO_INCREMENT=2117031599 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumnos`
--

LOCK TABLES `alumnos` WRITE;
/*!40000 ALTER TABLE `alumnos` DISABLE KEYS */;
INSERT INTO `alumnos` VALUES (2117031345,'Noel','Piña','Olvera','9SCG1','noel@upfim.edu.mx','Homo','Ingles',1,7,7,2),(2117031598,'Carlos','Medina','Padilla','4IAG1','2117031598@upfim.edu.mx','H','Español',1,1,4,8);
/*!40000 ALTER TABLE `alumnos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `audtoria_inserciones`
--

DROP TABLE IF EXISTS `audtoria_inserciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `audtoria_inserciones` (
  `id_auditoria` int NOT NULL AUTO_INCREMENT,
  `tabla` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `accion` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `descripcion` text COLLATE utf8mb4_general_ci,
  `fecha` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_auditoria`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `audtoria_inserciones`
--

LOCK TABLES `audtoria_inserciones` WRITE;
/*!40000 ALTER TABLE `audtoria_inserciones` DISABLE KEYS */;
INSERT INTO `audtoria_inserciones` VALUES (1,'taller','INSERT','Se insertó un taller con ID 19, Nombre: Tiro con Arco','2024-09-21 23:00:34'),(2,'taller','INSERT','Se insertó un taller con ID 20, Nombre: Tiro con Arco','2024-09-21 23:01:09'),(3,'taller','INSERT','Se insertó un taller con ID 21, Nombre: Tiroteo con metralleta','2024-09-23 15:17:36'),(4,'taller','INSERT','Se insertó un taller con ID 22, Nombre: Pintura','2024-09-23 15:27:22'),(5,'taller','INSERT','Se insertó un taller con ID 23, Nombre: Basketball','2024-09-30 19:55:07'),(6,'taller','INSERT','Se insertó un taller con ID 24, Nombre: Basketball','2024-09-30 19:56:10'),(7,'taller','INSERT','Se insertó un taller con ID 25, Nombre: Taller de Pintura','2024-09-30 20:08:34'),(8,'taller','INSERT','Se insertó un taller con ID 26, Nombre: Taller de Pintura','2024-09-30 20:09:30'),(9,'taller','INSERT','Se insertó un taller con ID 27, Nombre: Fitbol','2024-09-30 20:23:40'),(10,'taller','INSERT','Se insertó un taller con ID 28, Nombre: Escultura','2024-09-30 21:13:12'),(11,'taller','INSERT','Se insertó un taller con ID 29, Nombre: Bolibol','2024-09-30 21:13:23'),(12,'taller','INSERT','Se insertó un taller con ID 30, Nombre: Bolibol','2024-09-30 21:19:47'),(13,'taller','INSERT','Se insertó un taller con ID 31, Nombre: Coro','2024-09-30 21:23:54'),(14,'taller','INSERT','Se insertó un taller con ID 32, Nombre: Bolibol','2024-09-30 21:39:19'),(15,'taller','INSERT','Se insertó un taller con ID 33, Nombre: Boxeo','2024-09-30 22:39:55'),(16,'taller','INSERT','Se insertó un taller con ID 34, Nombre: Basket','2024-09-30 22:54:36'),(17,'taller','INSERT','Se insertó un taller con ID 35, Nombre: Zumba','2024-09-30 23:08:16'),(18,'taller','INSERT','Se insertó un taller con ID 36, Nombre: hfghfg','2024-09-30 23:16:43'),(19,'taller','INSERT','Se insertó un taller con ID 37, Nombre: Doxeo','2024-10-01 01:35:19'),(20,'taller','INSERT','Se insertó un taller con ID 38, Nombre: Matar','2024-10-01 16:01:33'),(21,'taller','INSERT','Se insertó un taller con ID 39, Nombre: Taller de Fútbol','2024-10-01 23:47:15'),(22,'taller','INSERT','Se insertó un taller con ID 40, Nombre: Taller de Fútbol','2024-10-01 23:53:07'),(23,'taller','INSERT','Se insertó un taller con ID 41, Nombre: Boeibol','2024-10-02 16:14:15'),(24,'taller','INSERT','Se insertó un taller con ID 42, Nombre: Boeibol','2024-10-02 16:30:36'),(25,'taller','INSERT','Se insertó un taller con ID 43, Nombre: Boeibol','2024-10-02 17:26:29'),(26,'taller','INSERT','Se insertó un taller con ID 44, Nombre: Boeibol','2024-10-02 17:32:18'),(27,'taller','INSERT','Se insertó un taller con ID 45, Nombre: Boeibol','2024-10-02 17:47:23'),(28,'taller','INSERT','Se insertó un taller con ID 46, Nombre: Boeibol','2024-10-02 18:01:52'),(29,'taller','INSERT','Se insertó un taller con ID 47, Nombre: Boeibol','2024-10-02 19:10:26'),(30,'taller','INSERT','Se insertó un taller con ID 48, Nombre: Piano','2024-10-02 19:27:06'),(31,'taller','INSERT','Se insertó un taller con ID 49, Nombre: Piano','2024-10-02 19:34:35'),(32,'taller','INSERT','Se insertó un taller con ID 50, Nombre: Boxeo','2024-10-02 19:39:12'),(33,'taller','INSERT','Se insertó un taller con ID 51, Nombre: Doxeo','2024-10-03 18:27:43'),(34,'taller','INSERT','Se insertó un taller con ID 52, Nombre: Pintura','2024-10-03 18:38:41'),(35,'taller','INSERT','Se insertó un taller con ID 53, Nombre: Danza Moderna','2024-10-03 18:50:01'),(36,'taller','INSERT','Se insertó un taller con ID 54, Nombre: Danza Moderna','2024-10-03 19:02:25'),(37,'taller','INSERT','Se insertó un taller con ID 55, Nombre: Piano','2024-10-03 19:23:06'),(38,'taller','INSERT','Se insertó un taller con ID 56, Nombre: Danza Moderna','2024-10-03 20:39:47'),(39,'taller','INSERT','Se insertó un taller con ID 57, Nombre: Boxeo','2024-10-04 03:28:34'),(40,'taller','INSERT','Se insertó un taller con ID 58, Nombre: Guitarra','2024-10-04 03:33:04'),(41,'taller','INSERT','Se insertó un taller con ID 59, Nombre: Piano','2024-10-04 19:52:41'),(42,'taller','INSERT','Se insertó un taller con ID 60, Nombre: Piano','2024-10-04 20:09:57'),(43,'taller','INSERT','Se insertó un taller con ID 61, Nombre: Boxeo','2024-10-04 22:12:12'),(44,'taller','INSERT','Se insertó un taller con ID 62, Nombre: Boxeo','2024-10-04 22:13:25'),(45,'taller','INSERT','Se insertó un taller con ID 63, Nombre: Boxeo','2024-10-04 22:16:11'),(46,'taller','INSERT','Se insertó un taller con ID 64, Nombre: Guitarra','2024-10-04 22:28:56'),(47,'taller','INSERT','Se insertó un taller con ID 65, Nombre: Piano','2024-10-04 22:46:07'),(48,'taller','INSERT','Se insertó un taller con ID 66, Nombre: Boxeo','2024-10-04 22:56:59'),(49,'taller','INSERT','Se insertó un taller con ID 67, Nombre: Guitarra','2024-10-04 23:03:45'),(50,'taller','INSERT','Se insertó un taller con ID 68, Nombre: Piano','2024-10-05 18:15:18'),(51,'taller','INSERT','Se insertó un taller con ID 69, Nombre: Boxeo','2024-10-05 18:18:54'),(52,'taller','INSERT','Se insertó un taller con ID 70, Nombre: Ajedez ','2024-10-05 19:01:10'),(53,'taller','INSERT','Se insertó un taller con ID 71, Nombre: guitarra','2024-10-05 21:34:00'),(54,'taller','INSERT','Se insertó un taller con ID 72, Nombre: Piano','2024-10-05 21:42:14'),(55,'taller','INSERT','Se insertó un taller con ID 73, Nombre: Danza Moderna','2024-10-05 22:31:01'),(56,'taller','INSERT','Se insertó un taller con ID 74, Nombre: Piano','2024-10-07 16:06:07'),(57,'taller','INSERT','Se insertó un taller con ID 75, Nombre: Guitarra','2024-10-07 16:06:42'),(58,'taller','INSERT','Se insertó un taller con ID 76, Nombre: Danza ','2024-10-07 16:17:00'),(59,'taller','INSERT','Se insertó un taller con ID 77, Nombre: Ajedrez','2024-10-07 16:30:31'),(60,'taller','INSERT','Se insertó un taller con ID 78, Nombre: Piano','2024-10-07 16:56:30'),(61,'taller','INSERT','Se insertó un taller con ID 79, Nombre: Guitarra','2024-10-07 16:57:31'),(62,'taller','INSERT','Se insertó un taller con ID 80, Nombre: Danza','2024-10-07 16:58:46'),(63,'taller','INSERT','Se insertó un taller con ID 81, Nombre: Piano ','2024-10-07 17:11:46'),(64,'taller','INSERT','Se insertó un taller con ID 82, Nombre: Guitarra ','2024-10-07 17:17:14'),(65,'taller','INSERT','Se insertó un taller con ID 83, Nombre: Doxeo','2024-10-07 18:15:20'),(66,'taller','INSERT','Se insertó un taller con ID 84, Nombre: Piano','2024-10-13 20:39:39'),(67,'taller','INSERT','Se insertó un taller con ID 85, Nombre: Doxeo','2024-10-15 21:58:22');
/*!40000 ALTER TABLE `audtoria_inserciones` ENABLE KEYS */;
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
INSERT INTO `calificacion` VALUES (1,0,0,0);
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
  `no_empleado` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `aPater` varchar(45) NOT NULL,
  `aMater` varchar(45) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `titulo` varchar(45) NOT NULL,
  `img_url` varchar(200) NOT NULL,
  `estatus` int NOT NULL,
  `idUser_fk` int NOT NULL,
  PRIMARY KEY (`no_empleado`),
  KEY `idUser_fk` (`idUser_fk`),
  CONSTRAINT `docente_ibfk_1` FOREIGN KEY (`idUser_fk`) REFERENCES `usertable` (`id_User`)
) ENGINE=InnoDB AUTO_INCREMENT=2487798 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente`
--

LOCK TABLES `docente` WRITE;
/*!40000 ALTER TABLE `docente` DISABLE KEYS */;
INSERT INTO `docente` VALUES (2415670,'Noel','Olvera','Piña','noe.perez@universidad.edu','Mtro.','https://res.cloudinary.com/doqea1zkf/image/upload/v1726343159/docentes/mpdxl4bn6ueapgn2h0as.png',1,2),(2418553,'Ronaldo','Domingo','Larioss','cris.perez@universidad.edu','Lic.','https://res.cloudinary.com/doqea1zkf/image/upload/v1726347507/docentes/hnaq5w0aclahuwelclue.png',1,5),(2473477,'Cristopher','Mejia Guapillo','Guapillo','cris.perez@universidad.edu','Lic.','https://res.cloudinary.com/doqea1zkf/image/upload/v1726347441/docentes/xyxvuuhntsxgljdlyfzx.png',1,3),(2487797,'Beto','Domingo','Alcaraz','cris.perez@universidad.edu','Lic.','https://res.cloudinary.com/doqea1zkf/image/upload/v1726347478/docentes/co2leehzufbefnxjnx2u.png',1,4);
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
  PRIMARY KEY (`id_docente_taller`),
  KEY `docente_fk` (`docente_fk`),
  KEY `taller_fk` (`taller_fk`),
  CONSTRAINT `docente_taller_ibfk_1` FOREIGN KEY (`docente_fk`) REFERENCES `docente` (`no_empleado`),
  CONSTRAINT `docente_taller_ibfk_2` FOREIGN KEY (`taller_fk`) REFERENCES `taller` (`id_taller`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `docente_taller`
--

LOCK TABLES `docente_taller` WRITE;
/*!40000 ALTER TABLE `docente_taller` DISABLE KEYS */;
INSERT INTO `docente_taller` VALUES (72,2415670,84),(73,2473477,85);
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
  PRIMARY KEY (`id_grupo`),
  KEY `horarios_fk` (`horarios_fk`),
  KEY `docente_taller_fk` (`docente_taller_fk`),
  CONSTRAINT `grupo_ibfk_1` FOREIGN KEY (`horarios_fk`) REFERENCES `horarios` (`id_horarios`),
  CONSTRAINT `grupo_ibfk_2` FOREIGN KEY (`docente_taller_fk`) REFERENCES `docente_taller` (`id_docente_taller`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupo`
--

LOCK TABLES `grupo` WRITE;
/*!40000 ALTER TABLE `grupo` DISABLE KEYS */;
INSERT INTO `grupo` VALUES (82,'Grupo 1',94,72),(83,'Grupo 1',95,73);
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
  `alumno_fk` int NOT NULL,
  `calificacion_fk` int NOT NULL,
  `periodo_fk` int NOT NULL,
  PRIMARY KEY (`id_registro`),
  KEY `grupo_fk` (`grupo_fk`),
  KEY `alumno_fk` (`alumno_fk`),
  KEY `calificacion_fk` (`calificacion_fk`),
  KEY `periodo_fk` (`periodo_fk`),
  CONSTRAINT `grupo_alumno_ibfk_1` FOREIGN KEY (`grupo_fk`) REFERENCES `grupo` (`id_grupo`),
  CONSTRAINT `grupo_alumno_ibfk_2` FOREIGN KEY (`alumno_fk`) REFERENCES `alumnos` (`matricula`),
  CONSTRAINT `grupo_alumno_ibfk_3` FOREIGN KEY (`calificacion_fk`) REFERENCES `calificacion` (`id_calificacion`),
  CONSTRAINT `grupo_alumno_ibfk_4` FOREIGN KEY (`periodo_fk`) REFERENCES `periodo` (`id_periodo`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupo_alumno`
--

LOCK TABLES `grupo_alumno` WRITE;
/*!40000 ALTER TABLE `grupo_alumno` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `horarios`
--

LOCK TABLES `horarios` WRITE;
/*!40000 ALTER TABLE `horarios` DISABLE KEYS */;
INSERT INTO `horarios` VALUES (94,'Lunes','15:40:00','16:41:00'),(95,'Martes','19:02:00','21:04:00');
/*!40000 ALTER TABLE `horarios` ENABLE KEYS */;
UNLOCK TABLES;

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
  `id_programa` int NOT NULL AUTO_INCREMENT,
  `namePrograma` varchar(45) NOT NULL,
  PRIMARY KEY (`id_programa`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
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
) ENGINE=InnoDB AUTO_INCREMENT=86 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taller`
--

LOCK TABLES `taller` WRITE;
/*!40000 ALTER TABLE `taller` DISABLE KEYS */;
INSERT INTO `taller` VALUES (84,'Piano','cultural','https://res.cloudinary.com/doqea1zkf/image/upload/v1728851979/talleres/1728851978979.png',0),(85,'Doxeo','deportiva','https://res.cloudinary.com/doqea1zkf/image/upload/v1729029500/talleres/1729029501162.png',1);
/*!40000 ALTER TABLE `taller` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `after_insert_taller` AFTER INSERT ON `taller` FOR EACH ROW BEGIN
    DECLARE v_error_message VARCHAR(255);
    
    -- Intentar registrar la inserción en la tabla de auditoría
    BEGIN
        DECLARE CONTINUE HANDLER FOR SQLEXCEPTION
        BEGIN
            -- Obtener el mensaje de error
            GET DIAGNOSTICS CONDITION 1 v_error_message = MESSAGE_TEXT;

            -- Registrar el error en la tabla de auditoría
            INSERT INTO auditoria_inserciones (tabla, accion, descripcion)
            VALUES ('taller', 'ERROR', CONCAT('Error al insertar taller con ID ', NEW.id_taller, ': ', v_error_message));
        END;

        INSERT INTO audtoria_inserciones (tabla, accion, descripcion)
        VALUES ('taller', 'INSERT', CONCAT('Se insertó un taller con ID ', NEW.id_taller, ', Nombre: ', NEW.nombre));
    END;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

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
  `userRol` varchar(45) NOT NULL,
  PRIMARY KEY (`id_User`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertable`
--

LOCK TABLES `usertable` WRITE;
/*!40000 ALTER TABLE `usertable` DISABLE KEYS */;
INSERT INTO `usertable` VALUES (2,'jdoe','12345','docente'),(3,'cris','12345','docente'),(4,'beto','12345','docente'),(5,'ron','12345','docente'),(6,'2117031345','$2b$10$ZqlwnBIkWk2dzfxM4OlVBuGW7XOZ2vgFxWqytPdoH6Yry7b4zJrIW','alumno'),(8,'2117031598','$2b$10$fFsRCzj0cjXg4u8/H46ak..VJNI2P3kV3RktJxs0fb.oIe4Zgzlqa','alumno');
/*!40000 ALTER TABLE `usertable` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'uni'
--

--
-- Dumping routines for database 'uni'
--
/*!50003 DROP PROCEDURE IF EXISTS `admin_studentinsert` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `admin_studentinsert`(
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `deleteActividad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteActividad`(
    IN p_id INT
)
BEGIN
    DELETE FROM actividades WHERE id = p_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getActividadById` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getActividadById`(
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
    FROM actividades
    WHERE id = p_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getActividades` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getActividades`()
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
    FROM actividades;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDocente` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getDocente`()
BEGIN
    SELECT d.no_empleado, titulo, d.nombre, d.aPater, d.aMater
    FROM docente d;  -- Asegúrate de que "docentes" es el nombre correcto de la tabla
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getDocentes` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getDocentes`()
BEGIN
    SELECT 
        d.no_empleado,  -- Agregado el ID del docente
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
        t.estatus = 1  -- Solo talleres activos
    GROUP BY 
        d.no_empleado;  -- Agrupar por docente para combinar resultados
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getInfoAlumno` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getInfoAlumno`(IN matricula_alumno INT)
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
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTalleres` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTalleres`()
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
    FROM taller
    WHERE estatus = 1  -- Solo selecciona los talleres activos
    ORDER BY id_taller;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTallerQrud` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTallerQrud`()
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertActividad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertActividad`(
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
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `insertar_taller_con_grupos` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `insertar_taller_con_grupos`(
    IN nombre_taller VARCHAR(45),
    IN tipo_taller ENUM('deportiva', 'cultural'),
    IN img_url_taller VARCHAR(200),
    IN estatus_taller INT,
    IN nombre_docente_completo VARCHAR(135), -- Nombre completo del docente
    IN grupos_json JSON                     -- Grupos en formato JSON
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
    DECLARE docente_taller_id INT;

    -- Validar la cantidad de grupos
    SET grupos_count = JSON_LENGTH(grupos_json);
    IF grupos_count < 1 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Debe haber al menos un grupo.';
    ELSEIF grupos_count > 3 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'No puede haber más de tres grupos.';
    END IF;

    -- Buscar al docente por el nombre completo
    SELECT no_empleado INTO docente_id
    FROM docente
    WHERE CONCAT(nombre, ' ', aPater, ' ', aMater) = nombre_docente_completo;

    -- Si el docente no existe, mostrar un error
    IF docente_id IS NULL THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Docente no encontrado';
    END IF;

    -- Insertar el nuevo taller
    INSERT INTO taller (nombre, tipo, img_url, estatus)
    VALUES (nombre_taller, tipo_taller, img_url_taller, estatus_taller);

    -- Obtener el id del taller recién insertado
    SET taller_id = LAST_INSERT_ID();

    -- Insertar la relación en la tabla docente_taller
    INSERT INTO docente_taller (docente_fk, taller_fk)
    VALUES (docente_id, taller_id);

    -- Obtener el id de la relación recién insertada
    SET docente_taller_id = LAST_INSERT_ID();

    -- Iterar sobre los grupos en el JSON
    WHILE idx < grupos_count DO
        SET grupo_nombre = JSON_UNQUOTE(JSON_EXTRACT(grupos_json, CONCAT('$[', idx, '].nombre')));
        SET dia_horario = JSON_UNQUOTE(JSON_EXTRACT(grupos_json, CONCAT('$[', idx, '].dia')));
        SET hrEntrada = JSON_UNQUOTE(JSON_EXTRACT(grupos_json, CONCAT('$[', idx, '].entrada')));
        SET hrSalida = JSON_UNQUOTE(JSON_EXTRACT(grupos_json, CONCAT('$[', idx, '].salida')));

        -- Insertar un nuevo horario
        INSERT INTO horarios (dia, hrEntrada, hrSalida)
        VALUES (dia_horario, hrEntrada, hrSalida);

        -- Obtener el id del horario recién insertado
        SET horario_id = LAST_INSERT_ID();

        -- Insertar el grupo y enlazarlo con el docente_taller y el horario
        INSERT INTO grupo (grupo, horarios_fk, docente_taller_fk)
        VALUES (grupo_nombre, horario_id, docente_taller_id);

        SET idx = idx + 1;
    END WHILE;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateActividad` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'NO_ZERO_IN_DATE,NO_ZERO_DATE,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateActividad`(
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
    WHERE id = p_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-22 20:51:39
