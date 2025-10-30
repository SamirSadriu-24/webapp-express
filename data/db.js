const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:process.env.DB_host,
    user:process.env.DB_user,
    password:process.env.DB_password,
    database:process.env.DB_db
});

connection.connect((err) =>{
    if (err) throw err;
    console.log("Connected to DB")
});

module.exports = connection