const app = require('./app');
const cors = require('cors');

const connectToDB = require('./config/db');

connectToDB();

app.listen(8000,()=>{
    console.log("connected")
})