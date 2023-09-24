const mongoose = require('mongoose');
const uri = 'mongodb+srv://avi:12345@cluster0.eeitc2w.mongodb.net/usermn?retryWrites=true&w=majority';

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