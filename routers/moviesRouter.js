const express = require('express');
const connection = require('../data/db');
const router = express.Router();

//mostra tutti i post

router.get('/', (req, res) => {
    const sql = "SELECT * FROM movies"
    connection.query(sql, (err, results) => {
        if (err) {
            console.error("Errore nella query:", err);
            res.status(500).send("Errore nel database");
            return;
        }
        res.json(results); // risultati della query
    });
})


// mostra il post singolo 
router.get('/:id', (req,res) => {
    const id= req.params.id
    const sql = "select M.*, JSON_ARRAYAGG(R.text) from movies as M join reviews as R on R.movie_id = M.id where M.id = ?"
    connection.query(sql, [id], (err, results) => {
        if (err) {
            res.status(500).send("errore nel database");
            return;
        }
        res.json(results);
    })
});

module.exports = router