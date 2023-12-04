CREATE DATABASE IF NOT EXISTS SQLchallenge;

-- Use the Database -- 

USE SQLchallenge;

CREATE TABLE employees {
    id INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(255) NOT NULL, 
    department VARCHAR(50) NOT NULL,
    position VARCHAR(50) NOT NULL
}