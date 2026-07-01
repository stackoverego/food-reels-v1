require('dotenv').config()
const app=require('./src/app')
const port=process.env.PORT || 4000;
const connectToDB=require('./src/config/database')


connectToDB();
app.listen(port,()=>{
    console.log('server started at port '+port);
})