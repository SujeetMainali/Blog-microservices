import express from 'express'
import {v4 as uuid} from 'uuid'
import bodyParser from 'body-parser'

const app = express()
app.use(bodyParser.json())
const posts = {}

app.get('/posts',(req, res)=>{
    res.send(posts)
})

app.post('/post',(req, res)=>{
    const id = uuid()
   const {title} = req.body
   posts[id] = {
    id, title
   }
    
   res.status(200).send(posts[id])

})


app.listen(4000, ()=>{
    console.log(`http://localhost:4000`);
    
})