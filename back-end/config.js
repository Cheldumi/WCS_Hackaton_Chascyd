const  mysql = require('mysql');
const  connection = mysql.createConnection({
    host :  'localhost', 
    user :  'root',
    password :  '5cµ6Qm[Q6f',
    database :  'advent_calendar',
});

module.exports = connection;