-- MySQL dump 10.13  Distrib 8.0.35, for Win64 (x86_64)
--
-- Host: localhost    Database: dbweb
-- ------------------------------------------------------
-- Server version	8.0.35

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
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `phone2` varchar(10) DEFAULT NULL,
  `bank` varchar(45) DEFAULT NULL,
  `IBAN` varchar(34) DEFAULT NULL,
  `bank2` varchar(45) DEFAULT NULL,
  `IBAN2` varchar(34) DEFAULT NULL,
  `bank3` varchar(45) DEFAULT NULL,
  `IBAN3` varchar(34) DEFAULT NULL,
  `emailID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (3,'Stavros','Savvidis@GMAIL.COM','6988160610','','Eurobank','4456 4564 6565 4654 6564','╬Ü╧ì╧Ç╧ü╬┐╧à','GR45 6456 4654 6546 5465 46','','',NULL),(8,'PENTAGON','zapat@gmail.com','6988160610','2351025928','Alpha','GR65 6565 5454 6654 6546 54','Optima','5897987897897897897897899878','Eurobank','GR47587884555587885554','xa@gmail.com'),(11,'stavros','Savvidis@GMAIL.COM','','','','','','','','','stavros@gmail.com'),(16,'stavros','','','','','','','','','','jojo1@gmail.com'),(17,'papa','','','','','','','','','','jojo1@gmail.com'),(18,'Mpoufan','','','','','','','','','','jojo1@gmail.com'),(20,'Ela','564@gmail.com','6988160610','2351025928','Alpha','GR8457 8789 8888 8888 8888 8','Optima','GR4564 6465 4654 5646 5656 5','╬Ü╧ì╧Ç╧ü╬┐╧à','GR8978 4544 5744 7747 7474 7','sk@gmail.com'),(21,'stavros','','','','','','','','','','xa@gmail.com'),(22,'Stavros','savv@gmail.com','123123','123123','Attica','1231 2312 3123 12','','','','','paparakia@gmail.com');
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `code` varchar(45) NOT NULL,
  `size` varchar(45) DEFAULT NULL,
  `quantity` int NOT NULL,
  `pbf` decimal(10,2) DEFAULT NULL,
  `paf` decimal(10,2) DEFAULT NULL,
  `finalprice` decimal(10,2) NOT NULL,
  `emailID` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (7,'papa','papa','54',54,545.00,45.00,4.00,'\"sk@gmail.com\"'),(8,'stavros','5','54',54,54.00,54.00,54.00,'\"sk@gmail.com\"'),(9,'45','45','45',54,545.00,454.00,5454.00,NULL),(10,'77','7','7',7,7.00,7.00,7.00,NULL),(20,'╬£╧Ç╬┐╧à╧å╬▒╬╜','47','L',40,18.00,25.00,47.00,'stavros@gmail.com'),(21,'stavros','12','',12,12.00,12.00,12.00,'stavros@gmail.com'),(22,'papa','1212','12',12,12.00,12.00,12.00,'stavros@gmail.com'),(32,'╧Ç╬▒╬╜╧ä╬╡╬╗╬┐╬╜╬╣','0555╬║','54',20,20.00,25.00,3000.00,'xa@gmail.com'),(35,'564','564','5646',5456,465.00,4654.00,654.00,'93@gmail.com'),(36,'kapelo','k0500','12',50,12.00,12.00,12.00,'jojo1@gmail.com'),(39,'Stavros','Savv','1234',1212,1600.00,2480.00,6000.00,'sk@gmail.com'),(40,'stavros','564','54',12,150.00,186.00,300.00,'xa@gmail.com'),(41,'Stavros','123','XL',123,12.00,34.00,12.00,'paparakia@gmail.com');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `register`
--

DROP TABLE IF EXISTS `register`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `register` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `register`
--

LOCK TABLES `register` WRITE;
/*!40000 ALTER TABLE `register` DISABLE KEYS */;
INSERT INTO `register` VALUES (1,'papapa','papap@gmai.com','dsfpklm;fasdlm;k'),(2,'897897','987897987@gmail.com','89789+7897897'),(3,'STAVROS','stavsavv2@gmail.com','savvidis3'),(4,'stavros','stav@gmail.com','1234'),(5,'skata','sk@gmail.com','1234'),(6,'stAVsav','stav33@gmail.com','1122'),(7,'skf','skf@gmail.com','123'),(8,'sdf','sdf@gmail.com','4324'),(9,'sdfsd','sdfkj@gmail.com','432'),(10,'kjsdf','lksjdf@dfg.com','skldfj'),(11,'skouf','lsdf@gmail.com','123123'),(12,'asdsa','dfg@gmail.com','3428394234'),(13,'sdfsdf','dskfji@gmail.com','238947fdh'),(14,'sdfsdf','sdf@dfg.com','sder32'),(15,'tralalala','kljsdf@gmail.com','978324kjfg'),(16,'kljsdfioej','glkj@gmail.com','asdlkjhsf33'),(17,'lkjsdkfl','klsdjf@gmail.com','ije3fsdf'),(18,'dfkjsd','sdfklj@gmai.com','23894sdf'),(19,'skoufddd','vcdfg@gmail.com','2348sdf'),(20,'sdfd','sad@sdf','sdfsd'),(21,'sdffse','wej@gmail.com','123123'),(22,'dfklgj','gkl@gmail.com','32fde'),(23,'sdf','wedx@22','sd'),(24,'sdfe','sedre32@gdf','erw'),(25,'sdfsdf','ssdkf@gmail','sdfe'),(26,'kjsdsa','sdj@gnau','asdw'),(27,'sadsad','sdf@sdf','sdfe'),(28,'jklshdfjkhhs','sdklfj@gsdlikfj','lksjdfklsdf'),(29,'dfgrr','jshdfjkshe@gmail.com','isldjfe'),(30,'klsdjfkldsj','skldjlk@gmail.com','sdfkljskl3'),(31,'dfkgjjklfdg','sdklfsdlkf@gmail.com','sdfkljsk'),(32,'skosdkljfhek','sdkjfkdsl@gmail.com','sdjf'),(33,'sdfsdfjh','sfklj@gmail.com','slkjfe'),(34,'sdfsdfkj','sdkfjlk@sdfglkj','sdlkf'),(35,'sdfsdfkl','kjsdfklj@klsdjf','lksdjf'),(36,'dfgdfgfdg','dfdfg|@sdf','sdf'),(37,'dsfeert','dfgdfilj@dlkjdfklg','sdfkjsdf'),(38,'wejklsdklfj','lksdjf@sdlkfj','lkjsdfe'),(39,'ikwjerkl','klsjdfklj@sdfsdf','skldjfkl'),(40,'sdfsef','sdfewojk@dsf','skldfje'),(41,'sdfsdfew','sdfdsf@sdfkl','sdklfjs'),(42,'sdfsdfe','sfsdf@dfg','fdgdfg'),(43,'sdfskdfj','slkdfjlk@sdlkfj','lksdf'),(44,'sdf','sdfsdfklj@sdlfkj','klsdf'),(45,'fdgdfg','dfgdfgkl@kljdfs','lkjsdf'),(46,'dfsdfddfsdfj','sdfsdfklj@gmail.com','lkjsdfe'),(47,'sdfsdf','klsdjf@gmai.com','sdfjk'),(48,'sdf','kljsdf@sdflkj','slkf'),(49,'sdflksjdfkl','klsjdfklj@gmailjsd','lksjdf'),(50,'dfesdf','skldjf@sdfjlk','klsjdf'),(51,'sdfe','sdsdf@klsdjf','sdf'),(52,'stavros','sdfklj@sdfe','klsjdfklj'),(53,'stavrosewwer','sdflij@fsldkfds','sdfsdf'),(54,'stavrossdfsdfs','sdfsdfs@sdjkf','sdfe'),(55,'stavrosesdf','sdfsdf@sdfsd','sdfsdf'),(56,'stavrossdf','sdfsdf@sfsd','sdfsdfewr'),(57,'stavrosdfgdfg','werewrdsf@sdfe','wersdf'),(58,'stavrosdfgdfg','dfgdger@sdf','dfgdfg'),(59,'stavroswerdfs','dfgdfg@sdfe','sdfwef'),(60,'sdfsdf','sdffds@sdfse','sfef'),(61,'dgfereg','sdfdsf@ilksjdf','fwef'),(62,'dfgdfgkj','slkdfjkl@sdxlfkj','lksdf'),(63,'sdfsdfe','sdfsef@sdfe','sfe'),(64,'ksldjfkljs','lksjdflks@lksdjfkl','lksjdfsd'),(65,'sdfsdf','sxdfsd@sdf','dsf'),(66,'sdfsdfkjl','klsjdfklsd@lkdsjf','lksdjf'),(67,'dsfgdfsg','qjhsdfjlk@kjhdsf','kjsdf'),(68,'sdfsdf','sdfsdf@dsfew','asd'),(69,'sk@gmai.com','sk@gmai.com','fdfdfd'),(70,'sk@gmail.com','54554545@gmail.com','45454545'),(71,'popoop','opopopopopopopop@gmail.com','56454545'),(72,'asfdasdfad','asdfasdfasd@gmail.com','123123123'),(73,'234324432','0988989898@gmail.com','989898'),(74,'Stavros','savvi@gmail.com','1234'),(75,'st','st@gmail.com','1234'),(76,'xa','xa@gmail.com','1234'),(77,'stavros','savvidis@gmail.com','1234'),(78,'stavros','stavros@gmail.com','1234'),(79,'xarhs','xarhs@gmail.com','1234'),(80,'Xarhs','xarh@gmail.com','1234'),(81,'xarhs','xarhssa@gmail.com','1234'),(82,'Stavros','93@gmail.com','1234'),(83,'sala','sala@gmail.com','1234'),(84,'jojo','jojo1@gmail.com','1234'),(85,'Stavros','zapa@gmail.com','1234'),(86,'zozo','zozo@gmai.com','1234'),(87,'zozo','zozo@gmail.com','1234'),(88,'koko','koko@gmail.com','1234'),(89,'Stavros','zapat1@hotmail.com','sav1234'),(90,'Stavros','hophop@gmail.com','1234'),(91,'Stavros','hophop1@gmail.com','1234'),(92,'malakia','malakia@gmail.com','123'),(93,'Stavros','paparakia@gmail.com','123');
/*!40000 ALTER TABLE `register` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-14 14:59:47
