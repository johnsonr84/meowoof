DROP DATABASE IF EXISTS meowoof;

CREATE DATABASE meowoof;

USE meowoof;

CREATE TABLE signup (
    id INT NOT NULL AUTO_INCREMENT,
    firstName VARCHAR (15) NULL,
    lastName VARCHAR (15) NULL,
    signupEmail VARCHAR (25) NULL,
    signupPassword VARCHAR (25) NULL,
    signupBday DATETIME Null,
    userGender VARCHAR (15) NULL,
    userPhone NUMERIC (13) NULL,
    streetName VARCHAR (15) NULL,
    city VARCHAR (25) NULL,
    theState VARCHAR (25) NULL,
    zipCode NUMERIC (10) NULL,
    PRIMARY KEY (id)
);


INSERT INTO signup (firstName, lastName, signupEmail, signupPassword, signupBday, userGender, userPhone, streetName, city, theState, zipCode)
VALUES ("Bob","Park", "testemail@gmail.com","myPassword123","1992/05/06","Male","4353137818","Main Street","Denver","Colorado","83942");

CREATE TABLE petProfile (
    id int NOT NULL AUTO_INCREMENT,
    animal VARCHAR (50) NULL,
    petName VARCHAR (50) NULL,
    breed VARCHAR (50) NULL,
    chip NUMERIC (50) NULL,
    animalBirthday DATETIME NULL,
    gender VARCHAR (50) NULL,
    neutered VARCHAR (50) NULL,
    color VARCHAR (50) NULL,
    animalWeight NUMERIC  (50) NULL,
    PRIMARY KEY (id)
);

INSERT INTO petProfile (animal, petName, breed, chip, animalBirthday, gender, neutered, color, animalWeight)
VALUES("Dog","Philly","Poodle","123456789","2017/01/01","Female","Yes","brown","35")