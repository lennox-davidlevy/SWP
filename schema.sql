DROP DATABASE IF EXISTS test;

CREATE DATABASE skincare;

USE skincare;

CREATE TABLE products (
  id int NOT NULL AUTO_INCREMENT,
  manufacturer int NOT NULL,
  description varchar(50) NOT NULL,
  ingredients varchar(1000) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT,
  username varchar (15) NOT NULL UNIQUE,
  password TEXT NOT NULL,
  age int,
  skin_tone varchar (25),
  skin_type varchar (25),
  sensitive boolean,
  enviroment varchar (15),
  climate varchar (50),
  PRIMARY KEY(ID),
);


CREATE TABLE favorites (
  id int NOT NULL AUTO_INCREMENT,
  user_id int,
  product_id int,
  will_buy_again boolean,
  PRIMARY KEY (id),
  FOREIGN KEY (user_id) REFERENCES users(id)
  FOREIGN KEY (product_id) REFERENCES products(id)
);
