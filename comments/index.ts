import express from 'express'
import bodyParser from 'body-parser'
const app = express()
app.use(bodyParser.json())

app.get('/posts/:id/comments', (req, res)=>{
    res.json({
        name : "sujeet"
    })
})



app.listen(3000, ()=>{
    console.log(`http://localhost:3000`);
    
})