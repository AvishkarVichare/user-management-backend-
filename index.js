const app = require('./app')

const connectToDB = require('./config/db');

connectToDB();

app.listen(8000,()=>{
    console.log("connected")
})