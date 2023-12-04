const mysql = require('mysql');

// Creating my database connection

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Password123',
    database: ''
});

const questions [{
    type: 'list',
    name: 'option',
    message: 'Which Department would you like to look at?',
    choices: ['IT', 'HR', 'Finance', 'Marketing', 'Marketing', 'Engineering']
}]

