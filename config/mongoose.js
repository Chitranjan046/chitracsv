const mongoose = require('mongoose');

const DB = "mongodb+srv://Chitranjan046:Chitra046@cluster0.v3hrm2j.mongodb.net/Chitra?retryWrites=true&w=majority"

mongoose.connect(DB).then(()=>{
    console.log("DataBase Connection SuccessFull")
}).catch((err)=>console.log("No Connection Sonething Error"+err));

const db = mongoose.connection;

db.on("error",console.log.bind(console,"Error in Connecting Database"));

db.once("open",function(){
    console.log("SuccesFull Connected To the Database")
})

module.exports = db;


// const mongoose  = require('mongoose');

//  mongoose.connect('mongodb://127.0.0.1/Yogendra_Phoopha');

//  const db = mongoose.connection;

//  db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

//  db.once('open', function(){
//     console.log('Connected to Database:: MongoDB');
//  });

//  module.exports = db;
