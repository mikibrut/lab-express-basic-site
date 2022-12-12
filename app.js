const express = require('express')
const app = express()

app.use(express.static('public'));

app.get('/', (req, res) => {
    // __dirname es una variable de entorno
    res.sendFile(__dirname + '/views/index.html')
  })

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html')
})


app.get('/works', (req,res) => {
    res.sendFile(__dirname + '/views/works.html')
})
app.listen(3000)