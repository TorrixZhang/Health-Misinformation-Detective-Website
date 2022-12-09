/*
Navicat MySQL Data Transfer

Source Server         : sss
Source Server Version : 50724
Source Host           : localhost:3306
Source Database       : yy

Target Server Type    : MYSQL
Target Server Version : 50724
File Encoding         : 65001

Date: 2022-10-19 22:23:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for booking
-- ----------------------------
DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `sdate` datetime DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `food` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `tourist_num` int(11) DEFAULT NULL,
  `contact_num` int(11) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of booking
-- ----------------------------
INSERT INTO `booking` VALUES ('1', '2022-10-19 00:00:00', '2 days', 'Special', 'Average', '1', '123', '123');
INSERT INTO `booking` VALUES ('2', '2022-10-19 00:00:00', '2 days', 'Special', 'Average', '3', '123123', '1234');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '123', '123');
INSERT INTO `user` VALUES ('2', '333', '333');
INSERT INTO `user` VALUES ('3', '1234', '1234');
