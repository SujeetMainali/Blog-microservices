const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')
const app = express()
app.use(bodyParser.json());


app.post('/events', (req, res)=>{
    const event = req.body

axios.post('http://localhost:4000/events')
})