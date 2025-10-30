const express = require('express')
const app = express()
const port = 3000


require('dotenv').config();


const connection = require('./data/db')

app.get('/', (req, res) => {
    res.send("Web.app.Movies")
});








app.listen(port, () => {
    console.log(`Server Listening on port http://127.0.0.1:${port}`)
})