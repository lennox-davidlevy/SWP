DROP DATABASE IF EXISTS skincare;

CREATE DATABASE skincare;

USE skincare;

DROP TABLE IF EXISTS user;

CREATE TABLE user (
  id INTEGER NOT NULL AUTO_INCREMENT,
  email VARCHAR(250) NOT NULL UNIQUE,
  username VARCHAR(15) NOT NULL UNIQUE,
  password VARCHAR(250) NOT NULL,
  age INTEGER,
  skin_tone VARCHAR(50),
  undertone VARCHAR (50),
  skin_type VARCHAR (50),
  skin_sens BOOLEAN,
  climate VARCHAR (50),
  enviroment VARCHAR (50),
  skin_concerns VARCHAR(250),
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS manufacturer;

CREATE TABLE manufacturer (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name TEXT NOT NULL,
  origin TEXT,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS product;

CREATE TABLE product (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_manufacturer INTEGER,
  product_name TEXT NOT NULL,
  ingredients TEXT,
  description TEXT,
  PRIMARY KEY(ID),
  FOREIGN KEY (id_manufacturer) REFERENCES manufacturer (ID)
);


DROP TABLE IF EXISTS favorites;

CREATE TABLE favorites (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_user INTEGER,
  id_product INTEGER,
  will_buy_again BOOLEAN,
  PRIMARY KEY (ID),
  FOREIGN KEY (id_user) REFERENCES user (ID),
  FOREIGN KEY (id_product) REFERENCES product (ID)
);

DROP TABLE IF EXISTS ratings;

CREATE TABLE ratings (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_product INTEGER,
  rated_amt INTEGER,
  will_buy_amt INTEGER,
  PRIMARY KEY (ID),
  FOREIGN KEY (id_product) REFERENCES product (ID)
);
