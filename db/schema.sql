DROP DATABASE IF EXISTS budget;

CREATE DATABASE budget;

USE budget;

CREATE TABLE transact (
    id int NOT NULL AUTO_INCREMENT,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    amount decimal(10, 2) NOT NULL,
    description varchar(50) NOT NULL,
    category_id int,
    account_id int,
    PRIMARY KEY (id)
);

CREATE TABLE categories (
    id int NOT NULL AUTO_INCREMENT,
    description varchar(50) NOT NULL,
    total decimal(10, 2) default 0 NOT NULL,     
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

INSERT INTO categories (description, budget) VALUES ("Auto Cost", 600);
INSERT INTO categories (description, budget) VALUES ("Monthly Revenue", 1500);
INSERT INTO transact (amount, description, category_id, account_id) VALUES (200, "auto payment", 1, 1);
INSERT INTO transact (amount, description, category_id, account_id) VALUES (500, "paycheck", 2, 2);
INSERT INTO accounts (description, account_type) VALUES ("Capital One", "debit");
INSERT INTO accounts (description, account_type) VALUES ("Capital One Bank Account ", "credit");