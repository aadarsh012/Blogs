const express = require('express')
const path = require('path')
const router = express.Router()

const app = express()

app.set('view engine', 'pug')
app.set('views','views')

app.use(express.static(path.join(__dirname,'public')))

app.get('/', (req,res,next)=>{
    res.render('index')
})

app.get('/blogs',(req,res,next)=>{
    res.status(200).render('blogs')
})
app.get('/input',(req,res,next)=>{
    res.status(200).render('addpost')
})
app.get('/github',(req,res,next)=>{
    res.status(200).redirect('github.com')
})
app.listen(80)
