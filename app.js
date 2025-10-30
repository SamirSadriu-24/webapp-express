const express = require('express')
const app = express()
const port = 3000

//facciamo in modo che il file env possa funzionare
require('dotenv').config();

//connettiamo il database
const connection = require('./data/db')

//importiamo il router
const moviesRouter = require('./routers/moviesRouter');


//faccio la pagina inizale
app.get('/', (req, res) => {
    res.send("Web.app.Movies")
});

//faccio usare il router
app.use ('/movies', moviesRouter);










app.listen(port, () => {
    console.log(`Server Listening on port http://127.0.0.1:${port}`)
})