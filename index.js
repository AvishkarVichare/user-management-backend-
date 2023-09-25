require('dotenv').config()
const app = require('./app');
const Port = process.env.PORT;

// importing DB connection function 
const connectToDB = require('./config/db');

// calling our db connection function 
connectToDB();

// listening to port 
app.listen(Port,()=>{
    console.log("connected")
})