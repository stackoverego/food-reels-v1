const express=require('express')
const cookieParser=require('cookie-parser')
const authrouter=require('./routes/auth.routes')
const foodrouter=require("./routes/food.routes")
const app=express();

app.use(express.json()) //req.body data ke liye

app.use(cookieParser())// to save the token in cookie storage

app.use('/api/auth',authrouter);
app.use('/api/food',foodrouter);

module.exports=app;