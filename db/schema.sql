DROP DATABASE IF EXISTS budget;

CREATE DATABASE budget;

USE budget;

CREATE TABLE transact (
    id int NOT NULL AUTO_INCREMENT,
    date date,
    amount decimal(10, 2) NOT NULL,
    description varchar(50) NOT NULL,
    category_id int,
    account_id int,
    PRIMARY KEY (id)
);

CREATE TABLE categories (
    id int NOT NULL AUTO_INCREMENT,
    description varchar(50) NOT NULL,
    budget int,
    PRIMARY KEY (id)
);

CREATE TABLE accounts (
    id int NOT NULL AUTO_INCREMENT,
    description varchar(50) NOT NULL,
    account_type varchar(50) NOT NULL,
    total decimal(10, 2) default 0 NOT NULL,
    PRIMARY KEY (id)
);

