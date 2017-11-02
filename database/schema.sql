-- Create the database burgers and specified it for use.
CREATE DATABASE school_db;

-- Switch or use school_db
USE school_db;

-- Create the table actors.
CREATE TABLE school_table (
  student_id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  birthdate DATE NOT NULL,
  sex ENUM ('M', 'F') NOT NULL,
  tuition FLOAT NULL,
  grade INTEGER(11) NOT NULL,
  teacher VARCHAR(30), NOT NULL,
  email VARCHAR(60) NULL,
  street VARCHAR(50) NOT NULL,
  city VARCHAR(40) NOT NULL,
  state VARCHAR(2) NOT NULL DEFAULT "AZ",
  zip MEDIUMINT UNSIGNED NOT NULL,
  phone VARCHAR(20) NOT NULL
);
