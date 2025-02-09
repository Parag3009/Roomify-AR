const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017'
const mongoDB=async()=>{
   await mongoose.connect(mongoURI, ()=>{
        console.log("connected");
    })
    
}

module.exports=mongoDB;