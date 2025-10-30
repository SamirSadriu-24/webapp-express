const express = require('express');
const connection = require('../data/db');
const router = express.Router();

router.get('/', function (req, res) {
    const sql = "SELECT * FROM movies"
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Errore nella query:", err);
            return;
        }
        res.json(results); // risultati della query
    });
})

module.exports = router