const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

//facciamo in modo che il file env possa funzionare
require('dotenv').config();

//connettiamo il database
const connection = require('./data/db')

app.use(cors({
    origin: 'http://localhost:5173',
}));

app.use(express.static('public'));

//per leggere i file json
app.use(express.json());

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