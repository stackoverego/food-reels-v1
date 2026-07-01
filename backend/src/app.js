const express=require('express')
const cookieParser=require('cookie-parser')
const authrouter=require('../src/routes/auth.routes')
const app=express();

app.use(express.json()) //req.body data ke liye

app.use(cookieParser())// to save the token in cookie storage

app.use('/api/auth',authrouter);

module.exports=app;