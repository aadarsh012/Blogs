const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.set('view engine', 'pug')
app.set('views','views')

app.use(express.static(path.join(__dirname,'public')))


let blogs = []


app.use('/post',(req,res,next)=>{

    blogs.push({tit:req.body.title , img:req.body.imglink})
    
    console.log(blogs)
    
    res.redirect('/blogs')
    
})


app.get('/', (req,res,next)=>{
    res.render('home',{path:'/' , pageTitle : 'Home Page'})
})

app.get('/blogs',(req,res,next)=>{
    res.status(200).render('blogs', {blogs , path:'/blogs' , pageTitle:'Blogs'})  
})

app.get('/input',(req,res,next)=>{
    res.status(200).render('addpost', {path:'/input' , pageTitle:'Add-Post'})
})



app.listen(80)


