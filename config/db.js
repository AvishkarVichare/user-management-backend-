const mongoose = require('mongoose');

// URI for mongodb atlas 
const uri = process.env.MONGO_URI;

//mongodb connection using mongoose
const connectToDB = ()=>{
    mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(conn=>{
        console.log(`connected to db: ${conn.connection.name}`);
        
    }).catch(err=>{
        console.log(err.message)
    })
}


module.exports = connectToDB;